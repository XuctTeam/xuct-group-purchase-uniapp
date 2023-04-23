<!--
 * @Author: Derek Xu
 * @Date: 2023-04-23 11:11:15
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-04-23 17:18:49
 * @FilePath: \xuct-group-purchase-uniapp\src\components\uv-bottom-bar\uv-bottom-bar.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved. 
-->
<template>
  <view :style="{ height: _totalBarHeight + 'px' }"></view>
  <view class="button-bottom fixed l-0 b-0" :style="{ height: _totalBarHeight + 'px', width: _width + 'px' }">
    <view class="relative" style="top: 15px">
      <tm-sheet class="relative" :margin="[0, 0]" :padding="[0, 0]" :height="_barHeight" :width="_width" unit="px" :border="0"> </tm-sheet>
      <view class="absolute flex flex-1" :style="{ width: _width + 'px', height: _totalBarHeight + 'px' }">
        <view class="relative barcont flex flex-row flex-row-top-center flex-around flex-1 pl-10 pr-10" :style="{ width: _width + 'px' }">
          <slot></slot>
        </view>
      </view>
    </view>
  </view>
</template>
<script lang="ts" setup>
import tmSheet from '@/tmui/components/tm-sheet/tm-sheet.vue'
import { computed } from 'vue'
import { useAppHook } from '@/store'

const appStore = useAppHook()

const _totalBarHeight = computed(() => {
  return appStore.getSafeBottom() > 0 ? 90 : 75
})

const _barHeight = computed(() => {
  return appStore.getSafeBottom() > 0 ? 75 : 60
})

const _width = computed(() => appStore.getWindowWidth() || 750)
</script>
