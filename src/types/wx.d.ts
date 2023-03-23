/*
 * @Author: Derek Xu
 * @Date: 2023-03-23 13:22:42
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-03-23 13:24:12
 * @FilePath: \xuct-group-purchase-uniapp\src\types\wx.d.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
declare namespace WX {
  type Address = {
    cityName?: string
    countyName?: string
    detailInfo?: string
    errMsg: string
    nationalCode?: string
    postalCode?: string
    provinceName?: string
    telNumber?: string
    userName?: string
  }
}
