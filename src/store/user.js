/* eslint-disable */
import * as fb from "firebase";

class User {
  constructor(id) {
    this.id = id;
  }
}

export default {
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    registerUser({ commit }, { email, password }) {
      commit("clearError");
      commit("setLoading", true);
      return fb
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          commit("setUser", new User(user.user.uid));
          commit("setLoading", false);
        })
        .catch(er => {
          commit("setLoading", false);
          commit("setError", er.message);
        });
    },
    async loginUser({ commit }, { email, password }) {
      commit("clearError");
      commit("setLoading", true);
      try {
        const user = await fb.auth().signInWithEmailAndPassword(email, password);
        commit("setUser", new User(user.user.uid));
        commit("setLoading", false);
      } catch (er) {
        commit("setLoading", false);
        commit("setError", er.message);
      }
    },
    autoLoginUser({ commit }, payload) {
      commit("setUser", new User(payload.uid));
    },
    logoutUser({ commit }, payload) {
      fb.auth().signOut();
      commit("setUser", null);
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    isUserloggedIn(state) {
      return state.user !== null;
    }
  }
};
