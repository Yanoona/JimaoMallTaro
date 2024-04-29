<template>
  <view>
    <view id="header" style="width: 100%">
      <nut-row type="flex" justify="center" style="margin-top: 10px">
        <nut-col :span="24">
          <nut-input >
            <template #left>
              <Search2 />
            </template>
            <template #right>
              <nut-button plain type="primary" size="mini">搜索</nut-button>
            </template>
          </nut-input>
        </nut-col>
      </nut-row>
      <nut-row type="flex" justify="center">
        <nut-col :span="23">
          <nut-space>
            <nut-tag round type="primary"> 花卉 </nut-tag>
            <nut-tag round type="primary"> 卫生纸 </nut-tag>
            <nut-tag round type="primary"> 矿泉水 </nut-tag>
            <nut-tag round type="primary"> 抽纸 </nut-tag>
          </nut-space>
        </nut-col>
      </nut-row>
      <nut-row :gutter="10" type="flex" justify="center">
        <nut-col :span="1" style="margin-right: 5px">
          <Shop />
        </nut-col>
        <nut-col :span="13">
          <nut-ellipsis
            direction="end"
            content="测试地址长度的嘟嘟嘟嘟嘟嘟嘟嘟嘟嘟的"
          ></nut-ellipsis>
        </nut-col>
        <nut-col :span="1">
          <Right :size="12" />
        </nut-col>
        <nut-col :span="2">&nbsp;</nut-col>
        <nut-col :span="4">
          <nut-button plain size="mini" type="primary" style="margin-top: -3px;">订单</nut-button>
        </nut-col>
      </nut-row>
    </view>
    <view id="main"></view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Right, Search2, Shop } from "@nutui/icons-vue-taro";
import Taro from "@tarojs/taro";

// const active = ref(0)
</script>

<style>
.content {
  border: 1px solid red;
  height: 100px;
}
</style>
