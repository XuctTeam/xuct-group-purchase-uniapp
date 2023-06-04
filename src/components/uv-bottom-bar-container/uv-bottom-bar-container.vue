<!--
 * @Author: Derek Xu
 * @Date: 2023-04-23 11:11:15
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-06-04 10:38:41
 * @FilePath: \xuct-group-purchase-uniapp\src\components\uv-bottom-bar-container\uv-bottom-bar-container.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved. 
-->
<template>
  <view class="safe-area" :style="{ marginBottom: (props.showFooter ? _totalBarHeight : 0) + 'px' }">
    <slot></slot>
  </view>
  <view
    v-if="showFooter"
    class="button-bottom fixed l-0 b-0 flex"
    :style="{ height: _totalBarHeight + 'px', width: _width + 'px', transform: `translateY(${props.bottom}rpx)`, zIndex: props.zIndex }"
  >
    <view class="top"></view>
    <view class="flex flex-1 pl-10 pr-10 flex-row flex-row-top-center">
      <slot name="footer"></slot>
    </view>
  </view>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useAppHook } from '@/store'

const props = defineProps({
  showFooter: {
    type: Boolean,
    default: true
  },

  //底部偏移
  bottom: {
    type: [Number],
    default: 0
  },
  //是否显示安全区域
  showSafe: {
    type: [Boolean],
    default: false
  },
  zIndex: {
    type: [Number],
    default: 200
  }
})

const _showSafe = ref(props.showSafe)
const appStore = useAppHook()
const win_bottom = appStore.getSafeBottom()
if (win_bottom > 0) {
  _showSafe.value = true
}

const _totalBarHeight = computed(() => {
  if (_showSafe.value) return 90
  return 75
})

const _width = computed(() => appStore.getWindowWidth() || 750)
</script>
<style>
.top {
  height: 15px;
}

.barcont {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>
