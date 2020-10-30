/* tslint:disable */
import { SimpleTournamentDto } from './simple-tournament-dto';

export type TournamentsResponse<
  TCode extends 200 = 200,
  TContentType extends 'text/plain' | 'application/json' | 'text/json' =
    | 'text/plain'
    | 'application/json'
    | 'text/json'
> = TCode extends 200
  ? TContentType extends 'text/plain'
    /**
     * Success
     */
    ? Array<SimpleTournamentDto>
    : TContentType extends 'application/json'
      /**
       * Success
       */
    ? Array<SimpleTournamentDto>
    : TContentType extends 'text/json'
      /**
       * Success
       */
    ? Array<SimpleTournamentDto>
    : any
  : any;
