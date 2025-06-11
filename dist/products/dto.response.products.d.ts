import { EnterpriseResponseDto } from "src/enterprises/dto.response.enterprise";
export declare class ProductResponseDto {
    id: number;
    name: string;
    price: number;
    enterprise?: EnterpriseResponseDto;
    constructor(product: any);
}
