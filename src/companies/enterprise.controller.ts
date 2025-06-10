
import { Controller, Get, Post, Body } from '@nestjs/common';
import { EnterpriseService } from './enterprise.service'

@Controller('enterprise')
export class EnterpriseController {
  constructor(private readonly enterpriseService: EnterpriseService) {}

  @Get()
  getAll() {
    return  this.enterpriseService.getAll(); 
  }

  @Post()
  create(@Body() body: { name: string; manager: any }) {
    const { name, manager } = body;

    return this.enterpriseService.create(name, manager);
  }
}
