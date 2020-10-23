import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#023e8a",
        secondary: "#023e8a",
        accent: "#a8dadc",
        error: "#e63946",
      },
    },
  },
});
