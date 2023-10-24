import { PartialType } from '@nestjs/mapped-types';
import { CreatePartidopoliticoDto } from './create-partidopolitico.dto';
import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePartidopoliticoDto extends PartialType(
  CreatePartidopoliticoDto,
) {
  @ApiProperty()
  @IsOptional()
  @IsString()
  nombre: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  siglas: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  mision: string;
}
