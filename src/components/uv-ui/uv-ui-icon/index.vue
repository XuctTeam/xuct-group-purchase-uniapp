<!--
 * @Author: Derek Xu
 * @Date: 2023-06-01 15:25:19
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-06-01 15:33:41
 * @FilePath: \xuct-group-purchase-uniapp\src\components\uv-ui\uv-ui-icon\index.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved. 
-->
<template>
  <text
    @click="click"
    :class="['uv-ui-icon', className || `ayi-icon-${name}`, { 'is-primary': color == 'primary' }]"
    :style="{ fontSize: setRpx(size), color }"
  ></text>
</template>
<script lang="ts" setup>
/**
 * @description 字体图标
 * @property {String} name 图标名称
 * @property {String} className 自定义图标名称
 * @property {String, Number} size 图标大小
 * @property {String} color 图标颜色
 */
import { setRpx } from '../common/utils'
const props = defineProps({
  name: String,
  className: String,
  size: {
    type: [String, Number],
    default: 30
  },
  color: String
})
const emit = defineEmits(['click'])
const click = (e: any) => {
  e.stopPropagation()
  e.preventDefault()
  emit('click', e)
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
