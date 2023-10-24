// import { Test, TestingModule } from '@nestjs/testing';
// import { VotosController } from './votos.controller';
// import { VotosService } from './votos.service';
// import { CreateVotoDto } from './dto/create-voto.dto';
// import { UpdateVotoDto } from './dto/update-voto.dto';

// describe('VotosController', () => {
//   let controller: VotosController;
//   let service: VotosService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [VotosController],
//       providers: [VotosService],
//     }).compile();

//     controller = module.get<VotosController>(VotosController);
//     service = module.get<VotosService>(VotosService);
//   });

//   it('should be defined', () => {
//     expect(controller).toBeDefined();
//   });

//   describe('create', () => {
//     it('should create a new voto', async () => {
//       const createVotoDto = {
//         candidato: 3,
//         momentoVoto: new Date(),
//       };
//       const mockResult = { id: 1, ...createVotoDto }; // Supongamos que el servicio devuelve un objeto con un ID asignado

//       jest.spyOn(service, 'create').mockResolvedValue(mockResult);

//       const result = await controller.create(createVotoDto);

//       expect(result).toEqual(mockResult);
//     });
//   });

//   // Similarmente, puedes escribir pruebas para otras acciones como findAll, findOne, update y remove.
// });
