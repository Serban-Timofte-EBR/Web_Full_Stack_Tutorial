import { IsNumber, IsOptional } from 'class-validator';

export class UpdateItemDTO {
  @IsOptional()
  name?: string;

  @IsOptional()
  @IsNumber()
  quantity?: number;

  @IsOptional()
  @IsNumber()
  price?: number;
}
