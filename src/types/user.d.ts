/*
 * @Author: Derek Xu
 * @Date: 2023-03-23 17:24:55
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-03-23 18:06:16
 * @FilePath: \xuct-group-purchase-uniapp\src\types\user.d.ts
 * @Description: 用户定义类
 * Copyright (c) 2022 by 楚恬商行, All Rights Reserved.
 */
declare namespace User {
  type LoginResult = {
    tokenName: string
    tokenValue: string
    user?: UserInfo
  }

  type UserInfo = {
    avatar?: string
    nickname?: string
    openId: string
    phone?: string
  }

  type Address = {
    id?: string
    cityName?: string
    countyName?: string
    detailInfo?: string
    errMsg?: string
    nationalCode?: string
    postalCode?: string
    provinceName?: string
    telNumber?: string
    userName?: string
    firstChoose?: number
    city?: string[]
    cityStr?: string
  }
}
