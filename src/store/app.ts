/*
 * @Author: Derek Xu
 * @Date: 2023-03-28 16:25:57
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-06-05 11:10:14
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

  const initApp = () => {
    const { sysinfo, width } = getWindow()
    safeBottom.value = sysinfo?.safeAreaInsets?.bottom ?? 0
    windowWidth.value = width
  }

  const getSafeBottom = () => {
    return safeBottom.value
  }

  const getWindowWidth = () => {
    return windowWidth.value
  }

  return { initApp, getSafeBottom, getWindowWidth }
})
