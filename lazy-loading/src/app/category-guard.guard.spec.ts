import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { categoryGuardGuard } from './category-guard.guard';

describe('categoryGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => categoryGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
