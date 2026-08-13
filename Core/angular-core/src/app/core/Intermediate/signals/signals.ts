import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.scss',
})
export class Signals {
  count = signal(0); //Signal created
  val = 20;

  increment(){
    this.count.update(c=>c+1);
  }
  decrement(){
      this.count() > 0 ? this.count.update(c=> c-1) : 0;
  }
  reset(){
    this.count.set(0);
  }
 
}
