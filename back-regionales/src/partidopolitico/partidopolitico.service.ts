import { Injectable } from '@nestjs/common';
import { CreatePartidopoliticoDto } from './dto/create-partidopolitico.dto';
import { UpdatePartidopoliticoDto } from './dto/update-partidopolitico.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PartidoPolitico } from './entities/partidopolitico.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class PartidopoliticoService {
  constructor(
    @InjectRepository(PartidoPolitico)
    private readonly partidoPoliticoRepository: Repository<PartidoPolitico>,
  ) {}

  async create(
    createPartidopoliticoDto: CreatePartidopoliticoDto,
  ): Promise<PartidoPolitico> {
    try {
      const partido = await this.partidoPoliticoRepository.save(
        createPartidopoliticoDto,
      );
      if (!partido) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'Partido Politico no creado',
        });
      }
      return partido;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async findAll(): Promise<PartidoPolitico[]> {
    try {
      const partidos = await this.partidoPoliticoRepository.find({
        order: { id: 'ASC' },
      });
      if (!partidos) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: 'Partidos Politicos no encontrados',
        });
      }
      return partidos;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async findOne(id: number): Promise<PartidoPolitico> {
    try {
      const partido: PartidoPolitico =
        await this.partidoPoliticoRepository.findOne({ where: { id } });
      if (!partido) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `Partido Politico con ID ${id} no encontrado`,
        });
      }
      return partido;
    } catch (error) {
      console.log(error.response);
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async update(
    id: number,
    updatePartidopoliticoDto: UpdatePartidopoliticoDto,
  ): Promise<UpdateResult> {
    try {
      const partido = await this.partidoPoliticoRepository.update(
        id,
        updatePartidopoliticoDto,
      );
      if (partido.affected === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: `Partido Politico con ID ${id} no actualizado`,
        });
      }
      return partido;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async remove(id: number): Promise<DeleteResult> {
    try {
      const partido = await this.partidoPoliticoRepository.delete(id);
      if (partido.affected === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'Partido Politico no encontrado',
        });
      }
      return partido;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
