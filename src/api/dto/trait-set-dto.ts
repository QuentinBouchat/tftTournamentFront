/* tslint:disable */
import { TraitSetDataDto } from './trait-set-data-dto';

export interface TraitSetDto {
  key?: null | string;
  name?: null | string;
  description?: null | string;
  type?: null | string;
  sets?: null | Array<TraitSetDataDto>;
  innate?: null | string;
}
