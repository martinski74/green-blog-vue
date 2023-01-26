<template>
  <div>
    <h1 class="first text-center text-white">Welcome to my blog</h1>
    <div class="container text-white">
      <form @submit.prevent="hendleSubmit">
        <h1 class="text-center">Login</h1>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="email"
            placeholder="Email"
            name="email"
            required
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            required
          />
        </div>

        <button type="submit" class="btn bg-light">Submit</button>
      </form>
      <div v-if="errorMessage" class="alert alert-danger mt-1">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import swal from "sweetalert";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      isFormValid: true,
      errorMessage: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
    async hendleSubmit() {
      try {
        this.isFormValid = true;
        if (
          this.email == "" ||
          !this.email.includes("@") ||
          this.password < 6
        ) {
          this.isFormValid = false;
          return;
        }
        await this.login({
          email: this.email,
          password: this.password,
        });
        swal({
          icon: "success",
          title: "You are Loged In!!",
        });
        setTimeout(() => {
          this.$router.replace("/home");
        }, 1000);
      } catch (error) {
        this.errorMessage = error;
      }
    },
  },
};
</script>

<style scoped>
.container {
  padding-bottom: 25px;
  border-radius: 15px;
  margin: auto;
  width: 40%;
  background-color: yellowgreen;
  opacity: 0.9;
}
.first {
  margin-top: 120px;
}
</style>
