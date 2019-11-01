import Vue from "vue";
import App from "./App.vue";
import App2 from "./App2.vue";
import store from "./store";

Vue.config.productionTip = false;

// Vue.component("AlertBox", {
//   template: `
//   <div class="alert">
//     <strong>Error!</strong>
//     <slot></slot>
//   </div>
//   `
// });
// 上記のコードはプリコンパイラを必要とする。
// vue-cliのデフォルト設定ではvuejsランタイムビルドのみがバンドルされるので、実行時に以下のようなエラーが出る
// --
// You are using the runtime-only build of Vue where the template compiler is not available. 
// Either pre-compile the templates into render functions, or use the compiler-included build.
// --
// vuejsの完全ビルド(プリコンパイラを含む)はランタイムビルドより30%重いため、含めたくない。
// vueファイルにコンポーネントを別定義し、コンパイルを介して、各コンテナでimportすべし


new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

new Vue({
  el: "#app2",
  render: h => h(App2)
}).$mount("#app2");
