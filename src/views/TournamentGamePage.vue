<template>
  <div class="tournamentgame" v-if="gameDetail">
    <ul class="player__list">
      <li class="player__item" v-for="(playerGame, index) in gameDetail.playersResults" :key="index">
        <h2 class="subtitle"><router-link :to="{ name: 'TournamentPlayer', params: { id: tournamentId, player: playerGame.player.id } }">{{ playerGame.player.name }}</router-link></h2>
        <player-game-component :player-game="playerGame" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import PlayerGameComponent from '@/components/PlayerGameComponent.vue';
import { GameDetail } from '@/models';

@Component({
  components: {
    PlayerGameComponent
  },
})
export default class TournamentGamePage extends Vue {
  @Prop([String, Number]) public id!: string | number;
  @Prop([String, Number]) public game!: string | number;

  public gameDetail: GameDetail | null = null;

  get tournamentId(): number {
    return Number(this.id);
  }

  get gameId(): number {
    return Number(this.game);
  }

  mounted() {
    this.retrieveTournamentGame();
  }

  private async retrieveTournamentGame() {
    const game = await this.$api.getGameDetail(this.gameId);
    this.gameDetail = game;
  }
}
</script>

<style lang="scss">
.player__item {
  margin-bottom: 2rem;
}
</style>
