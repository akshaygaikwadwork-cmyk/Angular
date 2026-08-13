import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal-deep-dive',
  imports: [],
  templateUrl: './signal-deep-dive.html',
  styleUrl: './signal-deep-dive.scss',
})
export class SignalDeepDive {
//Fine-grained reactivity

  count = signal<number>(0);

  name = signal<string>('Angular')

  setCount(){
    this.count.set(2);
  }

  //Signal - graph

  count2 = signal<number>(2);
  doubleCount = computed<number>(
    () => this.count2() * 2
  );

  // constructor(){
  //   effect(
  //     () => {
  //       console.log("Double Count : ", this.doubleCount());
  //     }
  //   )
  // }

  increment(){
    this.count2.set(this.count2()+1);
  }

  // avoid -overrendring

  count3 = signal<number>(5);
  price = signal<number>(10);

  total = computed<number>(() => this.count3() * this.price())

  constructor(){
    effect(
      () => {
        console.log("Total : ", this.total());
      }
    )
  }

  updateCount(){
    this.count3.set(this.count3()+1);
  }
  updatePrice(){
    this.price.set(this.price() + 1);
  }
}
