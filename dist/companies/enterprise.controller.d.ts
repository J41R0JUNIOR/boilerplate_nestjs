import { EnterpriseService } from './enterprise.service';
export declare class EnterpriseController {
    private readonly enterpriseService;
    constructor(enterpriseService: EnterpriseService);
    getAll(): import(".prisma/client").Prisma.PrismaPromise<({
        manager: {
            id: number;
            name: string;
            phone: string;
            email: string;
            cpf: string;
            enterpriseId: number;
        } | null;
        products: {
            id: number;
            name: string;
            price: number;
            enterpriseId: number;
        }[];
    } & {
        id: number;
        name: string;
    })[]>;
    create(body: {
        name: string;
        manager: any;
    }): import(".prisma/client").Prisma.Prisma__EnterpriseClient<{
        manager: {
            id: number;
            name: string;
            phone: string;
            email: string;
            cpf: string;
            enterpriseId: number;
        } | null;
    } & {
        id: number;
        name: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
