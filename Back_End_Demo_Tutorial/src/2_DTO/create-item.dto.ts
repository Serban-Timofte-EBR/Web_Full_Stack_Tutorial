// Pregateste direct forma datelor pentru a fi transmise ( validarile sunt importante )
import { IsNotEmpty, IsNumber, IsPositive, Min } from 'class-validator';

export class CreateItemDTO {
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  readonly quantity: number;

  @IsNumber()
  @IsPositive()
  @Min(0.1)
  readonly price: number;
}
