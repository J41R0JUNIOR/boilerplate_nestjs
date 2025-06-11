"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterpriseResponseDto = void 0;
const dto_response_manager_1 = require("../managers/dto.response.manager");
const dto_response_products_1 = require("../products/dto.response.products");
class EnterpriseResponseDto {
    id;
    name;
    manager;
    products;
    constructor(enterprise) {
        this.id = enterprise.id;
        this.name = enterprise.name;
        if (enterprise.manager) {
            this.manager = new dto_response_manager_1.ManagerResponseDto(enterprise.manager);
        }
        if (enterprise.products) {
            this.products = enterprise.products.map((p) => new dto_response_products_1.ProductResponseDto(p));
        }
    }
}
exports.EnterpriseResponseDto = EnterpriseResponseDto;
//# sourceMappingURL=dto.response.enterprise.js.map