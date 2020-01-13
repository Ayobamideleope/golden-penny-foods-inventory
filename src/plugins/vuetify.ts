import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { preset } from 'vue-cli-plugin-vuetify-preset-reply/preset';

Vue.use(Vuetify);

const options = {
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#344955',
        secondary: '#F9AA33',
        tertiary: '#232F34',
        quaternary: '#4A6572'
      }
    }
  }
};

export default new Vuetify({
  preset,

  ...options
});
