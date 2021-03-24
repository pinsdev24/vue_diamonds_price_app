<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn href="/" target="_blank" text>
        <span class="mr-2">Diamonds Prices Predict</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn href="/" target="_blank" text>
        <span class="mr-2">About Us</span>
        <v-icon>mdi-edit</v-icon>
      </v-btn>
      <v-btn href="/" target="_blank" text>
        <span class="mr-2">Contact</span>
        <v-icon>mdi-phone</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="mt-7">
      <v-container>
        <form-component />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import FormComponent from "./components/FormComponent.vue";

export default {
  name: "App",

  components: {
    FormComponent
  },

  data: () => ({
    //
  })
};
</script>
