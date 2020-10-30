import axios, { AxiosStatic } from 'axios';
import { SimpleTournament, Tournament, TournamentRankings, TournamentPlayerGames, TournamentStats, GameDetail } from '@/models';
import { SimpleTournamentDto, TournamentDto, TournamentRankingsDto } from './dto';
import { TournamentPlayerGamesDto, TournamentStatsDto, GameDetailDto } from '@/api/dto';

export class Api {
  public baseUrl = `${process.env.VUE_APP_API_URL}`;

  constructor(private axios: AxiosStatic) { }

  public async getTournaments(): Promise<SimpleTournament[]> {
    const result = await this.axios.get<SimpleTournamentDto[]>(`${this.baseUrl}/api/tournaments`);
    return result.data.map(SimpleTournament.fromDto);
  }

  public async getTournament(id: number): Promise<Tournament> {
    const result = await this.axios.get<TournamentDto>(`${this.baseUrl}/api/tournaments/${id}`);
    return Tournament.fromDto(result.data);
  }

  public async getTournamentRankings(id: number): Promise<TournamentRankings> {
    const result = await this.axios.get<TournamentRankingsDto>(`${this.baseUrl}/api/tournaments/${id}/rankings`);
    return TournamentRankings.fromDto(result.data);
  }

  public async getTournamentStats(id: number): Promise<TournamentStats> {
    const result = await this.axios.get<TournamentStatsDto>(`${this.baseUrl}/api/tournaments/${id}/stats`);
    return TournamentStats.fromDto(result.data);
  }

  public async getTournamentPlayerGames(id: number, playerId: number): Promise<TournamentPlayerGames> {
    const result = await this.axios.get<TournamentPlayerGamesDto>(`${this.baseUrl}/api/tournaments/${id}/players/${playerId}`);
    return TournamentPlayerGames.fromDto(result.data);
  }

  public async getGameDetail(id: number): Promise<GameDetail> {
    const result = await this.axios.get<GameDetailDto>(`${this.baseUrl}/api/games/${id}`);
    return GameDetail.fromDto(result.data);
  }

}

export const apiInstance = new Api(axios);
