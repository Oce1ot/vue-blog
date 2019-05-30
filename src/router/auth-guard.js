import store from "../store";
export default function(to, from, next) {
  if (store.getters.isUserloggedIn) {
    next();
  } else {
    next("/login?loginError=true");
  }
}
