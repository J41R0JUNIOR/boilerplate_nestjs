import { IsString, IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ManagerRequestDto } from 'src/managers/dto.request.managers';


export class EnterpriseRequestDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @ValidateNested()
  @Type(() => ManagerRequestDto)
  manager: ManagerRequestDto;
}


