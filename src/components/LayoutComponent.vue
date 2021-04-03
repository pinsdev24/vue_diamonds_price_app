<template>
  <v-app-bar app color="secondary" dark>
    <v-btn to="/" text>
      <span class="mr-2">Diamonds Prices Predict</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
    <v-spacer />
    <v-btn to="/about" text>
      <span class="mr-2">App Info</span>
      <v-icon>mdi-edit</v-icon>
    </v-btn>
    <v-btn to="/team" text>
      <span class="mr-2">Contact</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "LayoutComponent"
};
</script>

<style scoped></style>
