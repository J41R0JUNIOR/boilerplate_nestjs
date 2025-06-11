import { EnterpriseService } from './service.enterprise';
import { EnterpriseRequestDto } from './dto.request.enterprise';
import { EnterpriseResponseDto } from './dto.response.enterprise';
export declare class EnterpriseController {
    private readonly enterpriseService;
    constructor(enterpriseService: EnterpriseService);
    getAll(): Promise<EnterpriseResponseDto[]>;
    create(dto: EnterpriseRequestDto): Promise<EnterpriseResponseDto>;
}
