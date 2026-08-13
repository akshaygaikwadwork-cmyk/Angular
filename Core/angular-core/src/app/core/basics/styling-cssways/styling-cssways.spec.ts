import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylingCSSWays } from './styling-cssways';

describe('StylingCSSWays', () => {
  let component: StylingCSSWays;
  let fixture: ComponentFixture<StylingCSSWays>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StylingCSSWays],
    }).compileComponents();

    fixture = TestBed.createComponent(StylingCSSWays);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
