import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCounterApp } from './simple-counter-app';

describe('SimpleCounterApp', () => {
  let component: SimpleCounterApp;
  let fixture: ComponentFixture<SimpleCounterApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleCounterApp],
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleCounterApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
