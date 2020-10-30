/* tslint:disable */
import { GameDto } from './game-dto';
import { PlayerDto } from './player-dto';

export interface PoolDto {
  id?: number;
  name?: null | string;
  players?: null | Array<PlayerDto>;
  games?: null | Array<GameDto>;
}
