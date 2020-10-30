import { UnitDto } from '@/api/dto';
import { Item } from './item';

export class Unit {
  public championId: string;
  public champion: string;
  public championCost: number;
  public chosen: string;
  public stars: number;
  public items: Item[];

  constructor(base: Partial<Unit>) {
    this.championId = base.championId || '-';
    this.champion = base.champion || '-';
    this.championCost = base.championCost || 0;
    this.chosen = base.chosen || '-';
    this.stars = base.stars || 1;
    this.items = base.items || [];
  }

  public static fromDto(dto: UnitDto): Unit {
    if (!dto) {
      return new Unit({});
    }
    return new Unit({
      championId: dto.championId || undefined,
      champion: dto.champion || undefined,
      championCost: dto.championCost || undefined,
      chosen: dto.chosen || undefined,
      stars: dto.stars || undefined,
      items: dto.items ? dto.items.map(Item.fromDto) : undefined,
    });
  }

}
