<!--
 * @Author: Derek Xu
 * @Date: 2023-06-01 14:51:27
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-06-01 15:01:34
 * @FilePath: \xuct-group-purchase-uniapp\src\components\uv-waterfall-flow\uv-waterfall-flow-tag\uv-waterfall-flow-tag.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved. 
-->
<template>
  <view class="uv-waterfall-flow-tag" :class="classList" @click="click" v-if="visible">
    <slot></slot>
  </view>
</template>
<script lang="ts" setup>
/**
 * @description 用于标记和选择
 * @property {String} type 类型 (primary | success | error | warning | info)
 * @property {Boolean} plain 图片裁剪、缩放的模式
 * @property {String} size 图片大小 (small | mini)，默认small
 * @property {Boolean} closable 是否可关闭
 * @property {Boolean} round 是否圆角
 * @event {Function} click 点击时触发
 * @event {Function} close 关闭时触发
 */
import { computed, PropType, ref } from 'vue'
const props = defineProps({
  type: {
    type: String as PropType<'primary' | 'success' | 'error' | 'warning' | 'info'>,
    default: 'primary'
  },
  plain: Boolean,
  size: {
    type: String as PropType<'small' | 'mini'>,
    default: 'small'
  },
  round: Boolean
})
const emit = defineEmits(['click', 'close'])
// 是否可见
const visible = ref<boolean>(true)
// 样式
const classList = computed(() => {
  let list: string[] = []
  if (props.type) {
    list.push(`uv-waterfall-flow-tag--${props.type}`)
  }
  if (props.size) {
    list.push(`uv-waterfall-flow-tag--${props.size}`)
  }
  if (props.plain) {
    list.push('is-plain')
  }
  if (props.round) {
    list.push('is-round')
  }
  return list.join(' ')
})
// 点击
function click() {
  emit('click')
}
</script>
<style lang="scss" scoped>
$uni-color-primary: rgb(1, 99, 255);
$uni-color-success: rgb(93, 189, 31);
$uni-color-warning: rgb(254, 166, 0);
$uni-color-error: rgb(254, 28, 0);
$uni-color-info: rgb(127, 127, 127);

@mixin color($color) {
  background-color: $color;
  &.is-plain {
    color: $color;
    border-collapse: $color;
    background-color: #fff;
  }
}
.uv-waterfall-flow-tag {
  border-radius: 6rpx;
  padding: 0 20rpx;
  height: 56rpx;
  line-height: 56rpx;
  font-size: 26rpx;
  color: #fff;
  display: inline-block;
  &__close {
    margin-left: 10rpx;
  }
  &--small {
    height: 56rpx;
    line-height: 56rpx;
  }
  &--mini {
    height: 48rpx;
    line-height: 48rpx;
    font-size: 24rpx;
  }
  &.is-round {
    border-radius: 48rpx;
  }
  &.is-plain {
    border-width: 1rpx;
    border-style: solid;
  }
  &--primary {
    @include color($uni-color-primary);
  }
  &--success {
    @include color($uni-color-success);
  }
  &--warning {
    @include color($uni-color-warning);
  }
  &--error {
    @include color($uni-color-error);
  }
  &--info {
    @include color($uni-color-info);
  }
}
.uv-waterfall-flow-tag + .uv-waterfall-flow-tag {
  margin-left: 20rpx;
}
</style>
