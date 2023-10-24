import { Test, TestingModule } from '@nestjs/testing';
import { PartidopoliticoService } from './partidopolitico.service';
import { PartidoPolitico } from './entities/partidopolitico.entity';

describe('PartidopoliticoService', () => {
  let service: PartidopoliticoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PartidopoliticoService],
    }).compile();

    service = module.get<PartidopoliticoService>(PartidopoliticoService);
  });

	it('should create a partido politico', () => {
		const partido = new PartidoPolitico(1, 'John Doe', 'ASI', 'ASI1');
		service.create(user);
		expect(service.findOne(1)).toEqual(user);
	});
});
