import { Module } from '@nestjs/common';
import { VotosService } from './votos.service';
import { VotosController } from './votos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Voto } from './entities/voto.entity';
import { CandidatosModule } from 'src/candidatos/candidatos.module';
import { CandidatosService } from 'src/candidatos/candidatos.service';
import { PartidopoliticoService } from 'src/partidopolitico/partidopolitico.service';
import { PartidopoliticoModule } from 'src/partidopolitico/partidopolitico.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Voto]),
    CandidatosModule,
    PartidopoliticoModule,
  ],
  controllers: [VotosController],
  providers: [VotosService, CandidatosService, PartidopoliticoService],
  exports: [VotosService, TypeOrmModule],
})
export class VotosModule {}
