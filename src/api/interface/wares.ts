/*
 * @Author: Derek Xu
 * @Date: 2023-03-21 18:33:48
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-06-06 17:46:01
 * @FilePath: \xuct-group-purchase-uniapp\src\api\interface\wares.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
export declare namespace Wares {
  type CategoryResult = {
    id: string
    name: string
    image: string
    sort: number
  }

  type WaresResult = {
    id: string
    name: string
    blurb: string
    firstDrawing: string
    swiperImages?: string
    startTime: Date
    endTime?: Date
    inventory: number
    detail?: string
    collect?: boolean
    browse?: number
    unit?: string
    sell?: number
    tags?: string
  }

  type Cart = {
    waresId: string
    name: string
    status: number
    firstDrawing: string
    num: number
    checked?: boolean
    unit: string
    deleted: boolean
  }
}
