import { PrismaClient } from '@prisma/client'
import { Request, Response } from "express";
import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { ProductService } from './service.products';
import { ProductRequestDto } from './dto.request.products';
import { ProductRequestUpdateDto } from './dto.request.update.products';

const prisma = new PrismaClient();

@Controller('product')
export class ProductController{
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() dto: ProductRequestDto) {
    return  this.productService.create(dto);
  }

  @Post('bulk')
  createAll(@Body() dtos: ProductRequestDto[]) {
    return this.productService.createAll(dtos);
  }

  @Get()
  getAll() {
    return this.productService.getAll();
  }

  @Patch()
  update(@Body() dto: ProductRequestUpdateDto) {

    return this.productService.update(dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productService.delete(Number(id));
  }
}