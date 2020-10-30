/* tslint:disable */
import { ChampionStatsDto } from './champion-stats-dto';

export interface TournamentStatsDto {
  name?: null | string;
  championsStats?: null | Array<ChampionStatsDto>;
}
