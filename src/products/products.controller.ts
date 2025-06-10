import { PrismaClient } from '@prisma/client'
import { Request, Response } from "express";
import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';
import { ProductService } from './products.service';

const prisma = new PrismaClient();

@Controller('product')
export class ProductController{
  constructor(private readonly productService: ProductService) {}

  @Post()
  criarProduto(req: Request, res: Response) {
    const { name, price, enterpriseId } = req.body;
    return  this.productService.create(name, price, enterpriseId);
  }

  @Get()
    listarProdutos(_: Request, res: Response) {
    return this.productService.getAll();
  }

  @Patch()
  atualizarProduto(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const { name, price } = req.body;
    return this.productService.update(id, name, price);
  }

  @Delete()
  deletarProduto(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    return this.productService.delete(id);
  }
}