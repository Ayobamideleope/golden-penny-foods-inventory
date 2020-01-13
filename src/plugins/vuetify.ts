import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { preset } from 'vue-cli-plugin-vuetify-preset-reply';

Vue.use(Vuetify);

const options = {
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {}
    }
  }
};

export default new Vuetify({
  preset,

  ...options
});
