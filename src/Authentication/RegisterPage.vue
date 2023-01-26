<template>
  <div class="container text-white">
    <form @submit.prevent="handleSubmit">
      <h1 class="text-center">Register</h1>
      <div class="form-group">
        <label for="exampleInputEmail">Email Address</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="exampleInputEmail"
          placeholder="Email"
          name="email"
          required
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <!-- <div class="form-group">
        <label for="confirmPassword">Confirm Password</label>
        <input
          type="password"
          class="form-control"
          id="confirmPassword"
          placeholder="Confirm Password"
          name="password"
          required
        />
      </div> -->

      <button type="submit" class="btn bg-light">Submit</button>
    </form>
    <div v-if="errorMessage" class="alert alert-danger mt-1">
      {{ errorMessage }}
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import swal from "sweetalert";
export default {
  data() {
    return {
      email: "",
      password: "",
      isFormValid: true,
      errorMessage: "",
    };
  },
  methods: {
    ...mapActions(["register"]),
    async handleSubmit() {
      this.isFormValid = true;
      if (this.email == "" || !this.email.includes("@") || this.password < 6) {
        this.isFormValid = false;
        return;
      }
      try {
        await this.register({
          email: this.email,
          password: this.password,
        });
        swal({
          icon: "success",
          title: "You are registered!",
        });
        setTimeout(() => {
          this.$router.replace("/login");
        }, 1500);
      } catch (error) {
        this.errorMessage = error;
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.container {
  padding-bottom: 25px;
  border-radius: 15px;
  margin-top: 120px;
  width: 40%;
  background-color: yellowgreen;
  opacity: 0.9;
}
</style>
