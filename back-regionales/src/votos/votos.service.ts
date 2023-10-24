import { Injectable } from '@nestjs/common';
import { CreateVotoDto } from './dto/create-voto.dto';
import { UpdateVotoDto } from './dto/update-voto.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Voto } from './entities/voto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Candidato } from 'src/candidatos/entities/candidato.entity';
import { CandidatosService } from 'src/candidatos/candidatos.service';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class VotosService {
  constructor(
    @InjectRepository(Voto)
    private readonly votoRepository: Repository<Voto>,
    private readonly candidatoService: CandidatosService,
  ) {}

  async create(createVotoDto: CreateVotoDto): Promise<Voto> {
    const { candidatoId } = createVotoDto;
    try {
      const candidato = await this.candidatoService.findOne(candidatoId);

      const nuevoVoto = this.votoRepository.create({
        candidato,
      });
      if (!nuevoVoto) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'Voto no creado',
        });
      }

      return await this.votoRepository.save(nuevoVoto);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async findAll(): Promise<Voto[]> {
    try {
      const votos: Voto[] = await this.votoRepository.find({
        relations: ['candidato'],
      });
      if (!votos) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: 'Votos no encontrados',
        });
      }
      return votos;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async findOne(id: number): Promise<Voto> {
    try {
      const voto: Voto = await this.votoRepository.findOne({
        where: { id },
        relations: ['candidato'],
      });
      if (!voto) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Voto con ID ${id} no encontrado`,
        });
      }
      return voto;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async update(
    id: number,
    updateVotoDto: UpdateVotoDto,
  ): Promise<UpdateResult> {
    try {
      const { candidatoId } = updateVotoDto;
      const candidato = await this.candidatoService.findOne(candidatoId);
      const votoActualizado = this.votoRepository.create({
        ...updateVotoDto,
        candidato,
      });
      const voto = await this.votoRepository.update(id, votoActualizado);
      if (voto.affected === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'Voto no actualizado',
        });
      }
      return voto;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async remove(id: number): Promise<DeleteResult> {
    try {
      const voto = await this.votoRepository.delete(id);
      if (voto.affected === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: `Voto con ID ${id} no encontrado`,
        });
      }
      return voto;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
