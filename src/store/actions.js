import { firebaseAction } from 'vuexfire';

export default {
  async nuxtServerInit({ dispatch, getters }, { app, req }) {
    // console.log('[nuxtServerInit]')
    // if (!getters['user/isAuth']) {
    // return
    // const isUser = await dispatch('user/init')
    // console.log(['userIs', isUser])
    // }
    const isUser = await dispatch('user/checkAuth');
  }
  // ...firebaseAction
};
