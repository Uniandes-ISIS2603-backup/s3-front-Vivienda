import { UniversidadModule } from './universidad.module';

describe('UniversidadModule', () => {
  let universidadModule: UniversidadModule;

  beforeEach(() => {
    universidadModule = new UniversidadModule();
  });

  it('should create an instance', () => {
    expect(universidadModule).toBeTruthy();
  });
});
