import { PartialType } from '@nestjs/mapped-types';
import { CreateCandidatoDto } from './create-candidato.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PartidoPolitico } from 'src/partidopolitico/entities/partidopolitico.entity';

export class UpdateCandidatoDto extends PartialType(CreateCandidatoDto) {
  @ApiProperty()
  @IsOptional()
  @IsString()
  nombre: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  ciudad_municipio: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  partidoId: number;
}
