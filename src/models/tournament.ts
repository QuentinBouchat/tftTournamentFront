import { TournamentDto } from '@/api/dto';
import { Pool } from './pool';

export class Tournament {
  public id: number;
  public name: string;
  public pools: Pool[];

  constructor(base: Partial<Tournament>) {
    this.id = base.id || 0;
    this.name = base.name || '-';
    this.pools = base.pools || [];
  }

  public static fromDto(dto: TournamentDto): Tournament {
    if (!dto) {
      return new Tournament({});
    }
    return new Tournament({
      id: dto.id,
      name: dto.name || undefined,
      pools: dto.pools ? dto.pools.map(Pool.fromDto) : undefined
    });
  }
}
