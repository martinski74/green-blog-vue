import { createStore } from 'vuex';
import { auth } from '../firebase/config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
const APP_URL = process.env.VUE_APP_URL;

export default createStore({
  state: {
    posts: [],
    post: null,
    // Auth
    user: null,
  },
  getters: {
    getUserName(state) {
      return state?.user?.email;
    },
    isAuthenticated(state) {
      return !!state.user;
    },
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAR_USER(state) {
      state.user = null;
    },
    GET_POSTS: (state, posts) => (state.posts = posts),
    CREATE_POST: (state, post) => state.posts.unshift(post),
    GET_POST: (state, post) => (state.post = post),
    UPDATE_POST: (state, post) => (state.post = post),
    DELETE_POST: (state, id) => {
      state.posts = state.posts.filter((post) => post.id !== id);
    },
  },
  actions: {
    // Authentication
    logout({ commit }) {
      signOut(auth);
      commit('CLEAR_USER');
    },

    async login({ commit }, payload) {
      const { email, password } = payload;
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredentials.user.email);

      commit('SET_USER', userCredentials.user);
    },

    async register({ commit }, payload) {
      const { email, password } = payload;

      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      commit('SET_USER', userCredentials.user);
    },

    async getPost({ commit }) {
      const response = await fetch(APP_URL);
      const data = await response.json();

      commit('GET_POSTS', data);
      return response;
    },
    async createPost({ commit }, post) {
      const res = await fetch(APP_URL, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(post),
      });
      const data = await res.json();
      console.log(data);
      commit('CREATE_POST', post);
      return res;
    },
    async deletePost({ commit }, id) {
      const res = await fetch(`${APP_URL}/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'DELETE',
      });

      commit('DELETE_POST', id);
    },
    async getPostById({ commit }, id) {
      try {
        const res = await fetch(`${APP_URL}/${id}`);
        const data = await res.json();
        commit('GET_POST', data);
        return res;
      } catch (error) {
        throw new Error(error);
      }
    },
    async updatePost({ commit }, data) {
      const res = fetch(`${APP_URL}/details/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      commit('UPDATE_POST', data);
      return res;
    },
  },
});
