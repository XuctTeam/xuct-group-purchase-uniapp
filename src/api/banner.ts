import request from '@/services/request'

/**
 * 查询bannner列表
 * @returns
 */
export const bannerList = () => {
  return request.get<API.Banner[]>('/api/v1/banner/list')
}
