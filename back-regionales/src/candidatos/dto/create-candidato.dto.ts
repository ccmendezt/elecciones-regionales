import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { PartidoPolitico } from 'src/partidopolitico/entities/partidopolitico.entity';

export class CreateCandidatoDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  ciudad_municipio: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  partidoId: number;

  partido: PartidoPolitico;
}
