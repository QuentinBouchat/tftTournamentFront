<template>
  <div id="app" class="container">
    <div id="nav">
      <router-link class="nav__logo" to="/">
        <img src="@/assets/tft_logo.png" />
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(VueMaterial);

@Component
export default class App extends Vue {}
</script>

<style lang="scss">
@import '@/styles/main';
</style>
