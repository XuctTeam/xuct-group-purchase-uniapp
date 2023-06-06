/*
 * @Author: Derek Xu
 * @Date: 2023-05-29 10:42:33
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-06-06 19:02:33
 * @FilePath: \xuct-group-purchase-uniapp\src\api\config\serviceLoading.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
import { loading, hideLoading } from '@/utils/dialog'

/* 全局请求 loading */

/**
 * @description 开启 Loading
 * */
const startLoading = () => {
  loading()
}

/**
 * @description 结束 Loading
 * */
const endLoading = () => {
  hideLoading()
}

/**
 * @description 显示全屏加载
 * */
let needLoadingRequestCount = 0
export const showFullScreenLoading = () => {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}

/**
 * @description 隐藏全屏加载
 * */
export const tryHideFullScreenLoading = () => {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}
