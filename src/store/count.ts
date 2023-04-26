/*
 * @Author: Derek Xu
 * @Date: 2023-04-24 13:44:46
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-04-26 12:26:03
 * @FilePath: \xuct-group-purchase-uniapp\src\store\count.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const countStore = defineStore('countStore', () => {
  const orderRefreshCount = ref<boolean>(false)
  const userRefreshCount = ref<boolean>(false)

  const canRefresh = computed(() => orderRefreshCount.value)
  const canUserRefresh = computed(() => userRefreshCount.value)

  const setRefresh = (refresh: boolean) => {
    orderRefreshCount.value = refresh
  }

  const setUserRefresh = (refresh: boolean) => {
    userRefreshCount.value = refresh
  }

  return { canRefresh, setRefresh, canUserRefresh, setUserRefresh }
})
