<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create new ad</h1>
        <v-form ref="form" v-model="valid" validation>
          <v-text-field
            name="title"
            label="Add Title"
            type="text"
            required
            v-model="title"
            :rules="[v => !!v || 'Title is required']"
          ></v-text-field>
          <v-textarea
            name="description"
            label="Description"
            type="text"
            multi-line
            v-model="description"
            :rules="[v => !!v || 'Descriptrion is required']"
          ></v-textarea>
        </v-form>
        <v-layout row class="mb3">
          <v-flex xs12>
            <v-btn @click="triggeredInput" color="warning">
              Upload
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
            <input
              ref="input"
              type="file"
              accept="image/*"
              @change="onFileChange"
              style="display:none"
            />
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <img :src="imageSrc" alt="img" height="100" v-if="imageSrc" />
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-switch v-model="promo" color="primary" label="Add to promo?"></v-switch>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn class="success" @click="createAd" :disabled="!valid || !image">Create</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    data() {
        return {
            description: "",
            title: "",
            valid: false,
            promo: false,
            image: null,
            imageSrc: ""
        };
    },
    methods: {
        createAd() {
            if (this.$refs.form.validate() || this.image) {
                const ad = {
                    title: this.title,
                    description: this.description,
                    promo: this.promo,
                    image: this.image
                };
                this.$store
                    .dispatch("createAd", ad)
                    .then(() => {
                        this.$router.push("/list");
                    })
                    .catch(() => {});
            } else {
            }
        },
        triggeredInput() {
            this.$refs.input.click();
        },
        onFileChange(e) {
            let file = e.target.files[0];

            let reader = new FileReader();
            reader.onload = e => {
                this.imageSrc = reader.result;
            };
            reader.readAsDataURL(file);
            this.image = file;
        }
    }
};
</script>
