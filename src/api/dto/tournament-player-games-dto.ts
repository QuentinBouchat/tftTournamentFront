/* tslint:disable */
import { PlayerDto } from './player-dto';
import { PlayerGameDto } from './player-game-dto';

export interface TournamentPlayerGamesDto {
  player?: PlayerDto;
  games?: null | Array<PlayerGameDto>;
}
