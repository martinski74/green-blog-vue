import { createStore } from "vuex";

let timer;
export default createStore({
  state: {
    posts: [],
    post: null,
    // Auth
    email: "",
    userId: null,
    token: null,
  },
  getters: {
    getUserName(state) {
      return state.email;
    },
    isAuthenticated(state) {
      return !!state.token;
    },
  },
  mutations: {
    GET_POSTS: (state, posts) => (state.posts = posts),
    CREATE_POST: (state, post) => state.posts.unshift(post),
    GET_POST: (state, post) => (state.post = post),
    UPDATE_POST: (state, post) => (state.post = post),
    REGISTER_USER: (state, payload) => (
      (state.token = payload.token),
      (state.userId = payload.userId),
      (state.email = payload.email)
    ),
  },
  actions: {
    // Authentication
    logout({ commit }) {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("tokenExpiration");

      clearTimeout(timer);

      commit("REGISTER_USER", {
        token: null,
        email: "",
        userId: null,
      });
    },

    async login({ commit, dispatch }, payload) {
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC-SY4FeeAuSrAWJKN9KU8Hk4iRSaseJAg",
        {
          method: "POST",
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }),
        }
      );
      const data = await res.json();

      if (!res.ok) {
        const error = new Error(data.error.message || "Failed authentication!");
        throw error;
      }
      const expireIn = +data.expiresIn * 1000;
      const expirationDate = new Date().getTime() + expireIn;

      localStorage.setItem("token", data.idToken);
      localStorage.setItem("userId", data.localId);
      localStorage.setItem("tokenExpiration", expirationDate);

      timer = setTimeout(() => {
        dispatch("logout");
      }, expireIn);

      console.log(data);
      commit("REGISTER_USER", {
        token: data.idToken,
        userId: data.localId,
        email: data.email,
      });
      return res;
    },

    tryLogin({ commit, dispatch }) {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const tokenExpiration = localStorage.getItem("tokenExpiration");
      const expiresIn = +tokenExpiration - new Date().getTime();

      if (expiresIn < 0) {
        return;
      }

      timer = setTimeout(() => {
        dispatch("logout");
      }, expiresIn);

      if (token && userId) {
        commit("REGISTER_USER", {
          token: token,
          userId: userId,
          tokenExpirationL: null,
        });
      }
    },
    async register({ commit }, payload) {
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC-SY4FeeAuSrAWJKN9KU8Hk4iRSaseJAg",
        {
          method: "POST",
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        const error = await new Error(
          data.error.message || "Failed authentication!"
        );
        console.log("asaa ", data);
        throw error;
      }
      console.log(data);
      commit("REGISTER_USER", {
        token: data.idToken,
        userId: data.localId,
        tokenExpiration: data.expiresIn,
      });
      return res;
    },
    async getPost({ commit }) {
      const response = await fetch("http://localhost:3000/posts");
      const data = await response.json();
      commit("GET_POSTS", data);
      return response;
    },
    async createPost({ commit }, post) {
      const res = await fetch("http://localhost:3000/posts", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(post),
      });
      const data = await res.json();
      console.log(data);
      commit("CREATE_POST", post);
      return res;
    },
    async deletePost(_, id) {
      const res = await fetch("http://localhost:3000/posts/" + id, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
      });

      console.log("res", res);
      // commit("DELETE_POSTS", id);
    },
    async getPostById({ commit }, id) {
      try {
        const res = await fetch("http://localhost:3000/posts/" + id);
        const data = await res.json();
        commit("GET_POST", data);
        return res;
      } catch (error) {
        throw new Error(error);
      }
    },
    async updatePost({ commit }, data) {
      const res = fetch("http://localhost:3000/posts/" + data.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      commit("UPDATE_POST", data);
      return res;
    },
  },
});
