import request from '@/services/request'

/**
 * 通过类型查询配置
 *
 * @param type
 */
export const getConfig = (type: number) => {
  return request.get<API.ConfigResult>('/api/v1/config', { type })
}
