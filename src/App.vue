<template>
  <div class="main-bg">
    <NavBar />
    <router-view />
    <!-- <nav class="navbar fixed-bottom navbar-light bg-light">
      <a class="navbar-brand" href="#">Fixed bottom</a>
    </nav> -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  methods: {
    ...mapActions(["tryLogin"]),
  },
  created() {
    this.tryLogin();
  },
};
</script>

<style lang="scss">
body {
  background-image: url("./assets/background-img.jpg");
}
.main-bg {
}
</style>
