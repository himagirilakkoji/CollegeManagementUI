import { TestBed } from '@angular/core/testing';

import { FacultyAccessGuard } from './faculty-access.guard';

describe('FacultyAccessGuard', () => {
  let guard: FacultyAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FacultyAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
