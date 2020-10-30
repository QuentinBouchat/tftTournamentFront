import { ChampionStatsDto } from '@/api/dto';

export class ChampionStats {
  public championId: string;
  public champion: string;
  public usage: number;
  public usagePercentage: number;
  public averagePosition: number;

  constructor(base: Partial<ChampionStats>) {
    this.championId = base.championId || '-';
    this.champion = base.champion || '-';
    this.usage = base.usage || 0;
    this.usagePercentage = base.usagePercentage || 0;
    this.averagePosition = base.averagePosition || 0;
  }

  public static fromDto(dto: ChampionStatsDto): ChampionStats {
    if (!dto) {
      return new ChampionStats({});
    }
    return new ChampionStats({
      championId: dto.championId || undefined,
      champion: dto.champion || undefined,
      usage: dto.usage || undefined,
      usagePercentage: dto.usagePercentage || undefined,
      averagePosition: dto.averagePosition || undefined
    });
  }
}
