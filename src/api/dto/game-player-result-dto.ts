/* tslint:disable */
import { PlayerDto } from './player-dto';
import { UnitDto } from './unit-dto';

export interface GamePlayerResultDto {
  player?: PlayerDto;
  position?: number;
  goldLeft?: number;
  lastRound?: number;
  playersEliminated?: number;
  timeEliminated?: number;
  totalDamageToPlayers?: number;
  units?: null | Array<UnitDto>;
}
