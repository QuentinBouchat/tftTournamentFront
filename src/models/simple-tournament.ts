import { SimpleTournamentDto } from '@/api/dto';

export class SimpleTournament {
  public id: number;
  public name: string;

  constructor(base: Partial<SimpleTournament>) {
    this.id = base.id || 0;
    this.name = base.name || '-';
  }

  public static fromDto(dto: SimpleTournamentDto): SimpleTournament {
    if (!dto) {
      return new SimpleTournament({});
    }
    return new SimpleTournament({
      id: dto.id,
      name: dto.name || undefined
    });
  }
}
