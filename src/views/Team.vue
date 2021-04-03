<template>
  <div class="team">
    <h1 class="subheading grey--text">
      Our Team
    </h1>
    <v-container class="my-3">
      <v-layout row wrap>
        <v-flex xs12 md6 sm6 lg4 v-for="person in teams" :key="person.tel">
          <v-card class="text-center ma-3 pa-5">
            <v-responsive class="pt-4">
              <v-avatar size="200" class="grey lighten-2">
                <img :src="person.avatar" alt="1" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subtitle-1 text-uppercase font-weight-bold">
                {{ person.name }}
              </div>
              <div class="grey--text">
                {{ person.email }}
              </div>
              <div
                class="grey--text my-2 font-weight-bold"
                v-for="skill in person.skills"
                :key="skill"
              >
                <li class="text-uppercase">{{ skill }}</li>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="success"
                target="_blank"
                class="mx-auto"
                :href="person.github"
              >
                {{ person.github }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    teams: [
      {
        name: "Pins Pindoh",
        tel: 656176394,
        email: "pinsdev24@gmail.com",
        github: "https://github.com/pinsdev24",
        skills: ["Data Scientist", "Web Developer", "NLP Engeneer"],
        avatar: "/avatars/img.jpg"
      },
      {
        name: "Tchatseu Frank",
        tel: 696812510,
        email: "louenkamfrank@gmail.com",
        github: "https://github.com/francktchatseu",
        skills: ["Data Scientist", "Web Developer", "Mobile Developer"],
        avatar: "/avatars/img2.png"
      }
    ]
  }),
  methods: {}
};
</script>

<style lang="css"></style>
