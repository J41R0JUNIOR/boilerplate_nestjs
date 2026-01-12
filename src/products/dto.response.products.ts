import { EnterpriseResponseDto } from "src/enterprises/dto.response.enterprise";

export class ProductResponseDto {
    id: number;
    name: string;
    price: number;
    enterprise?: EnterpriseResponseDto;

    constructor(product: any) {
        this.id = product.id;
        this.name = product.name;
        this.price = product.price;

        if (product.enterprise) {
        this.enterprise = new EnterpriseResponseDto(product.enterprise);
        }
    }
}
