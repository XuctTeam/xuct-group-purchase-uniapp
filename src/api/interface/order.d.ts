/*
 * @Author: Derek Xu
 * @Date: 2023-04-14 14:17:36
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-06-02 09:58:22
 * @FilePath: \xuct-group-purchase-uniapp\src\api\interface\order.d.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
import { User } from './user'

export declare namespace Order {
  type OrderResult = {
    id: string
    createTime: Date
    waresNum: number
    totalPrice: number
    status: number
    remarks?: string
    deliverTime?: Date
    serveTime?: Date
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
    waresId: string
    waresName: string
    waresFirstDrawing: string
    waresUnit: string
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
    waresId?: string
    avatar?: string
    nickname?: string
  }
}
