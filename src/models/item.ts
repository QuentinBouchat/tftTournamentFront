import { ItemDto } from '@/api/dto';

export class Item {
  public id: number;
  public name: string;
  public description: string;

  constructor(base: Partial<Item>) {
    this.id = base.id || 0;
    this.name = base.name || '-';
    this.description = base.description || '-';
  }

  public static fromDto(dto: ItemDto | undefined): Item {
    if (!dto) {
      return new Item({});
    }
    return new Item({
      id: dto.id,
      name: dto.name || undefined,
      description: dto.description || undefined,
    });
  }

}
