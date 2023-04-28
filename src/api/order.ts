/*
 * @Author: Derek Xu
 * @Date: 2023-04-10 09:45:32
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-04-27 17:04:27
 * @FilePath: \xuct-group-purchase-uniapp\src\api\order.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
import request from '@/services/request'

export const sumCount = () => {
  return request.get<Order.OrderSumResult>('/api/v1/order/sum')
}

/**
 * 获取预下单购物车的商品
 *
 * @param gids  商品IDS
 */
export const getConfirmOrderDetail = (scene: string, gids: string[]) => {
  return request.post<Good.Cart[]>('/api/v1/order/confirm/detail', {
    scene,
    gids
  })
}

/**
 * 下订单
 * @param scene  cart 购物车 good 直接购买
 * @param addressId
 * @param integral
 * @param remarks
 * @param goodIds
 * @returns
 */
export const placeOrder = (scene: string, addressId: string, couponId: string, integral: number, remarks: string, goodIds: string[]) => {
  return request.post<string>('/api/v1/order', {
    scene,
    addressId,
    couponId,
    integral,
    remarks,
    goodIds
  })
}

/**
 * 分页订单列表
 *
 * @param status
 * @param pageNo
 * @param pageSize
 * @returns
 */
export const pageOrderList = (pageNo: number, pageSize: number, status: string, refundStatus: string) => {
  return request.get<API.PageResult<Order.OrderResult>>('/api/v1/order/list', {
    status,
    pageNo,
    pageSize,
    refundStatus
  })
}

/**
 * 获取订单详情
 *
 * @param orderId
 */
export const getOrderDetail = (orderId: string) => {
  return request.get<Order.OrderResult>('/api/v1/order/', { orderId })
}

/**
 * 申请取消
 *
 * @param order
 */
export const refundOrder = (orderId: string, refundType: string, refundReason?: string, refundImages?: string[]) => {
  return request.post('/api/v1/order/refund', {
    orderId,
    refundType,
    refundReason,
    refundImages
  })
}

/**
 * 取消退单申请
 * @param orderId
 */
export const cancelRefundOrder = (orderId: string) => {
  return request.post('/api/v1/order/refund/cancel', {
    orderId
  })
}

/**
 * 催单
 *
 * @param orderId
 * @returns
 */
export const rushOrder = (orderId: string) => {
  return request.post('/api/v1/order/rush', { orderId })
}

/**
 * 收货
 *
 * @param orderId
 * @returns
 */
export const receiverOrder = (orderId: string) => {
  return request.post('/api/v1/order/receive', { orderId })
}

/**
 * 删除订单
 *
 * @param orderId
 */
export const cancelOrder = (orderId: string) => {
  return request.delete('/api/v1/order', { orderId })
}

/**
 * 待评价商品列表
 *
 */
export const evaluateList = () => {
  return request.get<Order.OrderItemResult[]>('/api/v1/order/evaluate/list')
}

/**
 * 评价商品
 * @param data
 * @returns
 */
export const evaluate = (data: Order.EvaluateResult) => {
  return request.post('/api/v1/order/evaluate', { ...data })
}
