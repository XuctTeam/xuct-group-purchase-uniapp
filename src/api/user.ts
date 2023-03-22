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
