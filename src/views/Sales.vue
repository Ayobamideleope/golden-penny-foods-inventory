<template>
  <v-container class="vi-dashboard-page my-6">
    <h2 class="primary--text text--darken-3 font-weight-medium mb-6">
      <v-icon x-large size="64px" color="accent">{{
        mdiCartArrowRight
      }}</v-icon>
      Sales
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

      <v-col cols="12" sm="8" md="6" class="mt-8">
        <v-boilerplate
          type="list-item-three-line, text, text, text"
          class="mb-3 pa-3"
        />

        <v-boilerplate type="actions" class="mb-3" />
      </v-col>

      <v-col cols="12" sm="8" md="6">
        <v-boilerplate type="image" class="mb-3 pa-3" />

        <v-boilerplate type="actions" class="mb-3" />
      </v-col>

      <v-col cols="6" sm="4" md="3">
        <v-boilerplate type="avatar" />
      </v-col>

      <v-col cols="6" sm="4" md="3">
        <v-boilerplate type="avatar" />
      </v-col>

      <v-col cols="6" sm="4" md="3">
        <v-boilerplate type="avatar" />
      </v-col>

      <v-col cols="6" sm="4" md="3">
        <v-boilerplate type="avatar" />
      </v-col>

      <v-col cols="12" class="mt-8">
        <v-boilerplate type="table" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mdiCartArrowRight } from '@mdi/js';

import VBoilerplate from '@/components/core/VBoilerplate.vue';
import VSkeletonLoader from 'vuetify/lib/components/VSkeletonLoader';

@Component({
  components: {
    VBoilerplate,
    VSkeletonLoader
  }
})
export default class SalesPage extends Vue {
  mdiCartArrowRight = mdiCartArrowRight;
}
</script>
