export default {
  SIGN_IN(state, payload) {
    state.user = payload;
  },
  SIGN_OUT(state) {
    state.user = null;
  },
  SET_AUTH(state, auth) {
    state.auth = auth;
  },
  SET_AUTH_DATA(state, authData) {
    state.authData = authData;
  },
  SET_DATA(state, data) {
    state.data = data;
  },
  CLEAR_AUTH(state) {
    state.auth = null;
  },
  CLEAR_AUTH_DATA(state) {
    state.authData = null;
  },
  CLEAR_DATA(state) {
    state.data = null;
  },
  SET_INIT_FAILED(state) {
    state.initFailed = true;
  }
};
