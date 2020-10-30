/* tslint:disable */
import { GameDetailDto } from './game-detail-dto';

export type GamesIdResponse<
  TCode extends 200 = 200,
  TContentType extends 'text/plain' | 'application/json' | 'text/json' =
    | 'text/plain'
    | 'application/json'
    | 'text/json'
> = TCode extends 200
  ? TContentType extends 'text/plain'
    ? GameDetailDto
    : TContentType extends 'application/json'
    ? GameDetailDto
    : TContentType extends 'text/json'
    ? GameDetailDto
    : any
  : any;
