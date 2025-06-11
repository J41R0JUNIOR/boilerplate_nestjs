import { ManagerResponseDto } from 'src/managers/dto.response.manager';
import { ProductResponseDto } from 'src/products/dto.response.products';

export class EnterpriseResponseDto {
  id: number;
  name: string;
  manager?: ManagerResponseDto;
  products?: ProductResponseDto[];

  constructor(enterprise: any) {
    this.id = enterprise.id;
    this.name = enterprise.name;

    if (enterprise.manager) {
      this.manager = new ManagerResponseDto(enterprise.manager);
    }

    if (enterprise.products) {
      this.products = enterprise.products.map(
        (p: any) => new ProductResponseDto(p)
      );
    }
  }
}
