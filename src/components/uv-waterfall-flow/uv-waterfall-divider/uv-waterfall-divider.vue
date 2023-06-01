<!--
 * @Author: Derek Xu
 * @Date: 2023-06-01 14:01:21
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-06-01 14:26:37
 * @FilePath: \xuct-group-purchase-uniapp\src\components\uv-waterfall-flow\uv-waterfall-divider\uv-waterfall-divider.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved. 
-->
<template>
  <view class="uv-waterfall-divider">
    <view class="uv-waterfall-divider__line" :style="{ background: lineColor, width }"></view>
    <view class="uv-waterfall-divider__text" :style="{ backgroundColor }">
      <slot></slot>
    </view>
  </view>
</template>
<script lang="ts" setup>
/**
 * @description 分割符组件，区隔内容的分割线
 * @property {String} backgroundColor 背景颜色，默认#fff
 * @property {String, Array} color 线条颜色，Array 下当渐变色处理
 * @property {String} width 线条宽度
 */
import { computed } from 'vue'
import { isArray } from '../common/utils'
const props = defineProps({
  backgroundColor: {
    type: String,
    default: 'rgba(245,245,245,1)'
  },
  color: {
    type: [String, Array],
    default: '#dcdfe6'
  },
  width: {
    type: String,
    default: '100%'
  }
})
const lineColor = computed(() => {
  if (isArray(props.color)) {
    const [a, b] = props.color || []
    return `linear-gradient(to right, ${a}, ${b}, ${b}, ${a})`
  } else {
    return props.color
  }
})
</script>
<style lang="scss" scoped>
.uv-waterfall-divider {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80rpx;
  width: 100%;
  position: relative;
  text-align: center;
  font-size: 24rpx;
  box-sizing: border-box;
  &__line {
    position: absolute;
    height: 1rpx;
    top: 50%;
    left: 50%;
    transform: scaleY(0.5) translateX(-50%) translateZ(0);
  }
  &__text {
    position: absolute;
    left: 50%;
    padding: 0 30rpx;
    color: grey;
    font-size: 26rpx;
    transform: translateX(-50%);
  }
}
</style>
