/*
 * @Author: Derek Xu
 * @Date: 2023-04-24 13:44:46
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-04-24 13:50:00
 * @FilePath: \xuct-group-purchase-uniapp\src\store\count.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const countStore = defineStore('countStore', () => {
  const countRefresh = ref<boolean>(false)

  const setRefresh = (refresh: boolean) => {
    countRefresh.value = refresh
  }
  const canRefresh = computed(() => countRefresh.value)
  return { canRefresh, setRefresh }
})
