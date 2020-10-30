/* tslint:disable */
import { TournamentRankingsDto } from './tournament-rankings-dto';

export type TournamentsIdRankingsResponse<
  TCode extends 200 = 200,
  TContentType extends 'text/plain' | 'application/json' | 'text/json' =
    | 'text/plain'
    | 'application/json'
    | 'text/json'
> = TCode extends 200
  ? TContentType extends 'text/plain'
    ? TournamentRankingsDto
    : TContentType extends 'application/json'
    ? TournamentRankingsDto
    : TContentType extends 'text/json'
    ? TournamentRankingsDto
    : any
  : any;
