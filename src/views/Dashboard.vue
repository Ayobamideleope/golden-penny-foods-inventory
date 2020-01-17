<template>
  <v-container class="vi-dashboard-page my-6">
    <h2 class="primary--text text--darken-3 font-weight-medium mb-6">
      <v-icon x-large size="64px" color="accent">{{ mdiViewDashboard }}</v-icon>
      Dashboard
    </h2>
    <v-row justify="center">
      <v-col cols="6" sm="4" md="3">
        <v-boilerplate type="image" />
      </v-col>

      <v-col cols="6" sm="4" md="3">
        <v-boilerplate type="image" />
      </v-col>

      <v-col cols="6" sm="4" md="3">
        <v-boilerplate type="image" />
      </v-col>

      <v-col cols="6" sm="4" md="3">
        <v-boilerplate type="image" />
      </v-col>

      <v-col cols="12" sm="8" md="6">
        <v-boilerplate type="card-avatar" />
      </v-col>

      <v-col cols="12" sm="8" md="6">
        <v-boilerplate type="image" />
      </v-col>

      <v-col cols="12" sm="8" md="6">
        <v-boilerplate type="article" />
      </v-col>

      <v-col cols="12" sm="8" md="6">
        <v-boilerplate type="list-item-three-line" class="mb-3" />

        <v-boilerplate type="list-item-two-line" class="mb-3" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mdiViewDashboard } from '@mdi/js';

import VBoilerplate from '@/components/core/VBoilerplate.vue';
import VSkeletonLoader from 'vuetify/lib/components/VSkeletonLoader';

@Component({
  components: {
    VBoilerplate,
    VSkeletonLoader
  }
})
export default class DashboardPage extends Vue {
  mdiViewDashboard = mdiViewDashboard;
}
</script>
