import { Module } from '@nestjs/common';
import { ProductController } from './controller.products';
import { ProductService } from './service.products';
import { PrismaService } from 'src/prisma/service.prisma';

@Module({
  controllers: [ProductController],
  providers: [ProductService, PrismaService]
})
export class ProductsModule {}