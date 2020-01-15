<template>
  <v-app>
    <v-i-nav-drawer />

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import VINavDrawer from '@/components/layout/VINavDrawer.vue';

@Component({
  components: {
    VINavDrawer
  }
})
export default class App extends Vue {}
</script>
