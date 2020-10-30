/* tslint:disable */
import { TraitSetDto } from './trait-set-dto';

export type SetstraitsRequest<
  TCode extends 'application/json' | 'text/json' | 'application/*+json' =
    | 'application/json'
    | 'text/json'
    | 'application/*+json'
> = TCode extends 'application/json'
  ? Array<TraitSetDto>
  : TCode extends 'text/json'
  ? Array<TraitSetDto>
  : TCode extends 'application/*+json'
  ? Array<TraitSetDto>
  : any;
