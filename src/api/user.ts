import request from '@/services/request'

/**
 * 修改用户信息
 *
 * @param phone
 * @param nickname
 * @returns
 */
export const saveUserInfo = (phone: string, nickname: string) => {
  return request.put('/api/v1/user', {
    phone,
    nickname
  })
}

/**
 * 获取用户地址列表
 * @returns
 */
export const userAddressList = () => {
  return request.get<User.Address[]>('/api/v1/address/list')
}

/**
 * 保存用户地址
 * @param address
 */
export const saveUserAddress = (address: User.Address) => {
  return request.post('/api/v1/address', {
    ...address
  })
}
