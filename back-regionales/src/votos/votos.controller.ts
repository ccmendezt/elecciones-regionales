import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VotosService } from './votos.service';
import { CreateVotoDto } from './dto/create-voto.dto';
import { UpdateVotoDto } from './dto/update-voto.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Votos')
@Controller('votos')
export class VotosController {
  constructor(private readonly votosService: VotosService) {}

  @Post()
  create(@Body() createVotoDto: CreateVotoDto) {
    return this.votosService.create(createVotoDto);
  }

  @Get()
  findAll() {
    return this.votosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.votosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVotoDto: UpdateVotoDto) {
    return this.votosService.update(+id, updateVotoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.votosService.remove(+id);
  }
}
