/*
 * @Author: Derek Xu
 * @Date: 2023-03-18 14:16:33
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-03-19 10:32:14
 * @FilePath: \xuct-group-purchase-uniapp\src\api\login.ts
 * @Description:
 * Copyright (c) 2022 by 楚恬商行, All Rights Reserved.
 */
import request from '@/services/request'

/**
 * 通过code登录
 * @param code
 * @returns
 */
export const loginByCode = (code: string) => {
  return request.post<User.LoginResult>('/login/code', {
    code
  })
}
