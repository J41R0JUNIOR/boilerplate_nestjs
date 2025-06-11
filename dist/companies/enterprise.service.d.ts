import { EnterpriseRequestDto } from './dto.request.enterprise';
export declare class EnterpriseService {
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
            enterpriseId: number;
            price: number;
        }[];
    } & {
        id: number;
        name: string;
    })[]>;
    create(dto: EnterpriseRequestDto): import(".prisma/client").Prisma.Prisma__EnterpriseClient<{
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
