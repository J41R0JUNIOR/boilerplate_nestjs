"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerResponseDto = void 0;
class ManagerResponseDto {
    id;
    name;
    phone;
    email;
    cpf;
    constructor(manager) {
        this.id = manager.id;
        this.name = manager.name;
        this.phone = manager.phone;
        this.email = manager.email;
        this.cpf = manager.cpf;
    }
}
exports.ManagerResponseDto = ManagerResponseDto;
//# sourceMappingURL=dto.response.manager.js.map