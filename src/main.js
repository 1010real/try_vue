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

var data = { a: 1 };

// Object.freeze(data);
// Object.freeze()を使用することで、dataの変更をVueインスタンスが更新を検知しなくすることができる
// 検知できないので更新も無効

var vm = new Vue({
  el: "#app2",
  render: h => h(App2),
  data: data
}).$mount("#app2");

console.log(vm.a == data.a); // true

vm.a = 2;
console.log(data.a); // 2

data.a = 3;
console.log(vm.a); // 3

// ↑の場合、data.aを変更するたびにvueの再レンダリングが起きる

data.b = "a";
// ただし、↑の場合、Vueインスタンス定義時にbが存在しなかったため、再レンダリングは起きない
//（インスタンスが作成されたときに存在していた場合にのみリアクティブ）

// Vueインスタンスは便利なプロパティやメソッドを持っていて、ユーザ定義のプロパティと区別するため頭に$がついている
// 一覧は→ https://jp.vuejs.org/v2/api/#%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3
// 以下例
console.log(vm.$data === data); // => true
console.log(vm.$el === document.getElementById("app2")); // => true

// $watchは変更の監視。aが変更されるたびに呼び出されるコールバックを定義できる
vm.$watch("a", function(newVal, oldVal) {
  console.log(`vm.a is change to ${newVal} from ${oldVal}`);
});
vm.a = 4;
