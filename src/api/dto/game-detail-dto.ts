/* tslint:disable */
import { GamePlayerResultDto } from './game-player-result-dto';

export interface GameDetailDto {
  playersResults?: null | Array<GamePlayerResultDto>;
  id?: number;
  date?: null | string;
  length?: null | number;
}
