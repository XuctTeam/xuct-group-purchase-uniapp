/*
 * @Author: Derek Xu
 * @Date: 2023-03-28 16:25:57
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-03-28 16:33:18
 * @FilePath: \xuct-group-purchase-uniapp\src\store\app.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
import { computed, reactive, Ref, ref } from 'vue'
import { defineStore } from 'pinia'

const appStore = defineStore('appStore', () => {
  const safeBottom = ref(0)

  const initApp = () => {
    const sys = uni.getSystemInfoSync()
    safeBottom.value = sys?.safeAreaInsets?.bottom ?? 0
  }

  const getSafeBottom = () => {
    return safeBottom.value
  }
  return { initApp, getSafeBottom }
})

/** 在 setup 外使用 */
export function useAppHook() {
  return appStore()
}
