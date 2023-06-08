<!--
 * @Author: Derek Xu
 * @Date: 2023-05-06 14:38:08
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-06-08 13:19:26
 * @FilePath: \xuct-group-purchase-uniapp\src\components\uv-empty\uv-empty.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved. 
-->
<template>
  <tm-translate :eventPenetrationEnabled="true" name="zoom" :delay="600">
    <view class="uv-empty" :style="{ height: props.height + 'rpx' }">
      <tm-image :src="img" :width="300" :height="300"></tm-image>
      <view class="uv-empty-txt">
        <tm-text color="#aaaaaa" :font-size="30" label="~空空如也哦~"></tm-text>
      </view>
    </view>
  </tm-translate>
</template>

<script lang="ts" setup>
import tmImage from '@/tmui/components/tm-image/tm-image.vue'
import tmText from '@/tmui/components/tm-text/tm-text.vue'
import tmTranslate from '@/tmui/components/tm-translate/tm-translate.vue'

import { computed } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    default: ''
  },
  height: {
    type: Number,
    default: 800
  },

  type: {
    type: String,
    default: 'box'
  }
})

const img = computed(() => {
  switch (props.type) {
    case 'message':
      return '/static/system/e_no_message.png'
    case 'product':
      return '/static/system/e_no_product.png'
    default:
      return '/static/system/e_no_box.png'
  }
})
</script>

<style scoped>
@import './uv-empty.scss';
</style>
