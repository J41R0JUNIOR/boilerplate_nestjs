import { Controller, Get, Post, Body } from '@nestjs/common';
import { EnterpriseService } from './service.enterprise'
import { EnterpriseRequestDto } from './dto.request.enterprise';

@Controller('enterprise')
export class EnterpriseController {
  constructor(private readonly enterpriseService: EnterpriseService) {}

  @Get()
  getAll() {
    return  this.enterpriseService.getAll(); 
  }

  @Post()
  create(@Body() dto: EnterpriseRequestDto) {
    return this.enterpriseService.create(dto);
  }
}