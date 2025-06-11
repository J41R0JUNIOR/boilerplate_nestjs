"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterpriseModule = void 0;
const common_1 = require("@nestjs/common");
const service_enterprise_1 = require("./service.enterprise");
const controller_enterprise_1 = require("./controller.enterprise");
const service_prisma_1 = require("../prisma/service.prisma");
let EnterpriseModule = class EnterpriseModule {
};
exports.EnterpriseModule = EnterpriseModule;
exports.EnterpriseModule = EnterpriseModule = __decorate([
    (0, common_1.Module)({
        controllers: [controller_enterprise_1.EnterpriseController],
        providers: [service_enterprise_1.EnterpriseService, service_prisma_1.PrismaService]
    })
], EnterpriseModule);
//# sourceMappingURL=module.enterprise.js.map