/* tslint:disable */
import { PlayerRankingsDto } from './player-rankings-dto';

export interface TournamentRankingsDto {
  name?: null | string;
  rankings?: null | Array<PlayerRankingsDto>;
}
