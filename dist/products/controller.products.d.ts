import { ProductService } from './service.products';
import { ProductRequestDto } from './dto.request.products';
import { ProductRequestUpdateDto } from './dto.request.update.products';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
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
    update(dto: ProductRequestUpdateDto): import(".prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        name: string;
        price: number;
        enterpriseId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    delete(id: string): import(".prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        name: string;
        price: number;
        enterpriseId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
