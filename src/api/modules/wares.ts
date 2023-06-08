/*
 * @Author: Derek Xu
 * @Date: 2023-03-27 11:35:37
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-06-08 18:15:15
 * @FilePath: \xuct-group-purchase-uniapp\src\api\modules\wares.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
import request from '@/api/config/request'
import { User, Wares, API } from '@/api/interface'

/**
 * 商品分类列表
 */
export const categoryListApi = () => {
  return request.get<Wares.CategoryResult[]>('/api/v1/category/list', {}, { noLoading: true })
}

/**
 * 获取商品列表
 */
export const waresListApi = (params: { pageNum: number; pageSize: number; categoryId?: string }) => {
  return request.get<API.PageResult<Wares.WaresResult>>('/api/v1/wares/list', params, { noLoading: true })
}

/**
 * 获取商品详情
 *
 * @param waresId   商品ID
 */
export const getWaresApi = (waresId: string) => {
  return request.get<Wares.WaresResult>('/api/v1/wares', {
    waresId
  })
}

/**
 * 浏览商品次数
 *
 * @param waresId  商品ID
 */
export const browseWaresApi = (waresId: string) => {
  return request.post('/api/v1/wares/browse', {
    waresId
  })
}

/**
 * 收藏或取消收藏
 *
 * @param gid 商品ID
 * @returns
 */
export const collectApi = (waresId: string) => {
  return request.post('/api/v1/wares/collect', {
    waresId
  })
}

/**
 * 添加购物车
 *
 * @param waresId 商品ID
 * @returns
 */
export const addCartApi = (waresId: string) => {
  return request.post('/api/v1/wares/cart/add', {
    waresId
  })
}

/**
 * 获取购物车列表
 *
 * @returns
 */
export const cartListApi = () => {
  return request.get<Wares.Cart[]>('/api/v1/wares/cart/list')
}

/**
 * 修改购买数量
 *
 * @param waresId  商品ID
 * @param num  购买数量
 */
export const modifyCartNumApi = (waresId: string, num: number) => {
  return request.post('/api/v1/wares/cart/update/num', {
    waresId,
    num
  })
}

/**
 * 删除购物车商品
 *
 * @param waresIdIds  商品ID
 */
export const deleteCartWaresApi = (waresIdIds: string[]) => {
  return request.post('/api/v1/wares/cart/del', {
    waresIdIds
  })
}

/**
 * 清空购物车
 */
export const cleanCartApi = () => {
  return request.delete('/api/v1/wares/cart/del/all')
}

/**
 * 查询用户收藏商品
 */
export const collectListApi = () => {
  return request.get<User.Collect[]>('/api/v1/wares/user/collect')
}

/**
 * 查询用户浏览商品
 */
export const browseListApi = () => {
  return request.get<User.BrowserWaresResult[]>('/api/v1/wares/user/browse')
}

/**
 * 删除用户浏览
 *
 * @param waresId
 */
export const deleteBrowseApi = (params: { id: string }) => {
  return request.delete(`/api/v1/wares/user/browse/${params.id}`)
}
