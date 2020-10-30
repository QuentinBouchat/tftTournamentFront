import { PlayerGameDto } from '@/api/dto';
import { BaseGameResult } from './base-game-result';
import { Game } from './game';
import { Unit } from './unit';

export class PlayerGame extends BaseGameResult {
  public game: Game | null;

  constructor(base: Partial<PlayerGame>) {
    super(base);
    this.game = base.game || null;
  }

  public static fromDto(dto: PlayerGameDto): PlayerGame {
    if (!dto) {
      return new PlayerGame({});
    }
    return new PlayerGame({
      position: dto.position,
      goldLeft: dto.goldLeft,
      lastRound: dto.lastRound,
      playersEliminated: dto.playersEliminated,
      timeEliminated: dto.timeEliminated,
      totalDamageToPlayers: dto.totalDamageToPlayers,
      game: Game.fromDto(dto.game),
      units: dto.units ? dto.units.map(Unit.fromDto) : undefined,
    });
  }

}
