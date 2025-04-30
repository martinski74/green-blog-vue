<template>
  <div v-if="posts" class="container">
    <div class="row mb-4" v-for="post in posts" :key="post._id">
      <SinglePost
        :post="post"
        :isLoged="isAuthenticated"
        @onDelete="removePost(post._id)"
        @onEdit="editPost(post._id)"
        @seeMore="showDetails"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import SinglePost from './../components/SinglePost.vue';
import swal from 'sweetalert';

export default {
  components: { SinglePost },
  data() {
    return {
      myposts: [],
    };
  },
  methods: {
    ...mapActions(['getPost', 'deletePost']),
    async removePost(id) {
      swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this post!',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          this.deletePost(id);
          this.myposts = this.myposts.filter((post) => post.id != id);
          swal('Poof! Your post has been deleted!', {
            icon: 'success',
          });
        } else {
          swal('Your post is safe!');
          return;
        }
      });
    },
    editPost(id) {
      localStorage.setItem('postId', id);
      this.$router.replace('/edit-post');
      console.log(id);
    },
    showDetails(id) {
      localStorage.setItem('postId', id);
      this.$router.replace('/post-details');
    },
  },
  computed: {
    ...mapState(['posts', 'post']),
    ...mapGetters(['isAuthenticated']),
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
