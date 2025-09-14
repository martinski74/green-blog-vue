<template>
  <div class="container text-white mt-5">
    <form @submit.prevent="handleEdit">
      <h1 class="text-center">Edit post</h1>
      <div class="form-group">
        <label for="title">Title</label>
        <input
          v-model="mypost.title"
          type="text"
          formControlName="title"
          class="form-control"
          id="title"
          placeholder="title"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="body">Text</label>
        <textarea
          v-model="mypost.body"
          formControlName="body"
          class="form-control"
          id="body"
          placeholder="Text.."
          name="body"
        >
        </textarea>
      </div>
      <div class="form-group">
        <label for="author">Author</label>
        <input
          v-model="mypost.author"
          type="text"
          formControlName="author"
          class="form-control"
          id="author"
          placeholder="author"
          name="author"
        />
      </div>
      <button type="submit" class="btn bg-light">Edit</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import swal from 'sweetalert';

export default {
  data() {
    return {
      mypost: {},
    };
  },
  methods: {
    ...mapActions(['getPostById', 'updatePost']),
    async handleEdit() {
      const id = localStorage.getItem('postId');
      const formData = {
        id: id,
        title: this.mypost.title,
        body: this.mypost.body,
        author: this.mypost.author,
      };
      if (!formData) {
        throw new Error('Something went wrong!');
      }
      await this.updatePost(formData);
      localStorage.removeItem('postId');
      swal('Good job!', 'Successfully edited!', 'success');
      this.$router.push('/home');
    },
  },
  computed: {
    ...mapState(['post']),
  },

  async created() {
    const id = localStorage.getItem('postId');
    debugger;
    await this.getPostById(id);
    this.mypost = this.post;
    console.log(id);
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
form {
  margin-top: 100px;
}
</style>
