import { ProductService } from './service.products';
import { ProductRequestDto } from './dto.request.products';
import { ProductRequestUpdateDto } from './dto.request.update.products';
import { ProductResponseDto } from './dto.response.products';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(dto: ProductRequestDto): Promise<ProductResponseDto>;
    createAll(dtos: ProductRequestDto[]): Promise<ProductResponseDto[]>;
    getAll(): Promise<ProductResponseDto[]>;
    getById(id: number): Promise<ProductResponseDto>;
    update(dto: ProductRequestUpdateDto): Promise<ProductResponseDto>;
    delete(id: number): Promise<ProductResponseDto>;
}
