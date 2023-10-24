import { Candidato } from 'src/candidatos/entities/candidato.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PartidoPolitico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  siglas: string;

  @Column()
  mision: string;

  @OneToMany(() => Candidato, (candidato) => candidato.partido)
  candidatos: Candidato[];
}
