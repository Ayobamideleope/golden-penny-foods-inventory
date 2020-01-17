// @ts-check
// @ts-ignore
import { auth as firebaseAuth, firestore } from '@/services/firebase-init';
// import { auth as firebaseAuth, firestore } from '../../services/firebase-init'
// import { firebaseAction } from 'vuexfire';

/* export default {
  async checkAuth({ dispatch, getters }) {
    // console.log('checking user')

    if (getters.isAuth) {
      return true;
    }

    // @ts-ignore
    if (process.client) {
      return false;
    }

    return await dispatch('init');
  },

  async checkData({ state, dispatch, getters }) {
    // console.log('checking user data')

    if (state.data) {
      return true;
    }

    // @ts-ignore
    // if (process.server) {
    //   await this.$axios({
    //   method: 'post',
    //   url: '/users/getOne'
    //   data: {
    //     id: state.authData.localId
    //   }
    // })
    // }

    try {
      await dispatch(
        'setDataRef2',
        firestore.collection('users').doc(state.authData.localId)
      );

      return getters.isAuthAndData;
    } catch (error) {
      // console.error(error)
      return false;
    }
  },
  async init({ dispatch, commit }) {
    // console.log('initing user')
    const refreshToken = this.$cookies.get('nc_a_rt');
    // console.info('refToken', refreshToken)

    if (!refreshToken) {
      dispatch('signOut');
      return false;
    }

    try {
      const { data: user } = await this.$axios({
        method: 'post',
        url: 'https://us-central1-nysc-chat.cloudfunctions.net/rest/api/init',
        data: {
          refreshToken
        }
      });
      // console.info('user', user)
      dispatch('save', user);
      dispatch(
        'setDataRef2',
        firestore.collection('users').doc(user.authData.localId)
      );
      // console.info('save user')
      return true;
    } catch (error) {
      if (error.response && error.response.data) {
        // console.error('[user/init] Error fetching user')
        // console.error(error.response.data)
      } else {
        // console.error('[user/init] Error fetching user')
        // console.error(error)
      }

      commit('SET_INIT_FAILED', true);
      dispatch('signOut');
      return false;
    }
  },

  setDataRef: firebaseAction(({ bindFirebaseRef, commit }, ref) => {
    return bindFirebaseRef('data', ref)
      .then(result => {
        // console.log(result)
        commit('SET_FIREBASE_AUTH_DATA_READY_STATE', true, { root: true });
      })
      .catch(error => {
        // console.info('[set-user-data] error')
        // console.error(error)
      });
  }),

  setDataRef2({ commit }, ref) {
    return ref
      .get()
      .then(doc => {
        // console.log(doc)
        if (doc.exists) {
          commit('SET_DATA', doc.data());
        } else {
          // console.error(
          //   '[set-user-data] UserData appears not to be created yet'
          // )
          commit('SET_DATA', {});
        }
        commit('SET_FIREBASE_AUTH_DATA_READY_STATE', true, { root: true });
      })
      .catch(error => {
        // console.info('[setUserData error]')
        // console.error(error)
      });
  },

  save({ dispatch, commit }, { auth, authData, data }) {
    dispatch('saveAuth', auth);
    commit('SET_AUTH_DATA', authData);
    commit('SET_DATA', data);
    commit('ui/TOGGLE_APP_DRAWER_VARIANT_ENABLED', true, { root: true });
    commit('ui/TOGGLE_APP_DRAWER_VARIANT', true, { root: true });
    commit('ui/TOGGLE_APP_DRAWER', true, { root: true });
  },

  async initFromFirebaseAuth({ dispatch, commit, rootDispatch }, user) {
    // dispatch('users/getOne', user.uid)
    await dispatch('saveAuth', {
      refreshToken: user.h.a,
      idToken: user.h.b,
      expiresIn: user.h.c
    });
    commit('SET_AUTH_DATA', {
      localId: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      validSince: user.metadata.creationTime
    });
    // commit('SET_DATA', {})
    await dispatch('setDataRef2', firestore.collection('users').doc(user.uid));

    dispatch('ui/setAppDrawerToMiniPersistent', null, { root: true });
  },

  saveAuth({ commit, dispatch }, auth) {
    // vue-persist show save  to local storage
    commit('SET_AUTH', {
      idToken: auth.idToken,
      expiresIn: new Date().getTime() + Number.parseInt(auth.expiresIn) * 1000,
      refreshToken: auth.refreshToken
    });
    dispatch('saveAuthToCookies', auth);
  },

  saveAuthToCookies(context, auth) {
    // this.$cookies.set('nc_a_idt', auth.idToken, {
    //   maxAge: auth.expiresIn
    // })
    this.$cookies.set('nc_a_idt', auth.idToken, {
      httpOnly: true
    });
    this.$cookies.set('nc_a_rt', auth.refreshToken, {
      // set maxAge to 3 months
      maxAge: 7776000,
      httpOnly: true
    });
  },

  signOut(
    { commit, dispatch },
    { clearCookies, redirectToSignIn } = {
      clearCookies: false,
      redirectToSignIn: false
    }
  ) {
    console.log('signing user out');
    dispatch('clearAuth', { clearCookies });
    commit('CLEAR_AUTH_DATA');
    commit('CLEAR_DATA');
    firebaseAuth.signOut();

    if (redirectToSignIn) {
      this.$router.push('/signin');
    }
  },

  clearAuth({ commit, dispatch }, { clearCookies } = { clearCookies: false }) {
    commit('CLEAR_AUTH');
    if (clearCookies) {
      dispatch('clearAuthFromCookies');
    }
  },

  clearAuthFromCookies() {
    console.info('removing cookies');
    this.$cookies.remove('nc_a_idt');
    this.$cookies.remove('nc_a_rt');
  },

  sendEmailVerification({ state }, { force = false, continueUrl = null }) {
    if (!force) {
      if (state.authData.emailVerified) {
        return;
      }
    }
    return firebaseAuth.currentUser.sendEmailVerification();
  }
}; */

// console.log(2 + 2)
