/*
 * @Author: Derek Xu
 * @Date: 2023-03-28 16:34:26
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-04-24 13:50:43
 * @FilePath: \xuct-group-purchase-uniapp\src\store\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
import { userStore } from './user'
import { appStore } from './app'
import { countStore } from './count'

function useUserHook() {
  return userStore()
}

function useAppHook() {
  return appStore()
}

function useCountHook() {
  return countStore()
}

export { useUserHook, useAppHook, useCountHook }
