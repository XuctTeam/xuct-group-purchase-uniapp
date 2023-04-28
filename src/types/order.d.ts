/*
 * @Author: Derek Xu
 * @Date: 2023-04-14 14:17:36
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-04-28 09:55:49
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
    rush: number
    refundStatus: number
    refundType?: string
    refundTime?: Date
    refundReason?: string
    refundImages?: string
    items?: OrderItemResult[]
    address?: User.Address
    coupon?: User.Coupon
  }

  type OrderItemResult = {
    id: string
    orderId: string
    createTime: Date
    goodId: string
    goodName: string
    goodFirstDrawing: string
    goodUnit: string
    num: number
    price: number
  }

  type OrderSumResult = {
    toBePaidCount: number
    toBeSendCount: number
    toBeReceivedCount: number
    toBeEvaluationCount: number
    toBeService: number
  }

  type EvaluateResult = {
    rate: number
    evaluateImages: string
    remarks: string
    orderItemId: string
    goodId?: string
    avatar?: string
    nickname?: string
  }
}
