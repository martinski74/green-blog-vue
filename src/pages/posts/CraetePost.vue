<template>
  <div class="container">
    <form @submit.prevent="handleSubmit">
      <h1 class="text-center">Create post</h1>
      <div class="form-group">
        <label for="title">Title</label>
        <input
          v-model="text"
          type="text"
          class="form-control"
          id="title"
          placeholder="title"
          name="title"
          required
        />
      </div>
      <div class="form-group">
        <label for="text">Text</label>
        <textarea
          v-model="body"
          class="form-control"
          id="text"
          placeholder="Text.."
          name="text"
          required
        >
        </textarea>
      </div>
      <div class="form-group">
        <label for="author">Author</label>
        <input
          v-model="author"
          type="text"
          class="form-control"
          id="author"
          placeholder="author"
          name="author"
          required
        />
      </div>
      <button type="submit" class="btn bg-light">Create</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import swal from "sweetalert";
export default {
  data() {
    return {
      text: "",
      body: "",
      author: "",
    };
  },
  methods: {
    ...mapActions(["createPost"]),
    async handleSubmit() {
      await this.createPost({
        title: this.text,
        body: this.body,
        author: this.author,
        date: new Date().toDateString(),
      });
      swal("Good job!", "Post created", "success");
      await this.$router.replace("/home");
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
