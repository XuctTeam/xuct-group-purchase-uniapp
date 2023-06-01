<!--
 * @Author: Derek Xu
 * @Date: 2023-06-01 14:51:27
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-06-01 15:32:32
 * @FilePath: \xuct-group-purchase-uniapp\src\components\uv-ui\uv-ui-tag\index.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved. 
-->
<template>
  <view class="uv-ui-tag" :class="classList" @click="click" v-if="visible">
    <slot></slot>
    <uv-ui-icon size="10" class="uv-ui-tag__close" name="close" v-if="closable" @click="close"></uv-ui-icon>
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
import uvUiIcon from '../uv-ui-icon/index.vue'

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
  closable: Boolean,
  round: Boolean
})
const emit = defineEmits(['click', 'close'])
// 是否可见
const visible = ref<boolean>(true)
// 样式
const classList = computed(() => {
  let list: string[] = []
  if (props.type) {
    list.push(`uv-ui-tag--${props.type}`)
  }
  if (props.size) {
    list.push(`uv-ui-tag--${props.size}`)
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
// 关闭
const close = (e) => {
  e.preventDefault()
  e.stopPropagation()
  visible.value = false
  emit('close')
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
