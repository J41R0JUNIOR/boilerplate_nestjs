import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/service.prisma';
import { EnterpriseRequestDto } from './dto.request.enterprise';

@Injectable()
export class EnterpriseService {
  constructor(private readonly prisma: PrismaService) {}

  getAll() {
    return this.prisma.enterprise.findMany({
      include: { manager: true, products: true },
    });
  }

  create(dto: EnterpriseRequestDto) {
    return this.prisma.enterprise.create({
      data: {
        name: dto.name,
        manager: {
          create: dto.manager,
        },
      },
      include: { manager: true },
    });
  }
}
