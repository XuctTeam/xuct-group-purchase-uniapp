<!--
 * @Author: Derek Xu
 * @Date: 2023-03-21 10:14:41
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-03-28 16:32:44
 * @FilePath: \xuct-group-purchase-uniapp\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved. 
-->
<template></template>
<script lang="ts" setup>
import { onLaunch } from '@dcloudio/uni-app'
import { useAppHook } from '@/store'

onLaunch(() => {
  const app = useAppHook()
  app.initApp()
})
</script>
<style>
/* #ifdef APP-PLUS-NVUE */
@import './tmui/scss/nvue.css';
/* #endif */
/* #ifndef APP-PLUS-NVUE */
@import './tmui/scss/noNvue.css';
/* #endif */

@import './uni.scss';
</style>
