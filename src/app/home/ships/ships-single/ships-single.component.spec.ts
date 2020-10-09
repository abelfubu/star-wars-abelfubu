import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipsSingleComponent } from './ships-single.component';

describe('ShipsSingleComponent', () => {
  let component: ShipsSingleComponent;
  let fixture: ComponentFixture<ShipsSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipsSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipsSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
