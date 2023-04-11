/*
 * @Author: Derek Xu
 * @Date: 2023-03-28 16:25:57
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-04-11 18:49:10
 * @FilePath: \xuct-group-purchase-uniapp\src\store\app.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const appStore = defineStore('appStore', () => {
  const safeBottom = ref(0)
  const windowWidth = ref(0)

  const initApp = () => {
    const sys = uni.getSystemInfoSync()
    safeBottom.value = sys?.safeAreaInsets?.bottom ?? 0
    windowWidth.value = sys.windowWidth
  }

  const getSafeBottom = () => {
    return safeBottom.value
  }

  const getWindowWidth = () => {
    return windowWidth.value
  }

  return { initApp, getSafeBottom, getWindowWidth }
})
