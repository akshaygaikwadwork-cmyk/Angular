import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Interpolation } from './core/basics/interpolation/interpolation';

@Component({
  selector: 'app-root',
  imports: [Interpolation, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-core');
  name = "Angular Tutorial";
}
