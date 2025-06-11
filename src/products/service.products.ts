import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { ProductRequestDto } from "./dto.request.products";

const prisma = new PrismaClient();

@Injectable()
export class ProductService {

    create(dto: ProductRequestDto) {

        return prisma.product.create({
            data: { name: dto.name, price: dto.price, enterpriseId: dto.enterpriseId }
        });
    }

    getAll(){
        return prisma.product.findMany({ include: { enterprise: true } });
    }

    update(id: number, name: string, price: number){
        return prisma.product.update({
            where: { id },
            data: { name, price }
        });   
    }

    delete(id: number){
        return prisma.product.delete({ where: { id } });
    }
}