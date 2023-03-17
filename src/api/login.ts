import request from '@/services/request'

/**
 * 通过code登录
 * @param code
 * @returns
 */
export const loginByCode = (code: string) => {
  return request.post<string>('/login/code', {
    code
  })
}
