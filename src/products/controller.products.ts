import { PrismaClient } from '@prisma/client'
import { Request, Response } from "express";
import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { ProductService } from './service.products';
import { ProductRequestDto } from './dto.request.products';
import { ProductRequestUpdateDto } from './dto.request.update.products';
import { ProductResponseDto } from './dto.response.products';

const prisma = new PrismaClient();

@Controller('product')
export class ProductController{
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() dto: ProductRequestDto): Promise<ProductResponseDto> {
    return this.productService.create(dto);
  }

  @Post('bulk')
  createAll(@Body() dtos: ProductRequestDto[]): Promise<ProductResponseDto[]> {
    return this.productService.createAll(dtos);
  }

  @Get()
  getAll(): Promise<ProductResponseDto[]> {
    return this.productService.getAll();
  }

  @Get('id')
  getById (@Param('id') id: number): Promise<ProductResponseDto> {
    return this.productService.listById(id);
  }

  @Patch()
  update(@Body() dto: ProductRequestUpdateDto): Promise<ProductResponseDto>{
    return this.productService.update(dto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productService.delete(Number(id));
  }
}