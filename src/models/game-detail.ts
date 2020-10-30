import { GameDetailDto } from '@/api/dto';
import { Game } from './game';
import { GamePlayerResult } from './game-player-result';

export class GameDetail extends Game {
  public playersResults: GamePlayerResult[];

  constructor(base: Partial<GameDetail>) {
    super(base);
    this.playersResults = base.playersResults || [];
  }

  public static fromDto(dto: GameDetailDto | undefined): GameDetail {
    if (!dto) {
      return new GameDetail({});
    }
    return new GameDetail({
      ...Game.fromDto(dto),
      playersResults: dto.playersResults ? dto.playersResults.map(GamePlayerResult.fromDto) : undefined
    });
  }

}
