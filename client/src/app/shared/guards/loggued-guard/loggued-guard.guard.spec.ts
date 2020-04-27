import { TestBed } from '@angular/core/testing';

import { LogguedGuardGuard } from './loggued-guard.guard';

describe('LogguedGuardGuard', () => {
  let guard: LogguedGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogguedGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
