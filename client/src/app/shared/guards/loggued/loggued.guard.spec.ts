import { TestBed } from '@angular/core/testing';

import { LogguedGuard } from './loggued.guard';

describe('LogguedGuardGuard', () => {
  let guard: LogguedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogguedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
