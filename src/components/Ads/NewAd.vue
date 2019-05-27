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
                    <v-text-field
                        name="description"
                        label="Description"
                        type="text"
                        multi-line
                        v-model="description"
                        :rules="[v => !!v || 'Descriptrion is required']"
                    ></v-text-field>
                </v-form>
                <v-layout row class="mb3">
                    <v-flex xs12>
                        <v-btn
                        color="warning"
                        >
                            Upload
                            <v-icon right dark>cloud_upload</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <img src="" alt="img" height="100">
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-switch
                            v-model="promo"
                            color="primary"
                            label="Add to promo?"></v-switch>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-spacer></v-spacer>
                        <v-btn class="success" @click="createAd" :disabled="!valid">Create</v-btn>
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
      description: '',
      title: '',
      valid: false,
      promo: false,
    };
  },
  methods: {
    createAd() {
      if(this.$refs.form.validate()) {
        const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo,
            imageSrc: 'https://www.one4all.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/v/u/vue_1_1.png',
        } 
        this.$store.dispatch('createAd', ad);
     } else {

    }
    },
  },
};
</script>
