<template>
  <md-table v-model="rankings" md-sort="position" md-sort-order="asc" md-card>
    <md-table-toolbar>
      <h1 class="md-title">Rankings</h1>
    </md-table-toolbar>

    <md-table-row slot="md-table-row" slot-scope="{ item }">
      <md-table-cell md-label="#" md-sort-by="position" md-numeric>{{ item.position }}</md-table-cell>
      <md-table-cell md-label="Name" md-sort-by="playerName">
        <router-link :to="{ name: 'TournamentPlayer', params: { id: tournamentId, player: item.playerId } }">{{ item.playerName }}</router-link>
      </md-table-cell>
      <md-table-cell md-label="Summoner name" md-sort-by="playerSummonerName">{{ item.playerSummonerName }}</md-table-cell>
      <md-table-cell md-label="Points" md-sort-by="points">{{ item.points }}</md-table-cell>
      <md-table-cell md-label="Players eliminated" md-sort-by="playersEliminated">{{ item.playersEliminated }}</md-table-cell>
      <md-table-cell md-label="Damage to players" md-sort-by="totalDamageToPlayers">{{ item.totalDamageToPlayers }}</md-table-cell>
    </md-table-row>
  </md-table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { PlayerRankings } from '@/models';

@Component
export default class TournamentRankingsComponent extends Vue {
  @Prop(Number) public tournamentId!: number;
  @Prop(Array) public rankings!: PlayerRankings[];
}
</script>
