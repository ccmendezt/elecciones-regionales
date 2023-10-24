import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateVotoDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  candidatoId: number;
}
