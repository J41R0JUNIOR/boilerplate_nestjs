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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const service_prisma_1 = require("../prisma/service.prisma");
const dto_response_products_1 = require("./dto.response.products");
let ProductService = class ProductService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const response = await this.prisma.product.create({
            data: {
                name: dto.name,
                price: dto.price,
                enterpriseId: dto.enterpriseId
            }
        });
        const product = await this.listById(response.id);
        return product;
    }
    async listById(id) {
        const product = await this.prisma.product.findUnique({
            where: { id },
            include: { enterprise: true }
        });
        if (!product) {
            throw new Error('Product not found');
        }
        return new dto_response_products_1.ProductResponseDto(product);
    }
    async createAll(dtos) {
        const createdProducts = await Promise.all(dtos.map(dto => this.prisma.product.create({
            data: {
                name: dto.name,
                price: dto.price,
                enterpriseId: dto.enterpriseId
            },
        })));
        const productsWithEnterprise = await Promise.all(createdProducts.map(p => this.listById(p.id)));
        return productsWithEnterprise;
    }
    async getAll() {
        const response = await this.prisma.product.findMany({ include: { enterprise: true } });
        return response.map(p => new dto_response_products_1.ProductResponseDto(p));
    }
    async update(dto) {
        await this.prisma.product.update({
            where: { id: dto.id },
            data: { name: dto.name, price: dto.price }
        });
        return this.listById(dto.id);
    }
    async delete(id) {
        const deleted = await this.prisma.product.delete({
            where: { id },
            include: { enterprise: true }
        });
        return new dto_response_products_1.ProductResponseDto(deleted);
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [service_prisma_1.PrismaService])
], ProductService);
//# sourceMappingURL=service.products.js.map