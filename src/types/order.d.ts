/*
 * @Author: Derek Xu
 * @Date: 2023-04-14 14:17:36
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-04-17 13:59:10
 * @FilePath: \xuct-group-purchase-uniapp\src\types\order.d.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
declare namespace Order {
  type OrderResult = {
    id: string
    createTime: Date
    goodNum: number
    totalPrice: number
    status: number
    remarks?: string
    deliverTime?: Date
    serveTime?: Date
    integral: number
    items?: OrderItemResult[]
    address?: User.Address
  }

  type OrderItemResult = {
    goodName: string
    goodFirstDrawing: string
    goodUnit: string
    num: number
    price: number
  }
}
