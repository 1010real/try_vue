<template>
  <div class="alert">
    <strong>{{ alert_msg }}</strong>
    <slot></slot>
    <!-- もしslotに対するより詳細な説明を知りたければ以下参照 -->
    <!-- https://jp.vuejs.org/v2/guide/components-slots.html -->
  </div>
</template>

<style scoped>
.alert {
  color: blueviolet;
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
