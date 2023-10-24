import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { PartidopoliticoService } from './partidopolitico.service';
import { CreatePartidopoliticoDto } from './dto/create-partidopolitico.dto';
import { UpdatePartidopoliticoDto } from './dto/update-partidopolitico.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Partido Político')
@Controller('partidopolitico')
export class PartidopoliticoController {
  constructor(
    private readonly partidopoliticoService: PartidopoliticoService,
  ) {}

  @Post()
  create(@Body() createPartidopoliticoDto: CreatePartidopoliticoDto) {
    return this.partidopoliticoService.create(createPartidopoliticoDto);
  }

  @Get()
  findAll() {
    return this.partidopoliticoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.partidopoliticoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePartidopoliticoDto: UpdatePartidopoliticoDto,
  ) {
    return this.partidopoliticoService.update(+id, updatePartidopoliticoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.partidopoliticoService.remove(+id);
  }
}
