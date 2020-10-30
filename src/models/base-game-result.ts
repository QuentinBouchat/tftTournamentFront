import { Unit } from './unit';

export class BaseGameResult {
  public position: number;
  public goldLeft: number;
  public lastRound: number;
  public playersEliminated: number;
  public timeEliminated: number;
  public totalDamageToPlayers: number;
  public units: Unit[];

  constructor(base: Partial<BaseGameResult>) {
    this.position = base.position || 0;
    this.goldLeft = base.goldLeft || 0;
    this.lastRound = base.lastRound || 0;
    this.playersEliminated = base.playersEliminated || 0;
    this.timeEliminated = base.timeEliminated || 0;
    this.totalDamageToPlayers = base.totalDamageToPlayers || 0;
    this.units = base.units || [];
  }
}
