/*
 * @Author: Derek Xu
 * @Date: 2023-03-22 20:37:13
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-03-22 21:25:54
 * @FilePath: \xuct-group-purchase-uniapp\src\services\upload.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */

import { useUserHook } from '@/store/user'
import ENV_CONFIG from '@/config/env'
const { BASE_API_URL } = ENV_CONFIG

export const upload = (filePath: string, formData: any, callback: Function) => {
  const store = useUserHook()
  const token = store.getToken

  uni.uploadFile({
    url: BASE_API_URL + '/api/v1/user/avatar/upload', //仅为示例，非真实的接口地址
    filePath: filePath,
    name: 'file',
    formData: formData,
    header: {
      satoken: 'Bearer ' + token
    },
    success: uploadFileRes => {
      console.log(uploadFileRes.data)
      if (callback instanceof Function) {
        callback({
          code: 0,
          data: JSON.parse(uploadFileRes.data).data
        })
      }
    },
    fail: message => {
      callback({
        code: -1,
        data: message
      })
    }
  })
}
