import { CuartoModule } from './cuarto.module';

describe('CuartoModule', () => {
  let cuartoModule: CuartoModule;

  beforeEach(() => {
    cuartoModule = new CuartoModule();
  });

  it('should create an instance', () => {
    expect(cuartoModule).toBeTruthy();
  });
});
