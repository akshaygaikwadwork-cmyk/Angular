import { Component } from '@angular/core';

@Component({
  selector: 'app-functioncall',
  imports: [],
  templateUrl: './functioncall.html',
  styleUrl: './functioncall.scss',
})
export class Functioncall {
  count = 0;

  handleClick(){
    this.count++;
    console.log('Button clicked! Count:', this.count);
    this.helloWorld();
    // helloWorld(); // This will throw an error because helloWorld is not defined in this scope
  }

  helloWorld() {
    console.log('Hello, World!');
  }
}
