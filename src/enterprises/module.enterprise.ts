import { Module } from '@nestjs/common';
import { EnterpriseService } from './service.enterprise';
import { EnterpriseController } from './controller.enterprise';
import { PrismaService } from 'src/prisma/service.prisma';

@Module({
  controllers: [EnterpriseController],
  providers: [EnterpriseService, PrismaService]
})
export class EnterpriseModule {}
