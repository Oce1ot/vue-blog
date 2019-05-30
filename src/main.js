import "@babel/polyfill";
import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/index";
import * as fb from "firebase/app";
import BuyModalComponent from "./components/Shared/ByModal.vue";
Vue.config.productionTip = false;
Vue.component("app-buy-modal", BuyModalComponent);

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    const firebaseConfig = {
      apiKey: "AIzaSyD1TMQgO3pvJIbCRbH5Arwj2paUCnbbFiM",
      authDomain: "its-ads-67a6d.firebaseapp.com",
      databaseURL: "https://its-ads-67a6d.firebaseio.com",
      projectId: "its-ads-67a6d",
      storageBucket: "its-ads-67a6d.appspot.com",
      messagingSenderId: "915790165662",
      appId: "1:915790165662:web:384997cbe8cf2a0e"
    };
    fb.initializeApp(firebaseConfig);
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch("autoLoginUser", user);
      }
    });
    this.$store.dispatch("fetchAds");
  }
}).$mount("#app");
