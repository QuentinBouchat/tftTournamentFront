/* tslint:disable */
import { TournamentPlayerGamesDto } from './tournament-player-games-dto';

export type TournamentsIdPlayersPlayerIdResponse<
  TCode extends 200 = 200,
  TContentType extends 'text/plain' | 'application/json' | 'text/json' =
    | 'text/plain'
    | 'application/json'
    | 'text/json'
> = TCode extends 200
  ? TContentType extends 'text/plain'
    ? TournamentPlayerGamesDto
    : TContentType extends 'application/json'
    ? TournamentPlayerGamesDto
    : TContentType extends 'text/json'
    ? TournamentPlayerGamesDto
    : any
  : any;
