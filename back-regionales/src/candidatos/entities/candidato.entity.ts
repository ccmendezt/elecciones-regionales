import { PartidoPolitico } from 'src/partidopolitico/entities/partidopolitico.entity';
import { Voto } from 'src/votos/entities/voto.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Candidato {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  ciudad_municipio: string;

  @ManyToOne(() => PartidoPolitico, (partido) => partido.candidatos)
  partido: PartidoPolitico;

  @OneToMany(() => Voto, (voto) => voto.candidato)
  votos: Voto[];
}
