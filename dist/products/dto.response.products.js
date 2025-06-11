"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResponseDto = void 0;
const dto_response_enterprise_1 = require("../enterprises/dto.response.enterprise");
class ProductResponseDto {
    id;
    name;
    price;
    enterprise;
    constructor(product) {
        this.id = product.id;
        this.name = product.name;
        this.price = product.price;
        if (product.enterprise) {
            this.enterprise = new dto_response_enterprise_1.EnterpriseResponseDto(product.enterprise);
        }
    }
}
exports.ProductResponseDto = ProductResponseDto;
//# sourceMappingURL=dto.response.products.js.map