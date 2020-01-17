<template>
  <section class="vi-auth-layout vh-100 position-relative">
    <v-container class="py-12 fill-height">
      <img
        src="@/assets/img/logo-and-banner.png"
        alt="Golden Penny Logo and Banner"
        class="vi-auth-layout__logo-and-banner"
      />
      <v-layout class="fill-height align-center justify-center justify-sm-end">
        <v-flex
          xs10
          class="white max-width-400 px-4 pb-6 pt-5 pa-sm-10 elevation-10 rounded-2 expand-transition transition-swing"
        >
          <slot />
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class AuthLayout extends Vue {
  created() {
    this.$store.commit('ui/TOGGLE_APP_DRAWER_ENABLED', false);
  }

  destroyed() {
    this.$store.commit('ui/TOGGLE_APP_DRAWER_ENABLED', true);
  }
}
</script>

<style lang="scss" scoped>
.vi-auth-layout {
  // background: url('./../../assets/img/backgrounds/close-up-of-wheat-720x480.jpg')
  background: url('./../../assets/img/backgrounds/man-riding-on-yellow-forklift-1920x1280.jpg')
    no-repeat;
  background-size: cover;

  &__logo-and-banner {
    position: absolute;
    top: 0;
    left: 32px;
    width: 64px;
    height: auto;

    @media #{map-get($display-breakpoints, 'sm-and-up')} {
      left: 64px;
      width: 128px;
    }
  }
}
</style>
