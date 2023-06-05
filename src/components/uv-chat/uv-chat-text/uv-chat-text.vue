<!--
 * @Author: Derek Xu
 * @Date: 2023-04-23 09:17:10
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-05-16 20:56:57
 * @FilePath: \xuct-group-purchase-uniapp\src\components\uv-chat\uv-chat-text\uv-chat-text.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved. 
-->
<template>
  <view class="content">
    <text>{{ props.text }}</text>
  </view>
</template>

<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    default: () => '这是条消息'
  }
})
</script>

<style scoped>
.content {
  background-color: #fff;
  padding: 20rpx;
  border-radius: 14rpx;
  color: #333;
  font-size: 32rpx;
  max-width: 50vw;
  white-space: break-spaces;
  word-wrap: break-word;
}
</style>
