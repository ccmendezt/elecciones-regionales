import { Injectable } from '@nestjs/common';
import { CreateCandidatoDto } from './dto/create-candidato.dto';
import { UpdateCandidatoDto } from './dto/update-candidato.dto';
import { Candidato } from './entities/candidato.entity';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PartidopoliticoService } from 'src/partidopolitico/partidopolitico.service';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class CandidatosService {
  constructor(
    @InjectRepository(Candidato)
    private readonly candidatoRepository: Repository<Candidato>,
    private readonly partidoPoliticoService: PartidopoliticoService,
  ) {}
  async create(createCandidatoDto: CreateCandidatoDto): Promise<Candidato> {
    try {
      const { partidoId } = createCandidatoDto;
      const partido = await this.partidoPoliticoService.findOne(partidoId);
      const nuevoCandidato = this.candidatoRepository.create({
        ...createCandidatoDto,
        partido,
      });
      const candidato = await this.candidatoRepository.save(nuevoCandidato);
      if (!candidato) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'Candidato no creado',
        });
      }
      return candidato;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async findAll(): Promise<Candidato[]> {
    try {
      const candidatos: Candidato[] = await this.candidatoRepository.find({
        relations: ['partido', 'votos'],
      });
      if (!candidatos) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: 'Candidatos no encontrados',
        });
      }
      return candidatos;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async findOne(id: number): Promise<Candidato> {
    try {
      const candidato: Candidato = await this.candidatoRepository.findOne({
        where: { id },
        relations: ['partido', 'votos'],
      });
      if (!candidato) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Candidato con ID ${id} no encontrado`,
        });
      }
      return candidato;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async update(
    id: number,
    updateCandidatoDto: UpdateCandidatoDto,
  ): Promise<UpdateResult> {
    try {
      const { partidoId } = updateCandidatoDto;
      const partido = await this.partidoPoliticoService.findOne(partidoId);
      const candidatoActualizado = this.candidatoRepository.create({
        ...updateCandidatoDto,
        partido,
      });
      const candidato = await this.candidatoRepository.update(
        id,
        candidatoActualizado,
      );
      if (candidato.affected === 0) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Candidato con ID ${id} no actualizado`,
        });
      }
      return candidato;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async remove(id: number) {
    try {
      const candidato = await this.candidatoRepository.delete(id);
      if (candidato.affected === 0) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Candidato con ID ${id} no eliminado`,
        });
      }
      return candidato;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
