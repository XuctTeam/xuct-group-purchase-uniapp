/*
 * @Author: Derek Xu
 * @Date: 2023-03-28 16:25:57
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-06-08 18:32:03
 * @FilePath: \xuct-group-purchase-uniapp\src\store\app.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getWindow } from '@/tmui/tool/function/util'

export const appStore = defineStore('appStore', () => {
  const safeBottom = ref(0)
  const windowWidth = ref(0)
  const customBarHeight = ref(0)

  const initApp = () => {
    const { sysinfo, width } = getWindow()
    windowWidth.value = width
    safeBottom.value = sysinfo?.safeAreaInsets?.bottom ?? 0
    customBarHeight.value = 44 + (sysinfo?.statusBarHeight ?? 0)
  }

  const getSafeBottom = () => {
    return safeBottom.value
  }

  const getWindowWidth = () => {
    return windowWidth.value
  }

  const getCustomBarHeight = () => {
    return customBarHeight.value
  }

  return { initApp, getSafeBottom, getWindowWidth, getCustomBarHeight }
})
