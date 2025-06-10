import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

@Injectable()
export class ProductService {

    create(name, price, enterpriseId) {

        return prisma.product.create({
            data: { name, price, enterpriseId }
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