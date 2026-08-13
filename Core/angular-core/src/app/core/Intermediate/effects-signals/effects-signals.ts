import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effects-signals',
  imports: [],
  templateUrl: './effects-signals.html',
  styleUrl: './effects-signals.scss',
})
export class EffectsSignals {
  count = signal(0);

  isDarkMode = signal(false);
  constructor() {
    //Example 1
    // effect(() => {
    //   console.log('count value:', this.count());
    // });

    //Example 2

    effect(() => {
      if(this.isDarkMode()){
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
      } else{
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
      }
      console.log('count value:', this.count());
    });

    //Example 3

    effect(
      () => {
        if(this.message()){
          setTimeout(() => {
            this.message.set("");
          }, 1000);
        }
      }
    )
  }

  increment(){
    this.count.set(this.count()+1);
  }

  toggle(){
    this.isDarkMode.update(c => !this.isDarkMode())
  }

  message = signal<string>("");

  showMessage(){
    this.message.set("Hello, this is a temporary message!");
  }
}
