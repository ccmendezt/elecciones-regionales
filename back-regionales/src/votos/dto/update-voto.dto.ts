import { PartialType } from '@nestjs/mapped-types';
import { CreateVotoDto } from './create-voto.dto';
import { IsNotEmpty, IsNumber, IsOptional, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateVotoDto extends PartialType(CreateVotoDto) {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  candidatoId?: number;

  @IsOptional()
  @IsDate()
  momentoVoto?: Date;
}
