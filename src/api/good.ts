/*
 * @Author: Derek Xu
 * @Date: 2023-03-27 11:35:37
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-03-31 17:17:56
 * @FilePath: \xuct-group-purchase-uniapp\src\api\good.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
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

/**
 * 浏览商品次数
 * @param gid
 */
export const browseGood = (gid: string) => {
  return request.post('/api/v1/good/browse', {
    gid
  })
}

/**
 * 收藏或取消收藏
 * @param gid
 * @returns
 */
export const collect = (gid: string) => {
  return request.post('/api/v1/good/collect', {
    gid
  })
}

/**
 * 添加购物车
 * @param gid
 * @returns
 */
export const addCart = (gid: string) => {
  return request.post('/api/v1/good/cart/add', {
    gid
  })
}

/**
 * 获取购物车列表
 * @returns
 */
export const cartList = () => {
  return request.get<Good.CartResult[]>('/api/v1/good/cart/list')
}
