// import { Test, TestingModule } from '@nestjs/testing';
// import { PartidopoliticoController } from './partidopolitico.controller';
// import { PartidopoliticoService } from './partidopolitico.service';
// import { CreatePartidopoliticoDto } from './dto/create-partidopolitico.dto';
// import { NotFoundException } from '@nestjs/common';
// import { PartidopoliticoModule } from './partidopolitico.module';
// import { CandidatosModule } from 'src/candidatos/candidatos.module';
// describe('PartidopoliticoController', () => {
//   let controller: PartidopoliticoController;
//   let service: PartidopoliticoService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [PartidopoliticoController],
//       providers: [PartidopoliticoService],
//       imports: [PartidopoliticoModule, CandidatosModule],
//     }).compile();

//     controller = module.get<PartidopoliticoController>(
//       PartidopoliticoController,
//     );
//     service = module.get<PartidopoliticoService>(PartidopoliticoService);
//   });

//   describe('create', () => {
//     it('should create a new partido político', async () => {
//       const createDto: CreatePartidopoliticoDto = {
//         nombre: 'Partido Politico 1',
//         siglas: 'PP1',
//         mision: 'Mision del Partido Politico 1',
//       };
//       const partidoCreado = {
//         id: 1,
//         nombre: 'Partido Politico 1',
//         siglas: 'PP1',
//         mision: 'Mision del Partido Politico 1',
//         candidatos: [],
//       };

//       jest.spyOn(service, 'create').mockResolvedValue(partidoCreado);

//       const resultado = await controller.create(createDto);
//       expect(resultado).toBe(partidoCreado);
//     });
//   });

//   describe('findOne', () => {
//     it('should return a partido político by ID', async () => {
//       const partidoId = 1;
//       const partidoEncontrado = {
//         id: 1,
//         nombre: 'Alianza Social Independiente',
//         siglas: 'ASI',
//         mision: 'Hola',
//         candidatos: [],
//       };

//       jest.spyOn(service, 'findOne').mockResolvedValue(partidoEncontrado);

//       const resultado = await controller.findOne(partidoId);
//       expect(resultado).toBe(partidoEncontrado);
//     });

//     it('should throw NotFoundException if partido político not found', async () => {
//       const partidoId = 999; // partido político ID que no existe
//       jest.spyOn(service, 'findOne').mockResolvedValue(null);

//       await expect(controller.findOne(partidoId)).rejects.toThrow(
//         NotFoundException,
//       );
//     });
//   });

//   // Agrega pruebas similares para otros métodos del controlador como update y remove
// });
