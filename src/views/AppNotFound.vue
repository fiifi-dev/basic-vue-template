
  <template>
  <v-container class="secondary py-10" fluid>
    <v-card flat class="transparent" dark>
      <v-row align="center" justify="center">
        <v-col
          class="text-center"
          cols="12"
          sm="8"
          md="6"
          lg="4"
          align="center"
        >
          <h1 class="display-4">Oops!</h1>
          <h1 class="my-5"><v-icon class="text-h1">mdi-alert-circle</v-icon></h1>
          <p>The page you're looking for can't be found</p>
          <v-btn color="white" @click="goBack" light>Back</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
