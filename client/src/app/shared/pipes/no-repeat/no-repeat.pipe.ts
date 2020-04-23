import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noRepeat',
})
export class NoRepeatPipe implements PipeTransform {
  transform(array: any[], field: string): unknown {
    const repeated = array.map((item) => item[field]);
    const noRepeat: any[] = [];
    repeated.filter((item) => {
      if (!noRepeat.includes(item)) noRepeat.push(item);
    });
    return noRepeat;
  }
}
