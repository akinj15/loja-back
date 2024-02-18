import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  code: string;

  @IsString()
  image: string;

  @IsNumber()
  stock: number;

  @IsNumber()
  price: number;

  @IsString()
  class: string;

  @IsString()
  brand: string;

  @IsString()
  ncm: string;

  @IsString()
  ean: string;

  @IsNumber()
  key: number;
}
