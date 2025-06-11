import { ProductRequestDto } from "./dto.request.products";
import { PrismaService } from "src/prisma/service.prisma";
export declare class ProductService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: ProductRequestDto): import(".prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        name: string;
        price: number;
        enterpriseId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    getAll(): import(".prisma/client").Prisma.PrismaPromise<({
        enterprise: {
            id: number;
            name: string;
        };
    } & {
        id: number;
        name: string;
        price: number;
        enterpriseId: number;
    })[]>;
    update(id: number, name: string, price: number): import(".prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        name: string;
        price: number;
        enterpriseId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    delete(id: number): import(".prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        name: string;
        price: number;
        enterpriseId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
