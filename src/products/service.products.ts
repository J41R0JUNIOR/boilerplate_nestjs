import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { ProductRequestDto } from "./dto.request.products";
import { PrismaService } from "src/prisma/service.prisma";

@Injectable()
export class ProductService {
     constructor(private readonly prisma: PrismaService) {}

    create(dto: ProductRequestDto) {

        return this.prisma.product.create({
            data: { name: dto.name, price: dto.price, enterpriseId: dto.enterpriseId }
        });
    }

    getAll(){
        return this.prisma.product.findMany({ include: { enterprise: true } });
    }

    update(id: number, name: string, price: number){
        return this.prisma.product.update({
            where: { id },
            data: { name, price }
        });   
    }

    delete(id: number){
        return this.prisma.product.delete({ where: { id } });
    }
}