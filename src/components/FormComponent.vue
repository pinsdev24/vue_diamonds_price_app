<template>
  <v-card class="mx-auto" elevation="2" outlined>
    <v-toolbar color="primary" dark class="text-uppercase"
      >Entrer les information sur Votre diamand</v-toolbar
    >
    <v-card-text>
      <v-form
        ref="form"
        class="m-5"
        v-model="valid"
        lazy-validation
        padding="5"
      >
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="form.carat"
                :rules="[v => !!v || 'le nombre de carat est requis']"
                label="Carat"
                outlined
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="form.depth"
                :rules="[v => !!v || 'la profondeur du diamant est requis']"
                label="Depth"
                outlined
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>

        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="form.table"
                :rules="[v => !!v || 'champ requis']"
                label="Table"
                outlined
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-select
                v-model="form.color"
                :items="[
                  'D (meilleur)',
                  'E',
                  'F',
                  'G',
                  'H',
                  'I',
                  'J (mauvais)'
                ]"
                :rules="[v => !!v || 'la couleur du diamant est requis']"
                label="Color"
                outlined
                required
              ></v-select>
            </v-col>
          </v-row>
        </v-container>

        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-select
                v-model="form.clarity"
                :items="[
                  'IF (meilleur)',
                  'VVS1',
                  'VVS2',
                  'VS1',
                  'VS2',
                  'SI1',
                  'SI2',
                  'I1 (mauvais)'
                ]"
                :rules="[v => !!v || 'la clarté du diamand est requis']"
                label="Clarity"
                outlined
                required
              ></v-select>
            </v-col>

            <v-col cols="12" sm="6">
              <v-select
                v-model="form.cut"
                :items="[
                  'Ideal (meilleur)',
                  'Premium',
                  'Very Good',
                  'Good',
                  'Fair (mauvais)'
                ]"
                :rules="[v => !!v || 'ce champs requis']"
                label="diamant bien taillé ?"
                outlined
                required
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="form.x"
                :rules="[v => !!v || 'champs requis']"
                label="x"
                outlined
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="4">
              <v-text-field
                v-model="form.y"
                :rules="[v => !!v || 'champs requis']"
                label="y"
                outlined
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="form.z"
                :rules="[v => !!v || 'champs requis']"
                label="z"
                outlined
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-btn
          :disabled="!valid"
          block
          large
          color="success"
          class="mr-4"
          @click="estimate"
          :loading="loader"
        >
          Estimate
        </v-btn>
      </v-form>
    </v-card-text>
    <v-dialog
      transition="dialog-top-transition"
      max-width="600"
      v-model="dialog"
    >
      <template v-slot:default="dialog">
        <v-card>
          <v-toolbar color="primary" dark class="text-uppercase"
            >Le Prix de ce diamand peut être</v-toolbar
          >
          <v-card-text>
            <div class="text-h2 pa-12">$ 18 000</div>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn text @click="dialog.value = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        carat: "",
        depth: "",
        table: "",
        cut: "",
        color: "",
        clarity: "",
        x: "",
        y: "",
        z: ""
      },
      loader: false,
      valid: true,
      dialog: false
    };
  },
  methods: {
    estimate() {
      if (this.$refs.form.validate()) {
        this.loader = true;
        this.dialog = true;
        axios
          .post("http://localhost:5000/prediction-api", this.form)
          .then(response => {
            console.log(response);
            this.loader = false;
          })
          .catch(e => console.log(e));
      }
    }
  }
};
</script>

<style lang="css"></style>
