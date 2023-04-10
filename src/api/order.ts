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
  return request.post('/api/v1/order', {
    addressId,
    integral,
    remarks,
    goodIds
  })
}
