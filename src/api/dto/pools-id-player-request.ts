/* tslint:disable */
import { AddPlayerDto } from './add-player-dto';

export type PoolsIdPlayerRequest<
  TCode extends 'application/json' | 'text/json' | 'application/*+json' =
    | 'application/json'
    | 'text/json'
    | 'application/*+json'
> = TCode extends 'application/json'
  ? AddPlayerDto
  : TCode extends 'text/json'
  ? AddPlayerDto
  : TCode extends 'application/*+json'
  ? AddPlayerDto
  : any;
