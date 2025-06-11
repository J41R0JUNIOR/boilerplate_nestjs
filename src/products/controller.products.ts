import { PrismaClient } from '@prisma/client'
import { Request, Response } from "express";
import { Controller, Get, Post, Patch, Delete, Body } from '@nestjs/common';
import { ProductService } from './service.products';
import { ProductRequestDto } from './dto.request.products';

const prisma = new PrismaClient();

@Controller('product')
export class ProductController{
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() dto: ProductRequestDto) {
    return  this.productService.create(dto);
  }

  @Get()
    listarProdutos() {
    return this.productService.getAll();
  }

  @Patch()
  atualizarProduto(req: Request) {
    const id = parseInt(req.params.id);
    const { name, price } = req.body;
    return this.productService.update(id, name, price);
  }

  @Delete()
  deletarProduto(req: Request) {
    const id = parseInt(req.params.id);
    return this.productService.delete(id);
  }
}