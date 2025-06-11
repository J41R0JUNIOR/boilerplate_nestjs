import { ProductRequestDto } from "./dto.request.products";
import { PrismaService } from "src/prisma/service.prisma";
import { ProductRequestUpdateDto } from "./dto.request.update.products";
export declare class ProductService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: ProductRequestDto): import(".prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        name: string;
        price: number;
        enterpriseId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    createAll(dtos: ProductRequestDto[]): Promise<{
        id: number;
        name: string;
        price: number;
        enterpriseId: number;
    }[]>;
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
    update(dto: ProductRequestUpdateDto): import(".prisma/client").Prisma.Prisma__ProductClient<{
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
