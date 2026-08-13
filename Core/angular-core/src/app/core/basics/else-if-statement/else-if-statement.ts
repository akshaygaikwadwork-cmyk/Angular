import { Component } from '@angular/core';

@Component({
  selector: 'app-else-if-statement',
  imports: [],
  templateUrl: './else-if-statement.html',
  styleUrl: './else-if-statement.scss',
})
export class ElseIfStatement {
  status : string = 'processing';
  
  marks : number = 75;
  age : number = 0;

  updateAge(age:string){
    this.age = Number(age);
  }

  section : string = '';
}
