<template>
  <v-navigation-drawer
    v-if="isEnabled"
    v-model="isShown"
    :mini-variant.sync="isMiniVariant"
    :temporary="isTemporary"
    fixed
    bottom
    floating
    app
    class="vi-nav-drawer quaternary pb-6 px-4 elevation-10 dark"
    :width="296"
    :mobile-break-point="600"
  >
    <v-layout column fill-height justify-start>
      <div>
        <v-layout class="px-2 pb-8" align-center>
          <img
            src="@/assets/img/logo-and-banner.png"
            alt="Site Logo"
            :style="{ width: isMiniVariant ? '40px' : '48px', height: 'auto' }"
            class="mr-2 transition-swing"
          />

          <h1 class="ml-4 title dark-text--secondary">
            Golden Penny
          </h1>
        </v-layout>

        <v-list color="transparent" dark>
          <v-btn
            large
            rounded
            elevation="10"
            class="secondary mb-4"
            :icon="isMiniVariant"
          >
            <v-icon color="quaternary" :left="!isMiniVariant" large>
              {{ mdiPlus }}
            </v-icon>
            <span v-show="!isMiniVariant" class="ml-3">Add</span>
          </v-btn>

          <v-list-item
            v-for="item in items"
            :key="item.title"
            class="vi-nav-drawer__nav-link rounded-2 overflow-hidden"
            link
            :to="item.link"
            exact
            exact-active-class="vi-nav-drawer__nav-link--active secondary--text"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>

      <v-spacer />

      <div class="flex-grow-0 px-2">
        <v-layout align-center>
          <img
            src="@/assets/svg/avatar-man.svg"
            alt="Site Logo"
            style="width: 36px; height: 36px;"
            class="d-inline-block"
          />
          <span class="ml-4 text--secondary">Admin Name</span>
        </v-layout>

        <v-layout align-center>
          <v-btn text color="white" class="mr-4" icon @click="toggleDrawer">
            <v-icon>{{
              isMiniVariant ? mdiChevronRight : mdiChevronLeft
            }}</v-icon>
          </v-btn>

          <v-btn text color="white" icon>
            <v-icon>{{ mdiMagnify }}</v-icon>
          </v-btn>

          <v-spacer />

          <v-btn text dark icon>
            <v-icon>{{ mdiSettings }}</v-icon>
          </v-btn>
        </v-layout>
      </div>
    </v-layout>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapState, mapGetters, mapMutations } from 'vuex';

import {
  mdiChevronLeft,
  mdiChevronRight,
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
export default class VINavDrawer extends Vue {
  [x: string]: any;

  items = [
    { title: 'Dashboard', icon: mdiViewDashboard, link: '/dashboard' },
    { title: 'Stocks', icon: mdiStore, link: '/stocks' },
    { title: 'Sales', icon: mdiCartArrowRight, link: '/sales' }
  ];

  // Icons
  mdiChevronLeft = mdiChevronLeft;
  mdiChevronRight = mdiChevronRight;
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
        this.$store.commit('ui/sTOGGLE_APP_DRAWER', false);
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
// $border-radius-root: 4px;

.vi-nav-drawer {
  border-top-right-radius: $border-radius-root * 4;

  &__nav-link {
    &--active {
      &::before {
        background: transparent;
      }
    }
  }
}
</style>
