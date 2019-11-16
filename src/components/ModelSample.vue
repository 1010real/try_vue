<template>
  <div>
    <p>{{ input_msg }}</p>
    <input v-model="input_msg" />
  </div>
</template>

<script>
export default {
  name: "ModelSample",
  data: () => {
    return {
      input_msg: "初期値"
    };
  }
};
</script>
