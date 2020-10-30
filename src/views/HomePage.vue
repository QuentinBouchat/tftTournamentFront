<template>
  <div class="home">
    <md-list>
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
  public tournaments: SimpleTournament[] = [];

  async mounted() {
    const tournaments = await this.$api.getTournaments();
    this.tournaments = tournaments;
  }
}
</script>
