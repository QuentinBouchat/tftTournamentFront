import { TournamentStatsDto } from '@/api/dto';
import { ChampionStats } from './champion-stats';

export class TournamentStats {
  public name: string;
  public championsStats: ChampionStats[];

  constructor(base: Partial<TournamentStats>) {
    this.name = base.name || '-';
    this.championsStats = base.championsStats || [];
  }

  public static fromDto(dto: TournamentStatsDto): TournamentStats {
    if (!dto) {
      return new TournamentStats({});
    }
    return new TournamentStats({
      name: dto.name || undefined,
      championsStats: dto.championsStats ? dto.championsStats.map(ChampionStats.fromDto) : undefined
    });
  }
}
