export default {
  isAuth(state) {
    return !!state.auth && !!state.authData;
  },
  isAuthAndData(state) {
    return !!state.auth && !!state.authData && !!state.data;
  },
  isVerified(state) {
    if (!state.authData) return false;
    return !!state.authData.emailVerified;
  },
  avatarSrc(state) {
    const male = '/img/icons/user/avatar-boy.png';
    const female = '/img/icons/user/avatar-girl.png';

    if (state.authData) {
      if (state.authData.photoURL) {
        return state.authData.photoURL;
      } else if (state.data && state.data.sex) {
        return state.data.sex === 'male' ? male : female;
      }
    }

    return male;
  },
  user(state) {
    if (!state.authData) {
      return null;
    }

    let firstName = '';
    let lastName = '';

    if (state.authData.displayName) {
      const names = state.authData.displayName.split(' ');
      firstName = names[0];
      lastName = names[1];
    }

    return Object.assign({}, state.data, state.authData, {
      firstName,
      lastName
    });
  },
  initFailed(state) {
    return state.initFailed;
  }
};
