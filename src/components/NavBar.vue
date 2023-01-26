<template>
  <nav class="navbar fixed-top navbar navbar-expand-lg">
    <a class="navbar-brand" href="#">
      <img src="../assets/logo-img.png" width="50" height="50" alt="" />
    </a>
    <router-link class="navbar-brand" to="/home">My Healthy Blog</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link class="nav-link h4 text-white" to="/home"
            >Home</router-link
          >
        </li>
        <li v-if="isAuthenticated" class="nav-item">
          <router-link to="/create-post" class="nav-link h4 text-white"
            >New Post</router-link
          >
        </li>
      </ul>
    </div>
    <ul class="navbar-nav">
      <li class="nav-item h4">
        <a class="nav-link h4 text-white">
          Hello, {{ getUserName || "Guest" }}!</a
        >
      </li>
      <li v-if="!isAuthenticated" class="nav-item">
        <router-link class="nav-link h4" to="/login">Login</router-link>
      </li>
      <li v-if="!isAuthenticated" class="nav-item">
        <router-link class="nav-link h4" to="/register">Register</router-link>
      </li>
      <li v-if="isAuthenticated" class="nav-item">
        <a @click="logOut" href="#" class="nav-link h4">Logout</a>
      </li>
    </ul>
  </nav>
  <audio controls class="fixed-top mt-5">
    <source src="./../assets/music-relax.mp3" type="audio/mpeg" />
  </audio>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import swal from "sweetalert";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getUserName", "isAuthenticated"]),
  },
  methods: {
    ...mapActions(["logout"]),
    logOut() {
      this.logout();
      swal({
        icon: "success",
        title: "You are Loged Out!",
      });
    },
  },
};
</script>

<style scoped>
.navbar {
  background-image: url("../assets/header-img.jpg");
}
a {
  color: white;
}
</style>
