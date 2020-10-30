import { PoolDto } from '@/api/dto';
import { Player } from './player';

export class Pool {
  public id: number;
  public name: string;
  public players: Player[];

  constructor(base: Partial<Pool>) {
    this.id = base.id || 0;
    this.name = base.name || '-';
    this.players = base.players || [];
  }

  public static fromDto(dto: PoolDto): Pool {
    if (!dto) {
      return new Pool({});
    }
    return new Pool({
      id: dto.id,
      name: dto.name || undefined,
      players: dto.players ? dto.players.map(Player.fromDto) : undefined
    });
  }

}
