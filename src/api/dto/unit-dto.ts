/* tslint:disable */
import { ItemDto } from './item-dto';

export interface UnitDto {
  championId?: null | string;
  champion?: null | string;
  championCost?: number;
  chosen?: null | string;
  stars?: number;
  items?: null | Array<ItemDto>;
}
