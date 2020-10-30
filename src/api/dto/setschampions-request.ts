/* tslint:disable */
import { ChampionSetDto } from './champion-set-dto';

export type SetschampionsRequest<
  TCode extends 'application/json' | 'text/json' | 'application/*+json' =
    | 'application/json'
    | 'text/json'
    | 'application/*+json'
> = TCode extends 'application/json'
  ? Array<ChampionSetDto>
  : TCode extends 'text/json'
  ? Array<ChampionSetDto>
  : TCode extends 'application/*+json'
  ? Array<ChampionSetDto>
  : any;
