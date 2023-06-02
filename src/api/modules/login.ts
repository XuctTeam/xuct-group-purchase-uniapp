/*
 * @Author: Derek Xu
 * @Date: 2023-03-18 14:16:33
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-06-02 09:42:50
 * @FilePath: \xuct-group-purchase-uniapp\src\api\modules\login.ts
 * @Description:
 * Copyright (c) 2022 by 楚恬商行, All Rights Reserved.
 */
import request from '@/api/config/request'
import { User } from '@/api/interface'

/**
 * 通过code登录
 * @param code
 * @returns
 */
export const loginByCode = (code: string) => {
  return request.post<User.LoginResult>('/api/v1/login', {
    code
  })
}

/**
 * 退出登录
 */
export const logout = () => {
  return request.delete('/api/v1/login')
}
