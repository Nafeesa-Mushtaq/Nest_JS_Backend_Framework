import { Test, TestingModule } from '@nestjs/testing';
import { NameController } from './name.controller';

describe('NameController', () => {
  let controller: NameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NameController],
    }).compile();

    controller = module.get<NameController>(NameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
