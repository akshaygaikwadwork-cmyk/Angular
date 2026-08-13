import { Component } from '@angular/core';

@Component({
  selector: 'app-loop',
  imports: [],
  templateUrl: './loop.html',
  styleUrl: './loop.scss',
})
export class Loop {
  items = ['HTML', 'CSS', 'Javasceipt', 'Angular'];

  users = [
    {name: 'Akshay', age: 25},
    {name: 'Vinay', age: 32},
    {name: 'Pooja', age: 34}
  ]

  itemsList = ['Apple', 'Banana', 'Cherry', 'Date']

  removeItem (i: number){
    this.itemsList.splice(i, 1);
  }

  numbersList = [10, 20, 15, 30, 25];
}
