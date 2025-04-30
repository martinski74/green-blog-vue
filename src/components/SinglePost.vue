<template>
  <div class="col-10">
    <h2>{{ post.title }}</h2>
    <BaseButton
      label="Delete"
      color="btn-danger"
      v-if="isLoged"
      @click="$emit('onDelete', post._id)"
    >
    </BaseButton>
    <BaseButton
      label="Edit Post"
      color="btn-info"
      v-if="isLoged"
      @click="$emit('onEdit', post._id)"
    >
    </BaseButton>
    <p>
      {{ limitText(post.body, 400) }}
      <button class="see-more" @click="seeMore">See more...</button>
    </p>
    <small class="font-weight-bold"
      >Author: {{ post.author }} - {{ post.date }}</small
    >
    <span
      ><img
        class="like"
        src="./../assets/like_button.jpg"
        style="width: 55px"
      />{{ post.likeCounter }}</span
    >
    <span class="ml-4"
      >Add Comment <img src="../assets/comment.png" style="width: 25px"
    /></span>
  </div>
</template>

<script>
import BaseButton from './UI/BaseButton.vue';
export default {
  components: {
    BaseButton,
  },
  props: {
    post: {
      type: Object,
      requred: true,
    },
    isLoged: {
      type: Boolean,
      requred: true,
    },
    likeImg: {
      type: String,
      requred: false,
    },
  },

  methods: {
    seeMore() {
      this.$emit('seeMore', this.post._id);
    },
    limitText(value, stringLimit) {
      if (value.length > stringLimit) {
        value = value.substring(0, stringLimit) + '...';
      }
      return value;
    },
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
.see-more {
  border: none;
  background-color: #80bdff;
  box-shadow: 2px 2px 4px #000000;
}
.like {
  width: 50px;
}
</style>
