<template>
  <div class="tournamentstats" v-if="tournamentStats">
    <h1 class="title">
      {{ tournamentStats.name }}
    </h1>

    <champions-stats-component :stats="tournamentStats.championsStats" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { TournamentStats } from '@/models';
import ChampionsStatsComponent from '@/components/ChampionsStatsComponent.vue';

@Component({
  components: {
    ChampionsStatsComponent
  },
})
export default class TournamentPage extends Vue {
  @Prop([String, Number]) public id!: string | number;

  public tournamentStats: TournamentStats | null = null;

  get tournamentId(): number {
    return Number(this.id);
  }

  mounted() {
    this.retrieveTournamentStats();
  }

  private async retrieveTournamentStats() {
    const tournamentStats = await this.$api.getTournamentStats(this.tournamentId);
    this.tournamentStats = tournamentStats;
  }
}
</script>
