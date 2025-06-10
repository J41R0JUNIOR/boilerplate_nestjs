"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const client_1 = require("@prisma/client");
const common_1 = require("@nestjs/common");
const prisma = new client_1.PrismaClient();
class ProductController {
    productService;
    constructor(productService) {
        this.productService = productService;
    }
    criarProduto(req, res) {
        const { name, price, enterpriseId } = req.body;
        return this.productService.create(name, price, enterpriseId);
    }
    listarProdutos(_, res) {
        return this.productService.getAll();
    }
    atualizarProduto(req, res) {
        const id = parseInt(req.params.id);
        const { name, price } = req.body;
        return this.productService.update(id, name, price);
    }
    deletarProduto(req, res) {
        const id = parseInt(req.params.id);
        return this.productService.delete(id);
    }
}
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "criarProduto", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "listarProdutos", null);
__decorate([
    (0, common_1.Patch)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "atualizarProduto", null);
__decorate([
    (0, common_1.Delete)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "deletarProduto", null);
//# sourceMappingURL=products.controller.js.map