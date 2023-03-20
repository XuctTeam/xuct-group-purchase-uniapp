/*
 * @Author: Derek Xu
 * @Date: 2023-03-19 14:23:29
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-03-20 21:24:42
 * @FilePath: \xuct-group-purchase-uniapp\src\store\user.ts
 * @Description:
 * Copyright (c) 2022 by 楚恬商行, All Rights Reserved.
 */

import { defineStore } from 'pinia'
import * as u from '@/tmui/tool/function/util'
import { StoreEnum } from '@/constant'

const token = u.getCookie(StoreEnum.TOKEN) || ''
const userInfo = u.getCookie(StoreEnum.USER) || { openId: '' }

export default defineStore('userStore', {
  state: () => {
    return {
      token: token,
      userInfo: userInfo
    }
  },
  getters: {
    logged: state => {
      const { openId } = state.userInfo
      return !!(state.token && openId)
    },
    getToken: state => {
      return state.token
    },
    userId: state => {
      return state.userInfo.openId
    },
    getUserInfo: state => {
      return state.userInfo
    }
  },
  actions: {
    setUserInfo(token: string, userInfo: User.UserInfo) {
      this.token = token
      Object.assign(this.userInfo, userInfo)
      u.setCookie(StoreEnum.TOKEN, token)
      u.setCookie(StoreEnum.USER, userInfo)
    }
  }
})
