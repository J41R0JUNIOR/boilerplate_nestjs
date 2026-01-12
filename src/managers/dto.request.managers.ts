import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class ManagerRequestDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(11, 11, { message: 'CPF must have 11 numbers' })
  cpf: string;
}
