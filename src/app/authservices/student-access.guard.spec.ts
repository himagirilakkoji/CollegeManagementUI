import { TestBed } from '@angular/core/testing';

import { StudentAccessGuard } from './student-access.guard';

describe('StudentAccessGuard', () => {
  let guard: StudentAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StudentAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
