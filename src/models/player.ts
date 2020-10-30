import { PlayerDto } from '@/api/dto';

export class Player {
  public id: number;
  public name: string;
  public summonerName: string;

  constructor(base: Partial<Player>) {
    this.id = base.id || 0;
    this.name = base.name || '-';
    this.summonerName = base.summonerName || '-';
  }

  public static fromDto(dto: PlayerDto | undefined): Player {
    if (!dto) {
      return new Player({});
    }
    return new Player({
      id: dto.id,
      name: dto.name || undefined,
      summonerName: dto.summonerName || undefined,
    });
  }

}
