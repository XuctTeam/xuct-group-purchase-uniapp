/*
 * @Author: Derek Xu
 * @Date: 2023-03-19 14:23:29
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-04-06 17:55:25
 * @FilePath: \xuct-group-purchase-uniapp\src\store\user.ts
 * @Description:
 * Copyright (c) 2022 by 楚恬商行, All Rights Reserved.
 */

import { computed, reactive, Ref, ref } from 'vue'
import { defineStore } from 'pinia'
import * as u from '@/tmui/tool/function/util'
import { StoreEnum } from '@/constant'

const userStore = defineStore('userStore', () => {
  const token: Ref<string> = ref(u.getCookie(StoreEnum.TOKEN) || '')
  const userInfo = reactive(u.getCookie(StoreEnum.USER) || { openId: '' })

  const logged = computed(() => {
    const { openId } = userInfo
    return !!(token.value && openId)
  })

  const getToken = computed(() => token.value)
  const getUserId = computed(() => userInfo.openId)
  const getUserInfo = computed(() => userInfo)

  function setToken(_token: string) {
    token.value = _token
    //.setCookie(StoreEnum.TOKEN, token.value)
  }

  function setUserInfo(user: User.UserInfo) {
    Object.assign(userInfo, { ...user })
    //u.setCookie(StoreEnum.USER, userInfo)
  }

  const persist = {
    enabled: true
  }

  return { persist, getToken, logged, getUserId, getUserInfo, setToken, setUserInfo }
})

/** 在 setup 外使用 */
export function useUserHook() {
  return userStore()
}
