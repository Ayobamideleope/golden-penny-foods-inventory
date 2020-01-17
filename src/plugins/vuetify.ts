import Vue from 'vue';
import Vuetify from 'vuetify/lib';

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
        tertiary: '#F2E0BD',
        quaternary: '#19191F'
      }
    }
  },

  icons: {
    iconfont: 'mdiSvg'
  }
};

export default new Vuetify({
  ...options
});
