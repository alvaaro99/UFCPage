import { IFighter } from './fighter.model';

export interface IFight {
  loser: IFighter;
  winner: IFighter;
  winBy: string;
}
