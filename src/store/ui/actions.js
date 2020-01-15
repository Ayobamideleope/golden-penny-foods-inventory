export default {
  setAppDrawerToMiniPersistent({ state, commit }) {
    console.log('[store/ui] setting app-drawer mini persistent');

    commit('SET_APP_DRAWER', state.appDrawerMiniPersistent);
  },
  setAppDrawerToFullPersistent({ state, commit }) {
    // console.log('[store/ui] setting app-drawer mini persistent')

    commit('SET_APP_DRAWER', state.appDrawerFullPersistent);
  }
};
