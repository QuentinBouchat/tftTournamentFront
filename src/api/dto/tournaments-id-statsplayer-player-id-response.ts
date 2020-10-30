/* tslint:disable */
import { TournamentStatsDto } from './tournament-stats-dto';

export type TournamentsIdStatsplayerPlayerIdResponse<
  TCode extends 200 = 200,
  TContentType extends 'text/plain' | 'application/json' | 'text/json' =
    | 'text/plain'
    | 'application/json'
    | 'text/json'
> = TCode extends 200
  ? TContentType extends 'text/plain'
    ? TournamentStatsDto
    : TContentType extends 'application/json'
    ? TournamentStatsDto
    : TContentType extends 'text/json'
    ? TournamentStatsDto
    : any
  : any;
