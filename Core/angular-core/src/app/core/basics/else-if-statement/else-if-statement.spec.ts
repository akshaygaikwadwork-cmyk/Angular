import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElseIfStatement } from './else-if-statement';

describe('ElseIfStatement', () => {
  let component: ElseIfStatement;
  let fixture: ComponentFixture<ElseIfStatement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElseIfStatement],
    }).compileComponents();

    fixture = TestBed.createComponent(ElseIfStatement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
