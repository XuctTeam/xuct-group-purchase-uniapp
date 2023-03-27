import request from '@/services/request'

/**
 * 获取商品列表
 */
export const goodList = () => {
  return request.get<Good.GoodResult[]>('/api/v1/good/list')
}

/**
 * 获取商品详情
 * @param id
 */
export const getGood = (id: string) => {
  return request.get<Good.GoodResult>('/api/v1/good', {
    id
  })
}
