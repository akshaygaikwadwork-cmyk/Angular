import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-simple-counter-app',
  imports: [],
  templateUrl: './simple-counter-app.html',
  styleUrl: './simple-counter-app.scss',
})
export class SimpleCounterApp {

  //1st way
  count : number = 0;

  increment() {
    this.count++;
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
    }
  }

  reset() {
    this.count = 0;
  }

  //2nd way
  countSignal = signal(0);

  incrementSignal() {
    this.countSignal.set(this.countSignal() + 1);
  }

  decrementSignal() {
    if (this.countSignal() > 0) {
      this.countSignal.set(this.countSignal() - 1);
    }
  }

  resetSignal() {
    this.countSignal.set(0);
  }

  //3rd way with common method
  updateCount(value: string) {
    if (value  == "increment") {
      this.countSignal.set(this.countSignal() + 1);
    } else if (value == "decrement") {
      if (this.countSignal() > 0) {
        this.countSignal.set(this.countSignal() - 1);
      }
    } else if (value == "reset") {
      this.countSignal.set(0);
    }
  }
}
