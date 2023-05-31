<!--
 * @Author: Derek Xu
 * @Date: 2023-05-31 17:32:27
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-05-31 18:39:38
 * @FilePath: \xuct-group-purchase-uniapp\src\components\uv-waterfall-flow\uv-waterfall-flow\uv-waterfall-flow.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved. 
-->
<template>
  <view class="ldsy-waterfall-flow">
    <view class="waterfall-flow-item-left">
      <view class="waterfall-flow-item" v-for="item in columnLeft" :key="item.id">
        <view class="item-card">
          <uv-index-good-card
            :item="item"
            :columnType="'left'"
            :pathType="pathType"
            @imgLoad="imgLoad"
            @imgError="imgError"
            @imageClick="clickItem"
          ></uv-index-good-card>
        </view>
      </view>
    </view>
    <view class="waterfall-flow-item-right">
      <view class="waterfall-flow-item" v-for="item in columnRight" :key="item.id">
        <view class="item-card">
          <uv-index-good-card
            :item="item"
            :columnType="'right'"
            :pathType="pathType"
            @imgLoad="imgLoad"
            @imgError="imgError"
            @imageClick="clickItem"
          ></uv-index-good-card>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup name="uv-waterfall-flow">
import { ref, watch, reactive } from 'vue'
import { mathRound, getScreenWidth } from '../common/filters'
import { PushItem } from '../type'
import uvIndexGoodCard from '../uv-index-good-card/uv-index-good-card.vue'

const props = defineProps({
  productList: {
    type: Array<PushItem>,
    default: () => [],
    required: true
  },
  pathType: {
    //TODO不同页面用不同卡片，这个组件只做分发，
    type: String,
    default: 'index',
    required: false
  }
})

const columnLeft = reactive<PushItem[]>([])
const columnRight = reactive<PushItem[]>([])
const leftHight = ref<number>(0)
const rightHight = ref<number>(0)

watch(
  () => props.productList,
  (val) => {
    // 只监听父元素传来的type参数，type变化才会触发
    console.log('type', val)
    distributeItem(val)
  },
  { deep: true }
)

function distributeItem(newValue: any) {
  const allLength = newValue.length
  const currentLength = columnLeft.length + columnRight.length
  const diffLength = allLength - currentLength
  for (let i = 0; i < diffLength; i++) {
    const itemLength = columnLeft.length + columnRight.length
    const item = newValue[itemLength]
    const itemHeight = mathRound((mathRound(item.height, 0) * getScreenWidth() * 0.44) / 750, 0)
    const pushItem = handleItem(item, itemLength, itemHeight)
    calcItem(pushItem, itemHeight + 8 + 32 + 30) //TODO这个是关键的，根据自己的业务去设置，图片的高度（itemHeight）+头部的高度（32）+底部的高度（30）+每一个卡片的margin-bottom（8）
  }
  calcHeight()
}

//TODO处理每一条数据，可以在这里里面做oss图片的大小样式裁剪等等，这个是和页面卡片有关，也可以放到卡片中做
function handleItem(item: PushItem, itemLength: number, itemHeight: number) {
  return {
    id: item.id,
    width: item.width,
    height: itemHeight,
    defaultImage: item.defaultImage,
    imgUrl: item.imgUrl,
    showImg: false,
    showError: false,
    index: itemLength,
    merchantName: item.merchantName,
    name: item.name,
    price: item.price
  }
}

//TODO判断是左列还是右列
function calcItem(pushItem: PushItem, calcHeight: number) {
  const calcVal = leftHight.value > rightHight.value
  if (calcVal) {
    rightHight.value = mathRound(rightHight.value + calcHeight, 0)
    columnRight.push(pushItem)
    return
  }
  leftHight.value = mathRound(leftHight.value + calcHeight, 0)
  columnLeft.push(pushItem)
}
//TODO计算高度
function calcHeight() {
  const temLeft = mathRound(leftHight.value, 0)
  const temRight = mathRound(rightHight.value, 0)
  if (temLeft === temRight) {
    leftHight.value = 0
    rightHight.value = 0
    return
  }
  leftHight.value = temLeft > temRight ? mathRound(temLeft - temRight, 0) : 0
  rightHight.value = temRight > temLeft ? mathRound(temRight - temLeft, 0) : 0
}
//TODO点击回调事件
function clickItem(item: any) {
  console.log(item)
  //this.$emit('clickItem', item)
}
//TODO处理图片加载成功
function imgLoad(data: any) {
  if (data.columnType === 'left') {
    const index = columnLeft.findIndex((p) => p.id === data.item.id)
    if (index > -1) {
      columnLeft[index].showImg = true
    }
  }
  if (data.columnType === 'right') {
    const index = columnRight.findIndex((p) => p.id === data.item.id)
    if (index > -1) {
      columnRight[index].showImg = true
    }
  }
}
//TODO处理图片加载失败
function imgError(data: any) {
  if (data.columnType === 'left') {
    const index = columnLeft.findIndex((p) => p.id === data.item.id)
    if (index > -1) {
      columnLeft[index].showError = true
    }
  }
  if (data.columnType === 'right') {
    const index = columnRight.findIndex((p) => p.id === data.item.id)
    if (index > -1) {
      columnRight[index].showError = true
    }
  }
}
</script>

<style lang="scss" scoped>
.ldsy-waterfall-flow {
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  padding: 10rpx;
  .waterfall-flow-item-left {
    width: calc(50% - 8rpx);
    .waterfall-flow-item {
      width: 100%;
      .item-card {
        width: 100%;
      }
    }
  }
  .waterfall-flow-item-right {
    width: calc(50% - 8rpx);
    .waterfall-flow-item {
      width: 100%;
      .item-card {
        width: 100%;
      }
    }
  }
}
</style>
