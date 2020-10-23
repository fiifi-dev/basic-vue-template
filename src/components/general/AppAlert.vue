<template>
  <v-card
    :color="type"
    class="pa-2 d-flex flex-row justify-space-between"
    dark
  >
    <div>
      <v-icon>{{ icon }}</v-icon>
    </div>
    <div class="px-2">
      {{ message }}
    </div>
    <div>
      <v-btn icon x-small @click="$emit('close')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      icon: "mdi-check-circle",
      color: "success"
    };
  },
  props: {
    message: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "success"
    }
  },
  watch: {
    type(val) {
      if (val === "success") {
        this.icon = "mdi-check-circle";
        this.color = "success";
      } else if (val === "error") {
        this.icon = "mdi-alert-circle";
        this.color = "error";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>