<template>
  <div>
    <v-navigation-drawer
      app
      v-model="drawer"
      temporary
      v-if="$vuetify.breakpoint.mobile"
    >
      <v-list class="primary" dark>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title @click="$router.push({ name: 'home' })">
              <span class="overline cursor" v-text="appTitle"> </span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list dense>
        <v-list-item
          link
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          exact
        >
          <v-list-item-content>
            <v-list-item-title class="text-uppercase pl-4">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="white" clipped-left>
      <v-container>
        <v-toolbar flat>
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
            v-if="$vuetify.breakpoint.mobile"
          ></v-app-bar-nav-icon>
          <v-spacer v-if="$vuetify.breakpoint.mobile"></v-spacer>
          <v-toolbar-title
            class="overline mr-16 cursor"
            @click="$router.push({ name: 'home' })"
            v-text="appTitle"
          >
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <template v-if="!$vuetify.breakpoint.mobile">
            <v-toolbar-items>
              <v-btn
                v-for="item in items"
                :key="item.title"
                active-class="primary"
                small
                :to="item.to"
                >{{ item.title }}</v-btn
              >
            </v-toolbar-items>
          </template>
        </v-toolbar>
      </v-container>
    </v-app-bar>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      drawer: null,
      appTitle: "RF and Microwave KNUST",
      items: [{ title: "Home", to: { name: "home" } }]
    };
  }
};
</script>
  
<style lang="scss">
.cursor {
  cursor: pointer;
}
</style>