/*
 * @Author: Derek Xu
 * @Date: 2023-03-27 11:35:37
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-04-20 09:52:16
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
 *
 * @param id   商品ID
 */
export const getGood = (id: string) => {
  return request.get<Good.GoodResult>('/api/v1/good', {
    id
  })
}

/**
 * 浏览商品次数
 *
 * @param gid  商品ID
 */
export const browseGood = (gid: string) => {
  return request.post('/api/v1/good/browse', {
    gid
  })
}

/**
 * 收藏或取消收藏
 *
 * @param gid 商品ID
 * @returns
 */
export const collect = (gid: string) => {
  return request.post('/api/v1/good/collect', {
    gid
  })
}

/**
 * 添加购物车
 *
 * @param gid 商品ID
 * @returns
 */
export const addCart = (gid: string) => {
  return request.post('/api/v1/good/cart/add', {
    gid
  })
}

/**
 * 获取购物车列表
 *
 * @returns
 */
export const cartList = () => {
  return request.get<Good.CartResult[]>('/api/v1/good/cart/list')
}

/**
 * 修改购买数量
 *
 * @param gid  商品ID
 * @param num  购买数量
 */
export const modifyCartNum = (gid: string, num: number) => {
  return request.post('/api/v1/good/cart/update/num', {
    gid,
    num
  })
}

/**
 * 删除购物车商品
 *
 * @param gid  商品ID
 */
export const deleteCartGood = (gids: string[]) => {
  return request.post('/api/v1/good/cart/del', {
    gids
  })
}

/**
 * 清空购物车
 */
export const cleanCart = () => {
  return request.delete('/api/v1/good/cart/del/all')
}

/**
 * 查询用户收藏商品
 */
export const collectList = () => {
  return request.get<Good.GoodResult[]>('/api/v1/good/user/collect')
}
