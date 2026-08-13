import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop-contextual-variables',
  imports: [],
  templateUrl: './for-loop-contextual-variables.html',
  styleUrl: './for-loop-contextual-variables.scss',
})
export class ForLoopContextualVariables {
  items = ['Html', 'CSS', 'Javascript', 'Angular', 'Typescript']

  numbers = [1,2,3,4,5];
}
