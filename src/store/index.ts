/*
 * @Author: Derek Xu
 * @Date: 2023-03-28 16:34:26
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-04-27 09:55:53
 * @FilePath: \xuct-group-purchase-uniapp\src\store\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
import { userStore } from './user'
import { appStore } from './app'

function useUserHook() {
  return userStore()
}

function useAppHook() {
  return appStore()
}

export { useUserHook, useAppHook }
