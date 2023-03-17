/*
 * @Author: Derek Xu
 * @Date: 2022-08-23 21:55:11
 * @LastEditors: Derek Xu
 * @LastEditTime: 2022-08-26 14:00:45
 * @FilePath: \1.0.0\src\services\types.d.ts
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
