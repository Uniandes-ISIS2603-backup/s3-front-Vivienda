import { SitioInteresModule } from './sitio-interes.module';

describe('SitioInteresModule', () => {
  let sitioInteresModule: SitioInteresModule;

  beforeEach(() => {
    sitioInteresModule = new SitioInteresModule();
  });

  it('should create an instance', () => {
    expect(sitioInteresModule).toBeTruthy();
  });
});
