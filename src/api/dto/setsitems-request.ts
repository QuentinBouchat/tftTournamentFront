/* tslint:disable */
import { ItemSetDto } from './item-set-dto';

export type SetsitemsRequest<
  TCode extends 'application/json' | 'text/json' | 'application/*+json' =
    | 'application/json'
    | 'text/json'
    | 'application/*+json'
> = TCode extends 'application/json'
  ? Array<ItemSetDto>
  : TCode extends 'text/json'
  ? Array<ItemSetDto>
  : TCode extends 'application/*+json'
  ? Array<ItemSetDto>
  : any;
