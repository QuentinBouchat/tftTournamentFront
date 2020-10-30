<template>
  <div class="playergame" v-if="playerGame">
    <div class="playergame__info">
      <p class="playergame__info__position"><strong>#{{ playerGame.position }}</strong></p>
      <p><strong>{{ playerGame.playersEliminated }}</strong> players eliminated</p>
      <p><strong>{{ playerGame.totalDamageToPlayers }}</strong> total damage to players</p>
      <p><strong>{{ playerGame.goldLeft }}</strong> gold left</p>
    </div>

    <ul class="playergame__units">
      <li v-for="(unit, index) in playerGame.units" :key="index">
        <figure class="plagergame__unit">
          <ul class="plagergame__unit__stars">
            <li :class="`plagergame__unit__star plagergame__unit__star--${unit.stars}`" v-for="star in unit.stars" :key="star"><md-icon>grade</md-icon></li>
          </ul>

          <img :class="`plagergame__unit__img plagergame__unit__img--${unit.championCost}cost`"
            :src="`${imagesBaseUrl}/champions/${unit.championId}.png`" :alt="unit.champion" :title="unit.champion" />

          <ul class="plagergame__unit__items" v-if="unit.items && unit.items.length">
            <li class="plagergame__unit__item" v-for="item in unit.items" :key="item.id">
              <figure class="item__img">
                <img :src="`${imagesBaseUrl}/items/${item.id}.png`" :alt="item.name" :title="item.name" />
              </figure>
            </li>
          </ul>
        </figure>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { BaseGameResult } from '@/models';

@Component
export default class PlayerGameComponent extends Vue {
  @Prop(Object) public playerGame!: BaseGameResult;

  get imagesBaseUrl() {
    return `${this.$api.baseUrl}/images`;
  }
}
</script>

<style lang="scss">
.playergame {
  display: flex;
}

.playergame__info {
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
}

.playergame__info__position {
  font-size: 1.2rem;
}

.playergame__units {
  display: flex;
}

.plagergame__unit {
  position: relative;
  margin-right: 0.5rem;
}

.plagergame__unit__img {
  border: 3px solid;

  &--1cost {
    border-color: #213042;
  }

  &--2cost {
    border-color: #156831;
  }

  &--3cost {
    border-color: #12407c;
  }

  &--4cost {
    border-color: #893088;
  }

  &--5cost {
    border-color: #b89d27;
  }
}

.plagergame__unit__stars {
  position: absolute;
  top: -10px;

  display: flex;
  justify-content: center;

  width: 100%;
}

.plagergame__unit__star {
  .md-icon {
    width: 19px;
    min-width: 19px;
    height: 19px;
    font-size: 19px!important;
    text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.8);
  }

  &--1 {
    .md-icon {
      color: #AD8A56!important;
    }
  }

  &--2 {
    .md-icon {
      color: #B4B4B4!important;
    }
  }

  &--3 {
    .md-icon {
      color: #C9B037!important;
    }
  }
}

.plagergame__unit__items {
  display: flex;
  justify-content: center;
  margin-top: 0.1rem;
}

.plagergame__unit__item {
  margin: 0 1px;
}

.item__img {
  width: 20px;
  border-radius: 50%;
  overflow: hidden;
}
</style>
