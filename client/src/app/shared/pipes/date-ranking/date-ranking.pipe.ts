import { Pipe, PipeTransform } from '@angular/core';
import { IFighter } from '../../models/fighter.model';

@Pipe({
  name: 'dateRanking',
})
export class DateRankingPipe implements PipeTransform {
  transform(fighters: IFighter[], date: string): IFighter[] {
    if (date === 'all') return fighters;
    return fighters.filter((fighter) => fighter.date.toString() === date);
  }
}
