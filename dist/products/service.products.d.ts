import { ProductRequestDto } from "./dto.request.products";
import { PrismaService } from "src/prisma/service.prisma";
import { ProductRequestUpdateDto } from "./dto.request.update.products";
import { ProductResponseDto } from "./dto.response.products";
export declare class ProductService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: ProductRequestDto): Promise<ProductResponseDto>;
    listById(id: number): Promise<ProductResponseDto>;
    createAll(dtos: ProductRequestDto[]): Promise<ProductResponseDto[]>;
    getAll(): Promise<ProductResponseDto[]>;
    update(dto: ProductRequestUpdateDto): Promise<ProductResponseDto>;
    delete(id: number): Promise<ProductResponseDto>;
}
