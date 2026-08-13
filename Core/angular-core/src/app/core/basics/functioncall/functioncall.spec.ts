import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Functioncall } from './functioncall';

describe('Functioncall', () => {
  let component: Functioncall;
  let fixture: ComponentFixture<Functioncall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Functioncall],
    }).compileComponents();

    fixture = TestBed.createComponent(Functioncall);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
