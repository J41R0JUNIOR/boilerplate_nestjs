import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/service.prisma';
import { EnterpriseRequestDto } from './dto.request.enterprise';
import { EnterpriseResponseDto } from './dto.response.enterprise';

@Injectable()
export class EnterpriseService {

  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<EnterpriseResponseDto[]> {

    let all = await this.prisma.enterprise.findMany({
      include: { manager: true, products: true },
    });

    return all.map(e => new EnterpriseResponseDto(e));
  }

  async create(dto: EnterpriseRequestDto): Promise<EnterpriseResponseDto> {

    const enterpriseCreated = await this.prisma.enterprise.create({
      data: {
        name: dto.name,
        manager: {
          create: dto.manager,
        },
      },
      include: { manager: true, products: true },
    });
    
    return new EnterpriseResponseDto(enterpriseCreated);
  }
}
