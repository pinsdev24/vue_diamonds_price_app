<template>
  <div>
    <v-navigation-drawer app v-model="drawer" overlay-opacity="">
      <v-list shaped>
      <v-subheader>ML DIAMONDS</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
              <router-link :to="item.link" class="text-decoration-none text--grey">
                <v-list-item-title class="text-uppercase" v-text="item.text"></v-list-item-title>
              </router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="secondary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-btn to="/" text>
        <span class="mr-2">Diamonds Prices Predict</span>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "LayoutComponent",
  data() {
    return {
      drawer: false,
      selectedItem: 1,
      items: [
        { text: 'Home', icon: 'mdi-home', link: "/" },
        { text: 'About App', icon: 'mdi-file-outline', link: "/about" },
        { text: 'Our Team', icon: 'mdi-account-multiple-outline', link: "/team" },
      ],
    }
  },
};
</script>

<style scoped></style>
