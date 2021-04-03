<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md="6">
      <v-card class="mx-auto" elevation="2" outlined>
        <v-toolbar color="secondary" dark class="text-uppercase"
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
                    validate-on-blur
                    :rules="[
                      v => !!v || 'le nombre de carat est requis',
                      v => /^[0-9.]+$/.test(v) || 'la valeur doit être un réel'
                    ]"
                    label="Carat"
                    outlined
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.depth"
                    validate-on-blur
                    :rules="[
                      v => !!v || 'la profondeur du diamant est requis',
                      v => /^[0-9.]+$/.test(v) || 'la valeur doit être un réel'
                    ]"
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
                    :rules="[
                      v => !!v || 'champ requis',
                      v => /^[0-9.]+$/.test(v) || 'la valeur doit être un réel'
                    ]"
                    label="Table"
                    validate-on-blur
                    outlined
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-select
                    v-model="col"
                    :items="colors"
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
                    v-model="cla"
                    :items="clarities"
                    :rules="[v => !!v || 'la clarté du diamand est requis']"
                    label="Clarity"
                    outlined
                    required
                  ></v-select>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-select
                    v-model="cu"
                    :items="cuts"
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
                    validate-on-blur
                    :rules="[
                      v => !!v || 'champs requis',
                      v => /^[0-9.]+$/.test(v) || 'la valeur doit être un réel'
                    ]"
                    label="x"
                    outlined
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="4">
                  <v-text-field
                    v-model="form.y"
                    validate-on-blur
                    :rules="[
                      v => !!v || 'champs requis',
                      v => /^[0-9.]+$/.test(v) || 'la valeur doit être un réel'
                    ]"
                    label="y"
                    outlined
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-text-field
                    v-model="form.z"
                    validate-on-blur
                    :rules="[
                      v => !!v || 'champs requis',
                      v => /^[0-9.]+$/.test(v) || 'la valeur doit être un réel'
                    ]"
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
              color="primary"
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
                >Le Prix de ce diamand peut être estimé à</v-toolbar
              >
              <v-card-text>
                <div class="text-h2 pa-12">$ {{ prediction }}</div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn text @click="dialog.value = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import apiClient from "../services/api";
export default {
  data() {
    return {
      form: {
        carat: null,
        depth: null,
        table: null,
        cut: null,
        color: null,
        clarity: null,
        x: null,
        y: null,
        z: null
      },
      loader: false,
      valid: true,
      dialog: false,
      cuts: [
        "Fair (mauvais)",
        "Good",
        "Very Good",
        "Premium",
        "Ideal (meilleur)"
      ],
      clarities: [
        "IF (meilleur)",
        "VVS1",
        "VVS2",
        "VS1",
        "VS2",
        "SI1",
        "SI2",
        "I1 (mauvais)"
      ],
      colors: ["D (meilleur)", "E", "F", "G", "H", "I", "J (mauvais)"],
      col: "",
      cla: "",
      cu: "",
      prediction: ""
    };
  },
  methods: {
    estimate() {
      if (this.$refs.form.validate()) {
        this.loader = true;
        apiClient
          .post("prediction", this.form)
          .then(response => {
            this.prediction = response.data.predict;
            this.dialog = true;
            this.loader = false;
            this.initForm();
          })
          .catch(e => console.log(e));
      }
    },
    initForm() {
      (this.form.carat = ""),
        (this.form.depth = ""),
        (this.form.cut = ""),
        (this.form.clarity = ""),
        (this.form.x = ""),
        (this.form.y = ""),
        (this.form.z = ""),
        (this.form.color = ""),
        (this.form.table = "");
    }
  },
  watch: {
    col(val) {
      this.form.color = this.colors.indexOf(val) + 1;
    },
    cla(val) {
      this.form.clarity = this.clarities.indexOf(val) + 1;
    },
    cu(val) {
      this.form.cut = this.cuts.indexOf(val) + 1;
    }
  }
};
</script>

<style lang="css"></style>
