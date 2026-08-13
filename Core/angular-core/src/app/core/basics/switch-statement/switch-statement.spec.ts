import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchStatement } from './switch-statement';

describe('SwitchStatement', () => {
  let component: SwitchStatement;
  let fixture: ComponentFixture<SwitchStatement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchStatement],
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchStatement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
