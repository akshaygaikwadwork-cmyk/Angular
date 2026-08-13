import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectsSignals } from './effects-signals';

describe('EffectsSignals', () => {
  let component: EffectsSignals;
  let fixture: ComponentFixture<EffectsSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffectsSignals],
    }).compileComponents();

    fixture = TestBed.createComponent(EffectsSignals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
