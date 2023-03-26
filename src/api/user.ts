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
export const userAddressList = (searchValue: string) => {
  return request.get<User.Address[]>('/api/v1/address/list', {
    searchValue
  })
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

/**
 * 获取地址详情
 * @param id
 * @returns
 */
export const getUserAddress = (id: string) => {
  return request.get<User.Address>('/api/v1/address', { id })
}

/**
 * 删除通讯录地址
 * @param id
 * @returns
 */
export const deleteUserAddress = (id: string) => {
  return request.delete('/api/v1/address?id=' + id)
}
