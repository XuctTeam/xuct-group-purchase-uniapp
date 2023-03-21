/*
 * @Author: Derek Xu
 * @Date: 2023-03-19 14:23:29
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-03-21 09:48:44
 * @FilePath: \xuct-group-purchase-uniapp\src\store\user.ts
 * @Description:
 * Copyright (c) 2022 by 楚恬商行, All Rights Reserved.
 */

import { defineStore } from 'pinia'
import * as u from '@/tmui/tool/function/util'
import { StoreEnum } from '@/constant'
import { computed } from 'vue'

const token = u.getCookie(StoreEnum.TOKEN) || ''
const userInfo = u.getCookie(StoreEnum.USER) || { openId: '' }

export default defineStore('userStore', () => {
  const token = u.getCookie(StoreEnum.TOKEN) || ''
  const userInfo = u.getCookie(StoreEnum.USER) || { openId: '' }

  const logged = computed(() => {
    const { openId } = userInfo
    return !!(token && openId)
  })

  const getToken = computed(() => token)
  const userId = computed(() => userInfo.openId)
  const getUserInfo = computed(() => userInfo)

  function setUserInfo(token: string, user: User.UserInfo) {
    token = token
    Object.assign(userInfo, user)
    u.setCookie(StoreEnum.TOKEN, token)
    u.setCookie(StoreEnum.USER, userInfo)
  }
  return { token, userInfo, logged, getToken, userId, getUserInfo, setUserInfo }
})
