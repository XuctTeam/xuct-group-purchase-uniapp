<!--
 * @Author: Derek Xu
 * @Date: 2023-05-06 14:38:08
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-05-06 16:02:00
 * @FilePath: \xuct-group-purchase-uniapp\src\components\uv-empty\uv-empty.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved. 
-->
<template>
  <tm-translate :eventPenetrationEnabled="true" name="zoom" :delay="600">
    <view class="uv-empty">
      <tm-image :src="img" :width="200" :height="200"></tm-image>
      <view class="uv-empty-txt">
        <tm-text color="#aaaaaa" :font-size="26" label="~空空如也哦~"></tm-text>
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
  }
})

const img = computed(() => {
  return 'data:image/png;base64,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'
})
</script>

<style>
.uv-empty {
  height: 800rpx;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.uv-empty-txt {
  margin-top: 10rpx;
}
</style>
