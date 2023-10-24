import { Module } from '@nestjs/common';
import { CandidatosService } from './candidatos.service';
import { CandidatosController } from './candidatos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Candidato } from './entities/candidato.entity';
import { PartidopoliticoModule } from 'src/partidopolitico/partidopolitico.module';
import { PartidopoliticoService } from 'src/partidopolitico/partidopolitico.service';

@Module({
  imports: [TypeOrmModule.forFeature([Candidato]), PartidopoliticoModule],
  controllers: [CandidatosController],
  providers: [CandidatosService, PartidopoliticoService],
  exports: [CandidatosService, TypeOrmModule],
})
export class CandidatosModule {}
