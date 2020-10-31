<template>
  <div class="home">
    <div class="loading" v-if="loading">
      <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
    </div>
    <md-list v-else>
      <md-list-item v-for="tournament in tournaments" :key="tournament.id" :to="{ name: 'Tournament', params: { id: tournament.id } }">{{ tournament.name }}</md-list-item>
    </md-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { SimpleTournament } from '@/models';

@Component({
  components: {
  },
})
export default class HomePage extends Vue {
  public loading = true;
  public tournaments: SimpleTournament[] = [];

  async mounted() {
    const tournaments = await this.$api.getTournaments();
    this.tournaments = tournaments;
    this.loading = false;
  }
}
</script>

<style lang="scss">
.loading {
  display: flex;
  justify-content: center;
}
</style>
