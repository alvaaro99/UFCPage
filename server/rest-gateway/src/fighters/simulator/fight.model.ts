import { IFighter } from '../fighter.model';

export interface IFightDto {
  red: IFighter;
  blue: IFighter;
}

export interface IFight {
  red: IFighter;
  blue: IFighter;
  winner: IFighter;
  winBy: string;
}
