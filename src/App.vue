<template>
  <v-app>
    <LayoutComponent />
    <v-main class="mt-7">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import LayoutComponent from "./components/LayoutComponent";

export default {
  name: "App",

  components: {
    LayoutComponent
  },

  data: () => ({
    form: {
      name: ""
    }
  })
};
</script>
