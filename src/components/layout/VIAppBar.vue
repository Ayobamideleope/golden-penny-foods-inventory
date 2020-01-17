<template>
  <v-layout
    v-if="isEnabled"
    class="v-i-app-bar px-3 transition-swing quaternary"
    align-center
    justify-space-between
  >
    <v-btn text color="white" class="mr-4" icon @click="toggleDrawer">
      <v-icon>{{ mdiChevronUp }}</v-icon>
    </v-btn>

    <v-btn large rounded elevation="10" class="secondary mb-4" icon>
      <v-icon color="quaternary" large>
        {{ mdiPlus }}
      </v-icon>
    </v-btn>

    <v-btn text color="white" icon>
      <v-icon>{{ mdiMagnify }}</v-icon>
    </v-btn>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapState, mapGetters, mapMutations } from 'vuex';

import {
  mdiChevronUp,
  mdiMagnify,
  mdiSettings,
  mdiViewDashboard,
  mdiPlus,
  mdiStore,
  mdiCartArrowRight
} from '@mdi/js';

@Component({
  computed: {
    ...mapState({
      // @ts-ignore
      appDrawer: state => state.ui.appDrawer
    }),

    ...mapGetters({
      userIsAuth: 'user/isAuth',
      userAvatarSrc: 'user/avatarSrc',
      user: 'user/user'
    })
  },

  methods: {
    ...mapMutations({
      toggleAppDrawer: 'ui/TOGGLE_APP_DRAWER',
      toggleAppDrawerVariant: 'ui/TOGGLE_APP_DRAWER_MINI_VARIANT'
      // togglePersistAppDrawer: 'ui/TOGGLE_PERSIST_APP_DRAWER'
    })
  }
})
export default class VIAppBar extends Vue {
  [x: string]: any;

  items = [
    { title: 'Dashboard', icon: mdiViewDashboard, link: '/dashboard' },
    { title: 'Stocks', icon: mdiStore, link: '/stocks' },
    { title: 'Sales', icon: mdiCartArrowRight, link: '/sales' }
  ];

  // Icons
  mdiChevronUp = mdiChevronUp;
  mdiMagnify = mdiMagnify;
  mdiSettings = mdiSettings;
  mdiViewDashboard = mdiViewDashboard;
  mdiPlus = mdiPlus;
  mdiStore = mdiStore;
  mdiCartArrowRight = mdiCartArrowRight;

  get isEnabled() {
    return this.appDrawer.isEnabled;
  }

  get isShown() {
    return this.appDrawer.isShown;
  }

  set isShown(bool) {
    this.toggleDrawer;
  }

  get isMiniVariant() {
    return this.appDrawer.isMiniVariant;
  }

  set isMiniVariant(bool) {
    this.toggleAppDrawerVariant(bool);
  }

  get isPermanent() {
    return this.appDrawer.isPermanent;
  }

  get isTemporary() {
    return this.appDrawer.isTemporary;
  }

  toggleDrawer() {
    // console.log('[toggle-drawer]');
    // console.log(bool);
    if (this.$vuetify.breakpoint.smAndUp) {
      // console.info('app drawer is being toggled by desktop');

      if (this.isShown && this.isMiniVariant) {
        this.$store.commit('ui/TOGGLE_APP_DRAWER_MINI_VARIANT', false);
      } else if (
        (this.isShown || this.isShown === null) &&
        !this.isMiniVariant
      ) {
        this.$store.commit('ui/TOGGLE_APP_DRAWER_MINI_VARIANT', true);
      } else {
        this.$store.commit(
          'ui/SET_APP_DRAWER',
          this.$store.state.ui.appDrawerFullPersistent
        );
      }
      // this.$nextTick(() => {
      //   this.$store.dispatch('ui/setAppDrawerToMiniPersistent');
      // });
    } else {
      // console.info('app drawer is being toggled by mobile');

      if (this.isShown) {
        this.$store.commit('ui/TOGGLE_APP_DRAWER', false);
      } else {
        this.$store.commit(
          'ui/SET_APP_DRAWER',
          this.$store.state.ui.appDrawerFullTemporary
        );
      }
    }
    // this.toggleAppDrawer(bool);
  }
}
</script>

<style lang="scss" scoped>
.v-i-app-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 48px;
  border-top-right-radius: $border-radius-root * 4;
  border-top-left-radius: $border-radius-root * 4;

  @media #{map-get($display-breakpoints, 'sm-and-up')} {
    opacity: 0;
    pointer-events: none;
    transform: translateY(200%);
  }
}
</style>
