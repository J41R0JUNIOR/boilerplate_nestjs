import { ManagerResponseDto } from 'src/managers/dto.response.manager';
import { ProductResponseDto } from 'src/products/dto.response.products';
export declare class EnterpriseResponseDto {
    id: number;
    name: string;
    manager: ManagerResponseDto;
    products: ProductResponseDto[];
    constructor(enterprise: any);
}
