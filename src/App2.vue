<template>
  <div id="app2">
    <Error :error="error" />
    <p v-bind:class="error_class">Urgentなエラー</p>
    <p>{{ now }}</p>
    <p>一時間後は{{ new Date(allmillisecond + 3600000).toString() }}</p>
    <!-- Mustache構文内 {{ }} やディレクティブの引数に渡す値はJavascript式をサポートする。詳細は↓ -->
    <!-- https://jp.vuejs.org/v2/guide/syntax.html#JavaScript-%E5%BC%8F%E3%81%AE%E4%BD%BF%E7%94%A8 -->
    <button v-on:click="time">時刻表示</button>
    <!-- v-on, v-bind, v-forは、ディレクティブ（"指令"の意味）と呼ばれる -->
    <!-- v-onは"@"で置き換え可能 例えば、onclickは @click="xxxx" と書ける -->
    <!-- v-bindは省略可能 例えば、keyをバインドしたければ :key="xxxx" と書ける-->
    <!-- ディレクティブ一覧は → https://jp.vuejs.org/v2/api/#%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%86%E3%82%A3%E3%83%96 -->
    <!-- v-on,v-bindの省略について -> https://jp.vuejs.org/v2/guide/syntax.html#%E7%9C%81%E7%95%A5%E8%A8%98%E6%B3%95 -->
    <div>
      <button v-on:click="shuffle">シャッフル</button>
      <transition-group name="flip-list" tag="ul">
        <li v-bind:key="pref.name" v-for="pref in prefs">
          {{ pref.name }}
        </li>
        <!-- keyは特別な属性。強制的にレンダリングを矯正したり、アニメーショントリガさせたい場合にも使用できる -->
        <!-- 詳しくは → https://jp.vuejs.org/v2/api/#%E7%89%B9%E5%88%A5%E3%81%AA%E5%B1%9E%E6%80%A7 -->
      </transition-group>
      <!-- transition-groupやslotは組み込みのコンポーネントで便利なプロパティやイベントが定義されている -->
      <!-- 組み込みコンポーネント一覧は → https://jp.vuejs.org/v2/api/#%E7%B5%84%E3%81%BF%E8%BE%BC%E3%81%BF%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88 -->
    </div>
    <AlertBox alert_msg="alert">slotタグにはここの値がはいるよ</AlertBox>
    <ModelSample />
  </div>
</template>

<style>
.urgent {
  color: red;
}
.flip-list-move {
  transition: transform 0.5s;
}
/* sassで書かせてよ！って場合は以下参照 */
/* https://vue-loader-v14.vuejs.org/ja/configurations/pre-processors.html */
</style>

<script>
import Error from "./components/Error.vue";
import AlertBox from "./components/AlertBox.vue";
import ModelSample from "./components/ModelSample.vue";
import _ from "lodash";

export default {
  name: "app2",
  data: () => {
    return {
      error: true,
      error_class: "urgent",
      now: new Date().toString(),
      allmillisecond: new Date().getTime(),
      prefs: [
        { name: "北海道" },
        { name: "北海道2" },
        { name: "北海道3" },
        { name: "北海道4" },
        { name: "北海道5" }
      ],
      alert: "やべえ"
    };
  },
  methods: {
    // ↓ time: () => { とするとErrorになる。 thisのスコープが変わるから？
    time: function() {
      this.now = new Date().toString();
      this.allmillisecond = new Date().getTime();
    },
    shuffle: function() {
      this.prefs = _.shuffle(this.prefs);
    }
  },
  components: {
    Error,
    AlertBox,
    ModelSample
  }
};
// .vueファイルはvue-loaderによって解釈され、プレーンなJavascriptモジュールに変換される
// そもそも.vueファイルって、どう書くの？どう処理されているの？は以下参照
// https://vue-loader-v14.vuejs.org/ja/start/spec.html
</script>
