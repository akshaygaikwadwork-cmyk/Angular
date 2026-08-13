import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Interpolation } from './core/basics/interpolation/interpolation';
import { PropertyBinding } from './core/basics/property-binding/property-binding';
import { EventBinding } from './core/basics/event-binding/event-binding';
import { Functioncall } from './core/basics/functioncall/functioncall';
import { Datatype } from './core/basics/datatype/datatype';
import { EventHandling } from './core/basics/event-handling/event-handling';
import { SimpleCounterApp } from './BasicProjects/simple-counter-app/simple-counter-app';
import { GetSetInputFieldValue } from './core/basics/get-set-input-field-value/get-set-input-field-value';
import { StylingCSSWays } from './core/basics/styling-cssways/styling-cssways';
import { IfElseStatement } from './core/basics/if-else-statement/if-else-statement';
import { ElseIfStatement } from './core/basics/else-if-statement/else-if-statement';
import { SwitchStatement } from './core/basics/switch-statement/switch-statement';
import { Loop } from './core/basics/loop/loop';
import { ForLoopContextualVariables } from './core/basics/for-loop-contextual-variables/for-loop-contextual-variables';

@Component({
  selector: 'app-root',
  imports: [
    Interpolation,
    PropertyBinding,
    EventBinding,
    Functioncall,
    Datatype,
    EventHandling,
    SimpleCounterApp,
    GetSetInputFieldValue,
    StylingCSSWays,
    IfElseStatement,
    ElseIfStatement,
    SwitchStatement,
    Loop,
    ForLoopContextualVariables,
    RouterOutlet,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-core');
  name = 'Angular Tutorial';
}
