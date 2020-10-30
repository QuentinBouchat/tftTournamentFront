<template>
  <div class="tournamentplayer" v-if="playerGames">
    <h1 class="title" v-if="playerGames.player">{{ playerGames.player.name }}</h1>

    <ul class="game__list">
      <li class="game__item" v-for="(playerGame, index) in playerGames.games" :key="index">
        <h2 class="subtitle">
          <router-link :to="{ name: 'TournamentGame', params: { id: tournamentId, game: playerGame.game.id } }">Game {{ index + 1 }}</router-link>
          <small>{{ playerGame.game.length / 60 | toFixed }} min</small>
        </h2>
        <player-game-component :player-game="playerGame" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { TournamentPlayerGames } from '@/models';
import PlayerGameComponent from '@/components/PlayerGameComponent.vue';

@Component({
  components: {
    PlayerGameComponent
  },
})
export default class TournamentPlayerPage extends Vue {
  @Prop([String, Number]) public id!: string | number;
  @Prop([String, Number]) public player!: string | number;

  public playerGames: TournamentPlayerGames | null = null;

  get tournamentId(): number {
    return Number(this.id);
  }

  get playerId(): number {
    return Number(this.player);
  }

  mounted() {
    this.retrieveTournamentPlayerGames();
  }

  private async retrieveTournamentPlayerGames() {
    const playerGames = await this.$api.getTournamentPlayerGames(this.tournamentId, this.playerId);
    this.playerGames = playerGames;
  }
}
</script>

<style lang="scss">
.game__item {
  margin-bottom: 2rem;
}
</style>
