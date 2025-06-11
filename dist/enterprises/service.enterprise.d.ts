import { PrismaService } from '../prisma/service.prisma';
import { EnterpriseRequestDto } from './dto.request.enterprise';
import { EnterpriseResponseDto } from './dto.response.enterprise';
export declare class EnterpriseService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<EnterpriseResponseDto[]>;
    create(dto: EnterpriseRequestDto): Promise<EnterpriseResponseDto>;
}
