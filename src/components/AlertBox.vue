<template>
  <div class="alert">
    <strong>{{ alert_msg }}</strong>
    <slot></slot>
  </div>
</template>

<style scoped>
  .alert {
    color:blueviolet;
  }
</style>

<script>
export default {
  name: "AlertBox",
  props: {
    alert_msg: String
  }
};
</script>
