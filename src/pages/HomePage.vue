<template>
  <div v-if="posts" class="container">
    <div class="row mb-4" v-for="post in myposts" :key="post.id">
      <SinglePost
        :post="post"
        :isLoged="isAuthenticated"
        @onDelete="removePost(post.id)"
        @onEdit="editPost(post.id)"
        @seeMore="showDetails"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import SinglePost from "./../components/SinglePost.vue";
import swal from "sweetalert";

export default {
  components: { SinglePost },
  data() {
    return {
      myposts: [],
    };
  },
  methods: {
    ...mapActions(["getPost", "deletePost"]),
    async removePost(id) {
      await swal({
        icon: "warning",
        title: "Are sure you want delete this post?",
      });
      await this.deletePost(id);

      this.myposts = this.myposts.filter((post) => post.id != id);
    },
    editPost(id) {
      localStorage.setItem("postId", id);
      this.$router.replace("/edit-post");
      console.log(id);
    },
    showDetails(id) {
      localStorage.setItem("postId", id);
      this.$router.replace("/post-details");
    },
  },
  computed: {
    ...mapState(["posts"]),
    ...mapGetters(["isAuthenticated"]),
  },

  async mounted() {
    await this.getPost();

    this.myposts = this.posts;
  },
};
</script>

<style scoped>
.container {
  background-color: floralwhite;
  opacity: 0.9;
  margin-top: 120px;
  padding: 50px 50px 0 50px;
}
.row {
  border-bottom: 1px solid;
}
.btn-danger {
  margin-right: -170px !important;
}
.btn-info {
  margin-right: -85px !important;
}
img {
  margin-left: 10px;
}
span:hover {
  cursor: pointer;
}
.comments {
  border: 1px solid gray;
  background-color: azure;
  margin-left: 200px;
}
</style>
