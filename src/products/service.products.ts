import { Injectable } from "@nestjs/common";
import { ProductRequestDto } from "./dto.request.products";
import { PrismaService } from "src/prisma/service.prisma";
import { ProductRequestUpdateDto } from "./dto.request.update.products";
import { ProductResponseDto } from "./dto.response.products";

@Injectable()
export class ProductService {
    constructor(private readonly prisma: PrismaService) {}

    async create(dto: ProductRequestDto): Promise<ProductResponseDto> {
        const response = await this.prisma.product.create({
            data: {
                name: dto.name,
                price: dto.price,
                enterpriseId: dto.enterpriseId
            }
        });

        const product = await this.listById(response.id);

        return product;
    }

    async listById(id: number): Promise<ProductResponseDto> {
        const product = await this.prisma.product.findUnique({
            where: { id },
            include: { enterprise: true } 
        });

        if (!product) {
            throw new Error('Product not found');
        }

        return new ProductResponseDto(product);
    }

    async createAll(dtos: ProductRequestDto[]): Promise<ProductResponseDto[]> {
        const createdProducts = await Promise.all(
            dtos.map(dto =>
                this.prisma.product.create({
                    data: {
                        name: dto.name,
                        price: dto.price,
                        enterpriseId: dto.enterpriseId
                    },
                })
            )
        );

        const productsWithEnterprise = await Promise.all(
            createdProducts.map(p => this.listById(p.id))
        );

        return productsWithEnterprise;
    }

    async getAll(): Promise<ProductResponseDto[]>{
        const response = await this.prisma.product.findMany({ include: { enterprise: true } });

        return response.map(p => new ProductResponseDto(p));
    }

    async update(dto: ProductRequestUpdateDto): Promise<ProductResponseDto> {
        await this.prisma.product.update({
            where: { id: dto.id },
            data: { name: dto.name, price: dto.price }
        });

        return this.listById(dto.id);
    }

    async delete(id: number): Promise<ProductResponseDto> {
        const deleted = await this.prisma.product.delete({
            where: { id },
            include: { enterprise: true }
        });

        return new ProductResponseDto(deleted);
    }
}