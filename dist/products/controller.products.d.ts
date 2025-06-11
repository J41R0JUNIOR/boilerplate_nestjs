import { Request } from "express";
import { ProductService } from './service.products';
import { ProductRequestDto } from './dto.request.products';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(dto: ProductRequestDto): import(".prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        name: string;
        price: number;
        enterpriseId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    listarProdutos(): import(".prisma/client").Prisma.PrismaPromise<({
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
    atualizarProduto(req: Request): import(".prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        name: string;
        price: number;
        enterpriseId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    deletarProduto(req: Request): import(".prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        name: string;
        price: number;
        enterpriseId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
