import { Candidato } from 'src/candidatos/entities/candidato.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Voto {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Candidato, (candidato) => candidato.votos)
  candidato: Candidato;

  @UpdateDateColumn()
  momentoVoto: Date;
}
