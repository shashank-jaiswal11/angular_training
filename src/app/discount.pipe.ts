import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    let res= value * 10;

    return value * 100/args[0];
  }

}
