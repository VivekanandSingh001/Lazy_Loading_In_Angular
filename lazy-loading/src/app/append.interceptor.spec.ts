import { TestBed } from '@angular/core/testing';

import { AppendInterceptor } from './append.interceptor';

describe('AppendInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AppendInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AppendInterceptor = TestBed.inject(AppendInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
