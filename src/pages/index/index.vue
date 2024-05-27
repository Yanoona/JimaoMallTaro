<template>
  <view>
    <view id="header">
      <nut-row type="flex" justify="center">
        <nut-col :span="24">
          <nut-searchbar
              v-model="searchVal"
              :background="'linear-gradient(to right, #cb2d3e, #ef473a)'"
              input-background="#fff"
              :focus-style="{ outline: '1px solid red' }"
          >
            <template #rightout>
              <nut-button plain type="primary">搜索</nut-button>
            </template>
            <template #rightin>
              <Search2/>
            </template>
          </nut-searchbar>
        </nut-col>
      </nut-row>
      <nut-row type="flex" justify="center">
        <nut-col :span="22" style="margin-left: 10px">
          <nut-space :gutter="10">
            <nut-tag round color="#FF9800"> 花卉</nut-tag>
            <nut-tag round color="#FF9800"> 卫生纸</nut-tag>
            <nut-tag round color="#FF9800"> 矿泉水</nut-tag>
            <nut-tag round color="#FF9800"> 抽纸</nut-tag>
          </nut-space>
        </nut-col>
      </nut-row>
      <nut-row :gutter="10" type="flex" justify="center" class="nut-row-top-bottom-spacing">
        <nut-col :span="1" style="margin-top: 1px;margin-right: 5px">
          <Shop size="16px" color="#FFFFFFFF"/>
        </nut-col>
        <nut-col :span="10" style="font-size: 14px">
          <nut-ellipsis
              :rows="1"
              direction="end"
              content="测试地址长度的"
              style="color: white"
          ></nut-ellipsis>
        </nut-col>
        <nut-col :span="1">
          <Right :size="12" color="#FFFFFFFF"/>
        </nut-col>
        <nut-col :span="5">&nbsp;</nut-col>
        <nut-col :span="4">
          <nut-button plain size="mini" type="primary" style="margin-bottom: 10px">订单</nut-button>
        </nut-col>
      </nut-row>
    </view>
    <!--  主内容  -->
    <view id="main" class="nut-row-top-bottom-spacing">
      <!--   菜单排序   -->
      <nut-menu>
        <nut-menu-item v-model="productSelectionVal1" :options="productSelectionValOptions1"/>
        <nut-menu-item v-model="productSelectionVal2" :options="productSelectionValOptions2"
                       @change="onProductSelectionChange"/>
      </nut-menu>
      <!--   商品展示滚动   -->
      <view>
        你哈哈哈哈哈
        你哈哈哈哈哈
        你哈哈哈哈哈
        你哈哈哈哈哈
        你哈哈哈哈哈
        你哈哈哈哈哈
        你哈哈哈哈哈
        你哈哈哈哈哈
        你哈哈哈哈哈

      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import {Right, Search2, Shop} from "@nutui/icons-vue-taro";

import {reactive, ref} from "vue";

const searchVal = ref('')

// 商品筛选菜单
const productSelectionVal1 = ref(0)
const productSelectionVal2 = ref('a')
const productSelectionValOptions1 = ref([
  {text: '全部商品', value: 0},
  {text: '新款商品', value: 1},
  {text: '活动商品', value: 2}
])
const productSelectionValOptions2 = ref([
  {text: '默认排序', value: 'a'},
  {text: '好评排序', value: 'b'},
  {text: '销量排序', value: 'c'}
])
// 商品筛选菜单Change事件
const onProductSelectionChange = (val) => {
  console.log('val', val)
}
</script>

<style>
:root {
  --nut-input-border-bottom: 'none';
  --nut-searchbar-input-height: '45px';
  --nut-menu-bar-line-height: '40px';
}

#header {
  margin-top: 10px;
  background: linear-gradient(to right, #cb2d3e, #ef473a); /* 标准语法 */
}

#main {
  margin-top: 10px;
}

.page-section-spacing {
  display: flex;
}

.nut-row-top-bottom-spacing {
  margin-top: 30px;
}

.nut-list-index {
  margin-top: 20px;
}

.list-item {
  margin-top: 10px;
}
</style>
