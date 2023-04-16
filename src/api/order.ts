/*
 * @Author: Derek Xu
 * @Date: 2023-04-10 09:45:32
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-04-14 15:58:41
 * @FilePath: \xuct-group-purchase-uniapp\src\api\order.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
import request from '@/services/request'

/**
 * 获取预下单购物车的商品
 *
 * @param gids  商品IDS
 */
export const getConfirmOrderDetail = (scene: string, gids: string[]) => {
  return request.post<Good.CartResult[]>('/api/v1/order/confirm/detail', {
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
export const placeOrder = (scene: string, addressId: string, integral: number, remarks: string, goodIds: string[]) => {
  return request.post<string>('/api/v1/order', {
    scene,
    addressId,
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
export const pageOrderList = (pageNo: number, pageSize: number, status: string) => {
  return request.get<API.PageResult<Order.OrderResult>>('/api/v1/order/list', {
    status,
    pageNo,
    pageSize
  })
}
