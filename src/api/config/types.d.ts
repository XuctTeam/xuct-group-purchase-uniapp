/*
 * @Author: Derek Xu
 * @Date: 2022-08-23 21:55:11
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-06-06 18:49:43
 * @FilePath: \xuct-group-purchase-uniapp\src\api\config\types.d.ts
 * @Description:
 *
 * Copyright (c) 2022 by 楚恬商行, All Rights Reserved.
 */
export interface ResponseData<T = any> {
  code: number
  msg: string
  success: boolean
  data: T
}

declare module 'uni-ajax' {
  interface CustomConfig {
    noLoading?: boolean
  }
}
