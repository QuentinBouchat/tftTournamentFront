import { TournamentPlayerGamesDto } from '@/api/dto';
import { Player } from './player';
import { PlayerGame } from './player-game';

export class TournamentPlayerGames {
  public player: Player | null;
  public games: PlayerGame[];

  constructor(base: Partial<TournamentPlayerGames>) {
    this.player = base.player || null;
    this.games = base.games || [];
  }

  public static fromDto(dto: TournamentPlayerGamesDto): TournamentPlayerGames {
    if (!dto) {
      return new TournamentPlayerGames({});
    }
    return new TournamentPlayerGames({
      player: Player.fromDto(dto.player),
      games: dto.games ? dto.games.map(PlayerGame.fromDto) : undefined
    });
  }

}
