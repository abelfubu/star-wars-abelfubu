import { TestBed } from '@angular/core/testing';

import { LoadShipsGuard } from './load-ships.guard';

describe('LoadShipsGuard', () => {
  let guard: LoadShipsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoadShipsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
