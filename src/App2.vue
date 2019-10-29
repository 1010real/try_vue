<template>
  <div id="app2">
    <Error :error=error />
  </div>
</template>

<script>
import Error from "./components/Error.vue";

export default {
  name: "app2",
  data() {
    return {
      error: true
    }
  },
  components: {
    Error
  }
};
</script>
