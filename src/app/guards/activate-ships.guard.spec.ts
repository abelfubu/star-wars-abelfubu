import { TestBed } from '@angular/core/testing';

import { ActivateShipsGuard } from './activate-ships.guard';

describe('ActivateShipsGuard', () => {
  let guard: ActivateShipsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActivateShipsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
