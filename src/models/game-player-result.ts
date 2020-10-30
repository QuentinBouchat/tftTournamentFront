import { GamePlayerResultDto } from '@/api/dto';
import { BaseGameResult } from './base-game-result';
import { Unit } from './unit';
import { Player } from './player';

export class GamePlayerResult extends BaseGameResult {
  public player: Player | null;

  constructor(base: Partial<GamePlayerResult>) {
    super(base);
    this.player = base.player || null;
  }

  public static fromDto(dto: GamePlayerResultDto): GamePlayerResult {
    if (!dto) {
      return new GamePlayerResult({});
    }
    return new GamePlayerResult({
      position: dto.position,
      goldLeft: dto.goldLeft,
      lastRound: dto.lastRound,
      playersEliminated: dto.playersEliminated,
      timeEliminated: dto.timeEliminated,
      totalDamageToPlayers: dto.totalDamageToPlayers,
      player: Player.fromDto(dto.player),
      units: dto.units ? dto.units.map(Unit.fromDto) : undefined,
    });
  }

}
