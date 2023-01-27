<template>
  <div class="container text-white">
    <div class="card-header">Post Detail</div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-3">Title:</div>
            <div class="col-md-9 h2">{{ post?.title }}</div>
          </div>
          <div class="row">
            <div class="col-md-3">Body:</div>
            <div class="col-md-9">{{ post?.body }}</div>
          </div>
          <div class="row">
            <div class="col-md-3">Author:</div>
            <div class="col-md-6 h4">{{ post?.author }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-4">
        <router-link
          to="/home"
          class="btn btn-outline-secondary mr-3"
          style="width: 80px"
          queryParamsHandling="preserve"
        >
          <i class="fa fa-chevron-left"></i> Back
        </router-link>
        <router-link
          v-if="isLoged"
          to="/edit-post"
          class="btn btn-outline-primary"
          style="width: 80px"
        >
          Edit
        </router-link>
      </div>
    </div>
    <div class="alert alert-danger" v-if="errorMessage">
      {{ errorMessage }}
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      errorMessage: "",
      isLoged: "",
    };
  },
  methods: {
    ...mapActions(["getPostById"]),
  },
  computed: {
    ...mapState(["post"]),
  },
  async created() {
    this.isLoged = localStorage.getItem("token");
    const id = localStorage.getItem("postId");
    try {
      await this.getPostById(id);
    } catch (error) {
      this.errorMessage = error;
    }
  },
};
</script>
<style scoped>
.container {
  padding-bottom: 25px;
  border-radius: 15px;
  margin-top: 120px;
  width: 50%;
  background-color: yellowgreen;
  opacity: 0.9;
}
</style>
