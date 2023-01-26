<template>
  <div class="col-10">
    <h2>{{ post.title }}</h2>
    <button
      v-if="isLoged"
      class="btn btn-danger float-right"
      @click="$emit('onDelete', post.id)"
    >
      Delete
    </button>
    <button
      v-if="isLoged"
      class="btn btn-info float-right"
      @click="$emit('onEdit', post.id)"
    >
      Edit Post
    </button>
    <p>
      {{ post.body }}
      <button @click="seeMore">See more...</button>
    </p>
    <small class="font-weight-bold"
      >Author: {{ post.author }} - {{ post.date }}</small
    >
    <span
      ><img src="../assets/new_facebook_like_640.png" width="60px" />{{
        post.likeCounter
      }}</span
    >
    <span class="ml-4"
      >Add Comment <img src="../assets/comment.png" width="25px"
    /></span>
    <!-- <div *ngIf="comment" class="comments">
          <p *ngFor="let com of comment" class="small">{ com.body }</p>
        </div> -->
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      requred: true,
    },
    isLoged: {
      type: Boolean,
      requred: true,
    },
  },

  methods: {
    // limitText(value, stringLimit) {
    //   if (value.length > stringLimit) {
    //     value = value.substring(0, stringLimit) + "...";
    //   }
    //   return value;
    // },
  },
};
</script>

<style scoped>
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
