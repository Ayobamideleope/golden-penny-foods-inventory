<template>
  <v-navigation-drawer
    v-if="isEnabled"
    v-model="isShown"
    :mini-variant.sync="isMiniVariant"
    permanent
    bottom
    floating
    app
    class="vi-nav-drawer py-6 px-4 elevation-10 dark"
    width="296px"
    style="background-color: #19191F;"
  >
    <v-layout class="px-2 pb-6" align-center>
      <v-btn
        x-small
        text
        color="white"
        icon
        @click="isMiniVariant = !isMiniVariant"
      >
        <v-icon>{{ isMiniVariant ? mdiMenuRight : mdiMenuLeft }}</v-icon>
      </v-btn>

      <img
        src="@/assets/logo.svg"
        alt="Site Logo"
        style="width: 36px; height: 36px;"
        class="px-2"
      />

      <h1 class="body-1 dark-text--primary">Vision Inventory</h1>

      <img
        src="@/assets/svg/avatar-man.svg"
        alt="Site Logo"
        style="width: 36px; height: 36px;"
      />

      <v-btn text dark icon>
        <v-icon>{{ mdiSettings }}</v-icon>
      </v-btn>
    </v-layout>

    <v-list color="transparent" dark>
      <v-btn large rounded color="secondary" elevation="10" class="mb-4">
        <v-icon left large>{{ mdiPlus }}</v-icon>
        <strong class="ml-3"></strong>Add
      </v-btn>

      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        class="rounded-2 overflow-hidden"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapState, mapGetters, mapMutations } from 'vuex';

import {
  mdiMenuLeft,
  mdiMenuRight,
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
      toggleAppDrawerVariant: 'ui/TOGGLE_APP_DRAWER_VARIANT'
      // togglePersistAppDrawer: 'ui/TOGGLE_PERSIST_APP_DRAWER'
    })
  }
})
export default class VINavDrawer extends Vue {
  [x: string]: any;

  items = [
    { title: 'Dashboard', icon: mdiViewDashboard },
    { title: 'Stocks', icon: mdiStore },
    { title: 'Sales', icon: mdiCartArrowRight }
  ];

  // Icons
  mdiMenuLeft = mdiMenuLeft;
  mdiMenuRight = mdiMenuRight;
  mdiSettings = mdiSettings;
  mdiViewDashboard = mdiViewDashboard;
  mdiPlus = mdiPlus;
  mdiStore = mdiStore;
  mdiCartArrowRight = mdiCartArrowRight;
  appDrawer: any;

  get isEnabled() {
    return this.appDrawer.isEnabled;
  }

  get isShown() {
    return this.appDrawer.isShown;
  }

  set isShown(bool) {
    this.toggleDrawer(bool);
  }

  get isMiniVariant() {
    return this.appDrawer.isMiniVariant;
  }

  set isMiniVariant(bool) {
    this.toggleAppDrawerVariant(bool);
  }

  toggleDrawer(bool) {
    console.log('[toggle-drawer]');
    console.log(bool);
    if (
      bool === false &&
      this.appDrawer.isMiniVariantEnabled &&
      this.$vuetify.breakpoint.smAndUp
    ) {
      this.$nextTick(() => {
        this.$store.dispatch('ui/setAppDrawerToMiniPersistent');
      });
    }

    this.toggleAppDrawer(bool);
  }
}
</script>

<style lang="scss" scoped>
// $border-radius-root: 4px;

.vi-nav-drawer {
  border-top-right-radius: $border-radius-root * 4;
  // border-bottom-right-radius: $border-radius * 4;
}
</style>
