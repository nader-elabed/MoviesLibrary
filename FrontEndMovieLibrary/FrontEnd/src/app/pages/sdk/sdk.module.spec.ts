import { SdkModule } from './sdk.module';

describe('SdkModule', () => {
  let sdkModule: SdkModule;

  beforeEach(() => {
    sdkModule = new SdkModule();
  });

  it('should create an instance', () => {
    expect(sdkModule).toBeTruthy();
  });
});
