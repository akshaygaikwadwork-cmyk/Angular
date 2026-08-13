import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfElseStatement } from './if-else-statement';

describe('IfElseStatement', () => {
  let component: IfElseStatement;
  let fixture: ComponentFixture<IfElseStatement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfElseStatement],
    }).compileComponents();

    fixture = TestBed.createComponent(IfElseStatement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
