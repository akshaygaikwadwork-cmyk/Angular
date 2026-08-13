import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-statement',
  imports: [],
  templateUrl: './switch-statement.html',
  styleUrl: './switch-statement.scss',
})
export class SwitchStatement {
  value: string = 'Home';
  tab: string = '';

  categories = '';

  updateCategory(val: string){
    this.categories = val.toLowerCase();
  }
}
