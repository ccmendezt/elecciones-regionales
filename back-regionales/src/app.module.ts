import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VotosModule } from './votos/votos.module';
import { CandidatosModule } from './candidatos/candidatos.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/data-source';
import { PartidopoliticoModule } from './partidopolitico/partidopolitico.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({ ...DataSourceConfig }),
    VotosModule,
    CandidatosModule,
    PartidopoliticoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
