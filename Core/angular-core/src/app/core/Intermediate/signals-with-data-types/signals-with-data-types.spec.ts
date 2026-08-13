import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsWithDataTypes } from './signals-with-data-types';

describe('SignalsWithDataTypes', () => {
  let component: SignalsWithDataTypes;
  let fixture: ComponentFixture<SignalsWithDataTypes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsWithDataTypes],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalsWithDataTypes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
