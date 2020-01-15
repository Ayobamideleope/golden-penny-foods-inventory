import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { preset } from 'vue-cli-plugin-vuetify-preset-reply/preset';

Vue.use(Vuetify);

const options = {
  defaultAssets: false,

  treeShake: true,

  theme: {
    options: {
      customProperties: true
    },

    themes: {
      light: {
        // primary: '#344955',
        primary: '#D9B97E',
        secondary: '#F28322',
        accent: '#A3BF3F',
        tertiary: '#F2E0BD'
      }
    }
  },

  icons: {
    iconfont: 'mdiSvg'
  }
};

export default new Vuetify({
  preset,

  ...options
});
