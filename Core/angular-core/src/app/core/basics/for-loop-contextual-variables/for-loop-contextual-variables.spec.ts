import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForLoopContextualVariables } from './for-loop-contextual-variables';

describe('ForLoopContextualVariables', () => {
  let component: ForLoopContextualVariables;
  let fixture: ComponentFixture<ForLoopContextualVariables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForLoopContextualVariables],
    }).compileComponents();

    fixture = TestBed.createComponent(ForLoopContextualVariables);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
