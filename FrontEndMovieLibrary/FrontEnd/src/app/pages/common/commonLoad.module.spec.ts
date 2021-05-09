import { CommonLoadModule } from './commonLoad.module';

describe('CoreModule', () => {
  let commonLoadModule: CommonLoadModule;

  beforeEach(() => {
    commonLoadModule = new CommonLoadModule();
  });

  it('should create an instance', () => {
    expect(commonLoadModule).toBeTruthy();
  });
});
