import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateToAge',
})
export class DateToAgePipe implements PipeTransform {
  transform(birthdateFighter: Date, ...args: unknown[]): number {
    const today = new Date();
    const birthdate = new Date(birthdateFighter);
    let age = today.getFullYear() - birthdate.getFullYear();
    const month = today.getMonth() - birthdate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate()))
      age--;
    return age;
  }
}
