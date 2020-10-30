import { PlayerRankingsDto } from '@/api/dto';

export class PlayerRankings {
  public playerId: number;
  public playerName:	string;
  public playerSummonerName:	string;
  public position: number;
  public points: number;
  public playersEliminated: number;
  public totalDamageToPlayers: number;
  public nbTopOne: number;

  constructor(base: Partial<PlayerRankings>) {
    this.playerId = base.playerId || 0;
    this.playerName = base.playerName || '-';
    this.playerSummonerName = base.playerSummonerName || '-';
    this.position = base.position || 0;
    this.points = base.points || 0;
    this.playersEliminated = base.playersEliminated || 0;
    this.totalDamageToPlayers = base.totalDamageToPlayers || 0;
    this.nbTopOne = base.nbTopOne || 0;
  }

  public static fromDto(dto: PlayerRankingsDto): PlayerRankings {
    if (!dto) {
      return new PlayerRankings({});
    }
    return new PlayerRankings({
      playerId: dto.playerId,
      playerName: dto.playerName || undefined,
      playerSummonerName: dto.playerSummonerName || undefined,
      position: dto.position,
      points: dto.points,
      playersEliminated: dto.playersEliminated,
      totalDamageToPlayers: dto.totalDamageToPlayers,
      nbTopOne: dto.nbTopOne,
    });
  }
}
