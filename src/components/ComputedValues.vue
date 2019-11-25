<template>
  <div class="computed">
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
    <AlertBox :alert_msg="reversedMessage">{{ message }}</AlertBox>
  </div>
</template>

<style scoped>
/* scoped 属性をもつ <style> タグを利用するとき、その CSS は現在のコンポーネントの要素にのみ適用されます。*/
/* https://vue-loader-v14.vuejs.org/ja/features/scoped-css.html */
.computed {
  font-weight: bold;
}
</style>

<script>
import AlertBox from "./AlertBox.vue";
export default {
  name: "ComputedValues",
  props: {
    message: String
    // プロパティの型について
    // https://jp.vuejs.org/v2/guide/components-props.html#%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3%E3%81%AE%E5%9E%8B
  },
  // 算出プロパティ(computed)について
  // https://jp.vuejs.org/v2/guide/computed.html
  // methodやwatchでも実現できるが、算出プロパティを使うと、依存する値に応じてキャッシュを用いる事ができる
  // 何度reversedMessageにアクセスしても関数を再び実行する事無く、以前の値を即時返す
  computed: {
    reversedMessage: function() {
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  },
  components: {
    AlertBox
  }
};
</script>
