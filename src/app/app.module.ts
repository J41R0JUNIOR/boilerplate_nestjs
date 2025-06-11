import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnterpriseModule } from '../companies/module.enterprise';
import { ProductsModule } from 'src/products/module.products';
import { PrismaService } from 'src/prisma/service.prisma';

@Module({
  imports: [EnterpriseModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
