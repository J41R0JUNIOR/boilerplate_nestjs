import { IsNotEmpty, isNumber, IsNumber, IsString } from "class-validator";

export class ProductRequestUpdateDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;
}