<template>
  <md-table v-model="stats" md-sort="usagePercentage" md-sort-order="desc" md-card>
    <md-table-toolbar>
      <h1 class="md-title">Statistics</h1>
    </md-table-toolbar>

    <md-table-row slot="md-table-row" slot-scope="{ item }">
      <md-table-cell md-label="Champion" md-sort-by="champion">
        <img class="champion__logo" :src="`${imagesBaseUrl}/champions/${item.championId}.png`" :alt="item.champion" :title="item.champion" /> {{ item.champion }}
      </md-table-cell>
      <md-table-cell md-label="Usage" md-sort-by="usage">{{ item.usage }}</md-table-cell>
      <md-table-cell md-label="Percentage" md-sort-by="usagePercentage">{{ item.usagePercentage | toFixed }}%</md-table-cell>
      <md-table-cell md-label="Average position" md-sort-by="averagePosition">{{ item.averagePosition | toFixed }}</md-table-cell>
    </md-table-row>
  </md-table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ChampionStats } from '@/models/';

@Component
export default class ChampionsStatsComponent extends Vue {
  @Prop(Array) public stats!: ChampionStats[];

  get imagesBaseUrl() {
    return `${this.$api.baseUrl}/images`;
  }
}
</script>

<style lang="scss">
.champion__logo {
  width: 40px;
}
</style>
