import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSetInputFieldValue } from './get-set-input-field-value';

describe('GetSetInputFieldValue', () => {
  let component: GetSetInputFieldValue;
  let fixture: ComponentFixture<GetSetInputFieldValue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetSetInputFieldValue],
    }).compileComponents();

    fixture = TestBed.createComponent(GetSetInputFieldValue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
