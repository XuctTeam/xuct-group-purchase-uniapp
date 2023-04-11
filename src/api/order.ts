/*
 * @Author: Derek Xu
 * @Date: 2023-04-10 09:45:32
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-04-11 18:16:11
 * @FilePath: \xuct-group-purchase-uniapp\src\api\order.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
import request from '@/services/request'
import internal from 'stream'

/**
 * 下订单
 * @param addressId
 * @param integral
 * @param remarks
 * @param goodIds
 * @returns
 */
export const placeOrder = (addressId: string, integral: number, remarks: string, goodIds: string[]) => {
  return request.post<string>('/api/v1/order', {
    addressId,
    integral,
    remarks,
    goodIds
  })
}
