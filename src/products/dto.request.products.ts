import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ProductRequestDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsNumber()
    enterpriseId: number
}