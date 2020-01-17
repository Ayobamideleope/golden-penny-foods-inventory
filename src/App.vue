<template>
  <v-app>
    <v-i-nav-drawer />

    <v-content>
      <router-view />
    </v-content>

    <v-i-app-bar />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import VINavDrawer from '@/components/layout/VINavDrawer.vue';
import VIAppBar from '@/components/layout/VIAppBar.vue';

@Component({
  components: {
    VINavDrawer,
    VIAppBar
  }
})
export default class App extends Vue {}
</script>
