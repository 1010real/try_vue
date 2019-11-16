<template>
  <div id="app2">
    <Error :error="error" />
    <p v-bind:class="error_class">Urgentなエラー</p>
    <p>{{ now }}</p>
    <button v-on:click="time">時刻表示</button>
    <div>
      <button v-on:click="shuffle">シャッフル</button>
      <transition-group name="flip-list" tag="ul">
        <li v-bind:key="pref.name" v-for="pref in prefs">
          {{ pref.name }}
        </li>
      </transition-group>
    </div>
    <AlertBox alert_msg="alert">slotタグにはここの値がはいるよ</AlertBox>
  </div>
</template>

<style>
.urgent {
  color: red;
}
.flip-list-move {
  transition: transform 0.5s;
}
</style>

<script>
import Error from "./components/Error.vue";
import AlertBox from "./components/AlertBox.vue";
import _ from "lodash";

export default {
  name: "app2",
  data: () => {
    return {
      error: true,
      error_class: "urgent",
      now: "00:00:00",
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
    time: function() { // time: () => { とするとErrorになる。 thisのスコープが変わるから？
      this.now = new Date().toString();
    },
    shuffle: function() {
      this.prefs = _.shuffle(this.prefs);
    }
  },
  components: {
    Error,
    AlertBox
  }
};
</script>
