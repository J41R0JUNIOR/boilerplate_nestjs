import { Injectable } from "@nestjs/common";
import { ProductRequestDto } from "./dto.request.products";
import { PrismaService } from "src/prisma/service.prisma";
import { ProductRequestUpdateDto } from "./dto.request.update.products";

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

    update(dto: ProductRequestUpdateDto){
        return this.prisma.product.update({
            where: { id: dto.id },
            data: { name: dto.name, price: dto.price }
        });   
    }

    delete(id: number){
        return this.prisma.product.delete({ where: { id } });
    }
}