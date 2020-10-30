import { GameDto } from '@/api/dto';

export class Game {
  public id: number;
  public date: Date | null;
  public length: number;

  constructor(base: Partial<Game>) {
    this.id = base.id || 0;
    this.date = base.date || null;
    this.length = base.length || 0;
  }

  public static fromDto(dto: GameDto | undefined): Game {
    if (!dto) {
      return new Game({});
    }
    return new Game({
      id: dto.id,
      date: dto.date ? new Date(dto.date) : undefined,
      length: dto.length || undefined,
    });
  }

}
