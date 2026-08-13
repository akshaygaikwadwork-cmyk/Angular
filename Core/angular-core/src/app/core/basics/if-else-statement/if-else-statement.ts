import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else-statement',
  imports: [],
  templateUrl: './if-else-statement.html',
  styleUrl: './if-else-statement.scss',
})
export class IfElseStatement {
  isLoggedIn = true;

  marks  = 65;

  showBox= true;

  toggleBox() {
    this.showBox = !this.showBox;
  }

  age = 0;

  updateAge(newAge: string) {
    this.age = Number(newAge);
  }
}
