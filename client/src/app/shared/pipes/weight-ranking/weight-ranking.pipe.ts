import { Pipe, PipeTransform } from '@angular/core';
import { IFighter } from '../../models/fighter.model';

@Pipe({
  name: 'weight',
})
export class WeightRankingPipe implements PipeTransform {
  transform(fighters: IFighter[], weight: string): IFighter[] {
    if (weight === 'all') return fighters;
    return fighters.filter((fighter) => fighter.weightclass === weight);
  }
}
