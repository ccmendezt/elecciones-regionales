import { Module } from '@nestjs/common';
import { PartidopoliticoService } from './partidopolitico.service';
import { PartidopoliticoController } from './partidopolitico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartidoPolitico } from './entities/partidopolitico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PartidoPolitico])],
  controllers: [PartidopoliticoController],
  providers: [PartidopoliticoService],
  exports: [PartidopoliticoService, TypeOrmModule],
})
export class PartidopoliticoModule {}
