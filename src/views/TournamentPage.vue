<template>
  <div class="tournament" v-if="tournament">
    <h1 class="title">
      {{ tournament.name }}
      <md-button :to="{ name: 'TournamentStats', params: { id: tournamentId }}" class="title__btn md-fab md-primary md-mini"><md-icon>leaderboard</md-icon></md-button>
    </h1>

    <template v-if="tournament.pools && tournament.pools.length > 1">
      <div v-for="pool in tournament.pools" :key="pool.id">
        <h2>{{ pool.name }}</h2>

        <ul>
          <li v-for="player in pool.players" :key="player.id">{{ player.name }}</li>
        </ul>
      </div>
    </template>

    <tournament-rankings-component :tournamentId="tournamentId" :rankings="tournamentRankings.rankings" v-if="tournamentRankings" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Tournament, TournamentRankings } from '@/models';
import TournamentRankingsComponent from '@/components/TournamentRankingsComponent.vue';

@Component({
  components: {
    TournamentRankingsComponent
  },
})
export default class TournamentPage extends Vue {
  @Prop([String, Number]) public id!: string | number;

  public tournament: Tournament | null = null;
  public tournamentRankings: TournamentRankings | null = null;

  get tournamentId(): number {
    return Number(this.id);
  }

  mounted() {
    this.retrieveTournament();
    this.retrieveTournamentResults();
  }

  private async retrieveTournament() {
    const tournament = await this.$api.getTournament(this.tournamentId);
    this.tournament = tournament;
  }

  private async retrieveTournamentResults() {
    const tournamentRankings = await this.$api.getTournamentRankings(this.tournamentId);
    this.tournamentRankings = tournamentRankings;
  }
}
</script>

<style lang="scss">
.title__btn {
  position: absolute;
  right: 0;
  margin: 0;
}
</style>
