/*
 * @Author: Derek Xu
 * @Date: 2023-03-21 18:33:48
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-04-03 21:45:40
 * @FilePath: \xuct-group-purchase-uniapp\src\types\good.d.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
declare namespace Good {
  type GoodResult = {
    id: string
    name: string
    firstDrawing: string
    swiperImages?: string
    startTime: Date
    endTime?: Date
    inventory: number
    detail?: string
    collect?: boolean
    browse: number
    unit?: string
  }

  type CartResult = {
    goodId: string
    name: string
    firstDrawing: string
    num: number
    checked?: boolean
    unit: string
  }
}
