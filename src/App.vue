<template>
  <v-app>
    <app-navigation> </app-navigation>
    <v-main class="grey lighten-3 fill-height">
      <router-view></router-view>
    </v-main>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppNavigation from "./components/general/AppNavigation.vue";
import AppFooter from "./components/general/AppFooter";

export default {
  data() {
    return {};
  },
  components: {
    AppNavigation,
    AppFooter
  }
};
</script>
