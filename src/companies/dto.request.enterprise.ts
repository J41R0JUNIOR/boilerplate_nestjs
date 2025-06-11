import { IsString, IsNotEmpty, IsEmail, Length, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ManagerRequestDto } from 'src/managers/dto.request.managers';


export class EnterpriseRequestDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ManagerRequestDto)
  manager: ManagerRequestDto;
}


