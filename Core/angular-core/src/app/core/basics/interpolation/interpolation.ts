import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  imports: [],
  templateUrl: './interpolation.html',
  styleUrl: './interpolation.scss',
})
export class Interpolation {

  title = 'Angular Interpolation';
  userName = 'Akshay Gaikwad';
  age = 25;
  count = 5;
  price = 99.99;
  isLoggedIn = true;
  data = signal("This is a signal data");

  getUserInfo() {
    return `${this.userName} is ${this.age} years old.`;
  }
}
