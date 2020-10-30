/* tslint:disable */
import { GameDto } from './game-dto';
import { UnitDto } from './unit-dto';

export interface PlayerGameDto {
  game?: GameDto;
  position?: number;
  goldLeft?: number;
  lastRound?: number;
  playersEliminated?: number;
  timeEliminated?: number;
  totalDamageToPlayers?: number;
  units?: null | Array<UnitDto>;
}
