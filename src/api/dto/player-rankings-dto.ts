/* tslint:disable */
export interface PlayerRankingsDto {
  playerId?: number;
  playerName?: null | string;
  playerSummonerName?: null | string;
  position?: number;
  points?: number;
  playersEliminated?: number;
  totalDamageToPlayers?: number;
  nbTopOne?: number;
}
