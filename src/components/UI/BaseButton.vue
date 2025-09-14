<template>
  <button :class="className" @click="action">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      reqired: true,
    },
    action: {
      type: Function,
      reqired: true,
    },
    color: {
      type: String,
      reqired: false,
    },
  },
  data() {
    return {
      className: `btn ${this.color} float-right`,
    };
  },
};
</script>

<style></style>
