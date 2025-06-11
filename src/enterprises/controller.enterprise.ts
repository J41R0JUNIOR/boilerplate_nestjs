import { Controller, Get, Post, Body } from '@nestjs/common';
import { EnterpriseService } from './service.enterprise';
import { EnterpriseRequestDto } from './dto.request.enterprise';
import { EnterpriseResponseDto } from './dto.response.enterprise';

@Controller('enterprise')
export class EnterpriseController {
  constructor(private readonly enterpriseService: EnterpriseService) {}

  @Get()
  async getAll(): Promise<EnterpriseResponseDto[]> {
    return this.enterpriseService.getAll();
  }

  @Post()
  create(@Body() dto: EnterpriseRequestDto): Promise<EnterpriseResponseDto> {
    return this.enterpriseService.create(dto);
  }
}
