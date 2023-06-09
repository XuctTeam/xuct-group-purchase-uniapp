/*
 * @Author: Derek Xu
 * @Date: 2023-03-24 18:54:33
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-06-09 09:24:28
 * @FilePath: \xuct-group-purchase-uniapp\src\utils\dialog.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */

export interface DialogOpt {
  title: string
  success: Function
  fail: Function
}

export interface MessageOpt {
  title: string
  icon: 'success' | 'loading' | 'error' | 'none'
}

/**
 * 确认提示框
 * @param param0
 */
export const confirm = ({ title, success, fail }: DialogOpt) => {
  uni.showModal({
    title: '确认信息',
    content: title,
    success: function (res) {
      if (res.confirm) {
        success()
      } else if (res.cancel) {
        fail()
      }
    }
  })
}

export const loading = (title?: string) => {
  uni.showLoading({
    title: title ?? '加载中',
    mask: true
  })
}

export const hideLoading = () => {
  setTimeout(() => {
    uni.hideLoading()
  }, 300)
}
