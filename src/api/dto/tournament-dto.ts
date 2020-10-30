/* tslint:disable */
import { PoolDto } from './pool-dto';

export interface TournamentDto {
  id?: number;
  name?: null | string;
  pools?: null | Array<PoolDto>;
}
