import { Request, Response } from "express";
import { ProductService } from './products.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    criarProduto(req: Request, res: Response): import(".prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        name: string;
        price: number;
        enterpriseId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    listarProdutos(_: Request, res: Response): import(".prisma/client").Prisma.PrismaPromise<({
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
    atualizarProduto(req: Request, res: Response): import(".prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        name: string;
        price: number;
        enterpriseId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    deletarProduto(req: Request, res: Response): import(".prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        name: string;
        price: number;
        enterpriseId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
