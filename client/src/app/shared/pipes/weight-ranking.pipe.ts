import { Pipe, PipeTransform } from '@angular/core';
import { FighterRanking } from '../models/fighterRanking.model';

@Pipe({
  name: 'weight'
})
export class WeightRankingPipe implements PipeTransform {
  transform(fighters: FighterRanking[], weight: string): FighterRanking[] {
    if (weight === 'all') return fighters;
    return fighters.filter(fighter => fighter.weightclass === weight);
  }
}
