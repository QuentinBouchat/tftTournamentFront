/* tslint:disable */
import { TournamentDto } from './tournament-dto';

export type TournamentsIdResponse<
  TCode extends 200 = 200,
  TContentType extends 'text/plain' | 'application/json' | 'text/json' =
    | 'text/plain'
    | 'application/json'
    | 'text/json'
> = TCode extends 200
  ? TContentType extends 'text/plain'
    ? TournamentDto
    : TContentType extends 'application/json'
    ? TournamentDto
    : TContentType extends 'text/json'
    ? TournamentDto
    : any
  : any;
