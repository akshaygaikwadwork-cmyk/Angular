import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computed-signals',
  imports: [],
  templateUrl: './computed-signals.html',
  styleUrl: './computed-signals.scss',
})
export class ComputedSignals {
  //Example 1 -
  count = signal<number>(2);

  // Normal property
  doubleCount = this.count() * 2;
  tripleCount = this.count() * 3;

  // Computed Signal
  doubleCountSignal = computed<number>(() => this.count() * 2);
  tripleCountSignal = computed<number>(() => this.count() * 3);

  incriment() {
    this.count.set(this.count() + 1);
  }

  //Example 2-
  firstName = signal<string>('Akshay');
  lastName = signal<string>('Gaikwad');

  // Normal property
  fullName: string = `${this.firstName()} ${this.lastName()}`;
  // Computed Signal
  fullNameSignal = computed<string>(() => `${this.firstName()} ${this.lastName()}`);

  changeName() {
    this.lastName.set('Patil');
  }

  //Example 3 -

  price = signal<number[]>([10, 20, 30, 40, 50]);

  // Normal property
  totalPrice = this.price().reduce((acc, curr) => acc + curr, 0);

  // Computed Signal
  totalPriceSignal = computed<number>(() => {
    return this.price().reduce((acc, curr) => acc + curr, 0);
  });

  addPrice(newPrice: string) {
    this.price.update(arr => [
    ...arr,
    Number(newPrice)
  ]);
  }
}
