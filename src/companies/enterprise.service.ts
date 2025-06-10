import { Injectable } from '@nestjs/common';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

@Injectable()
export class EnterpriseService {

    getAll(){
        return prisma.enterprise.findMany({
        include: { manager: true, products: true }
        }); 
    }

    create(name: string, manager: any) {
        return prisma.enterprise.create(
            {
            data: {
                name,
                manager: {
                create: manager,
                }
            },
            include: { manager: true }
            }
        );
    }
}