import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PipeShortNamePipe } from '../pipe/custom-pipes/pipe-short-name-pipe';
import { ConvertPipePipe } from '../pipe/custom-pipes/convert-pipe-pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule, PipeShortNamePipe, ConvertPipePipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.scss',
})
export class Pipes {
  //Built-In pipes
  lname = 'akshay'
  uname = 'AKSHAY'

  today = new Date();

  amount = 2500;

  per = 0.35;

  user = {
    name : 'Akshay',
    age : 25
  }

  fullName = 'Akshay Gaikwad'

  usd = 10;
  usdToInr = 93;
}
