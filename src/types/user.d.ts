/*
 * @Author: Derek Xu
 * @Date: 2023-03-23 17:24:55
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-04-28 13:48:50
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
    id: string
    avatar?: string
    nickname?: string
    openId: string
    phone?: string
    integral?: number
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

  type Comment = {
    user: string
    nickName: string
    avatar?: string
    userId?: string
    content: string
  }

  type SumResult = {
    integralCount: number
    browseCount: number
    collectCount: number
    couponCount: number
  }

  type Coupon = {
    id: string
    couponName: string
    couponFullPrice: number
    couponPrice: number
    beginTime: Date
    endTime: Date
    used: boolean
    checked?: boolean
  }

  interface Collect extends Good.GoodResult {
    createTime: Date
  }
}
