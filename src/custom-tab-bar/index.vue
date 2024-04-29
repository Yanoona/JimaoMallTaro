<template>
  <nut-tabbar v-model="selected" bottom safe-area-inset-bottom placeholder>
    <nut-tabbar-item
      v-for="(item, index) in List"
      :key="index"
      :tab-title="item.title"
      :icon="item.icon"
      @tap="switchTab(index, item.pagePath)"
    >
    </nut-tabbar-item>
  </nut-tabbar>
</template>

<script lang="ts" setup>
import Taro from "@tarojs/taro";
import { useStore } from "vuex";
import { h, ref, computed } from "vue";
import { Home, My, Message, Photograph, Dshop } from "@nutui/icons-vue-taro";

const store = useStore();
const selected = computed(() => store.getters.getSelected);

const List = [
  {
    pagePath: "/pages/index/index",
    title: "首页",
    icon: h(Home),
  },
  {
    pagePath: "/pages/photograph/index",
    title: "视频",
    icon: h(Photograph),
  },
  {
    pagePath: "/pages/dshop/index",
    title: "促销",
    icon: h(Dshop),
  },
  {
    pagePath: "/pages/message/index",
    title: "消息",
    icon: h(Message),
  },
  {
    pagePath: "/pages/my/index",
    title: "我的",
    icon: h(My),
  },
];

const switchTab = (index, url) => {
  setSelected(index);
  Taro.switchTab({ url });
};

const setSelected = (index) => {
  store.dispatch("setSelected", index);
};
</script>

<style></style>
