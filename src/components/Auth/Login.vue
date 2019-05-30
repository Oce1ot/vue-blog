<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tooltip bottom>
              <v-btn icon large target="_blank" slot="activator">
                <v-icon large>code</v-icon>
              </v-btn>
              <span>Source</span>
            </v-tooltip>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" validation>
              <v-text-field
                prepend-icon="person"
                name="email"
                label="Email"
                type="email"
                v-model="email"
                :rules="emailRules"
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="password"
                counter="6"
                label="Password"
                id="password"
                type="password"
                v-model="password"
                :rules="passwordRules"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="onSubmit" :loading="loading" :disabled="!valid || loading">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      valid: false,
      emailRules: [v => !!v || 'E-mail is required', v => /.+@.+/.test(v) || 'E-mail must be valid'],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length <= 6) || 'Password must be less than 6 characters',
      ],
    };
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password,
        };

        this.$store.dispatch('loginUser', user)
          .then(() => this.$router.push('/'));
      } else {
        // console.log('user log err');
      }
    },
  },
  computed: {
    loading() {
      return this.$store.getters.loading
    }
  }
};
</script>
