import { TournamentRankingsDto } from '@/api/dto';
import { PlayerRankings } from './player-rankings';

export class TournamentRankings {
  public name: string;
  public rankings: PlayerRankings[];

  constructor(base: Partial<TournamentRankings>) {
    this.name = base.name || '-';
    this.rankings = base.rankings || [];
  }

  public static fromDto(dto: TournamentRankingsDto): TournamentRankings {
    if (!dto) {
      return new TournamentRankings({});
    }
    return new TournamentRankings({
      name: dto.name || undefined,
      rankings: dto.rankings ? dto.rankings.map(PlayerRankings.fromDto) : undefined
    });
  }
}
