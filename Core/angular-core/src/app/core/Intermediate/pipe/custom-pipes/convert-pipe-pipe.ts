import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertPipe',
})
export class ConvertPipePipe implements PipeTransform {
  transform(amount: number, rate: number): number {
    return amount * rate;
  }
}
