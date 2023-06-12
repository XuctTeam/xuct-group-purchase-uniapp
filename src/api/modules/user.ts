/*
 * @Author: Derek Xu
 * @Date: 2023-03-27 10:11:35
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-06-12 09:05:15
 * @FilePath: \xuct-group-purchase-uniapp\src\api\modules\user.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
import request from '@/api/config/request'
import { User } from '@/api/interface'

/**
 * 修改用户信息
 *
 * @param phone
 * @param nickname
 * @returns
 */
export const saveUserInfoApi = (phone: string, nickname: string) => {
  return request.put('/api/v1/user', {
    phone,
    nickname
  })
}

/**
 * 绑定手机号
 *
 * @param code
 * @param encryptedData
 * @param iv
 */
export const bindPhoneApi = (code: string, encryptedData: string, iv: string) => {
  return request.post<string>('/api/v1/user/bind/phone', {
    code,
    encryptedData,
    iv
  })
}
/**
 * 获取用户地址列表
 * @returns
 */
export const userAddressListApi = (searchValue: string) => {
  return request.get<User.Address[]>('/api/v1/address/list', {
    searchValue
  })
}

/**
 * 保存用户地址
 * @param address
 */
export const saveUserAddressApi = (address: User.Address) => {
  return request.post('/api/v1/address', {
    ...address
  })
}

/**
 * 获取地址详情
 * @param id
 * @returns
 */
export const getUserAddressApi = (id: string) => {
  return request.get<User.Address>('/api/v1/address', { id })
}

/**
 * 删除通讯录地址
 * @param id
 * @returns
 */
export const deleteUserAddressApi = (id: string) => {
  return request.delete('/api/v1/address?id=' + id)
}

/**
 * 获取默认的通讯录地址
 */
export const getDefaultAddressApi = () => {
  return request.get<User.Address>('/api/v1/address/default')
}

/**
 * 获取留言列表
 */
export const commentListApi = () => {
  return request.get<User.Comment[]>('/api/v1/user/comment/list')
}

/**
 * 添加留言
 *
 * @param comment
 */
export const addCommentApi = (comment: User.Comment) => {
  return request.post('/api/v1/user/comment', { ...comment })
}

/**
 * 用户信息统计
 */
export const userSumApi = () => {
  return request.get<User.SumResult>('/api/v1/user/sum', {}, { noLoading: true })
}

/**
 * 优惠券列表
 */
export const couponListApi = (status: string) => {
  return request.get<User.Coupon[]>('/api/v1/coupon/list?status=' + status)
}

/**
 * 可用优惠券列表(订单)
 */
export const canUsedCouponList = () => {
  return request.get<User.Coupon[]>('/api/v1/coupon/can/used')
}

/**
 * 反馈列表
 */
export const opinionListApi = () => {
  return request.get<User.Opinion[]>('/api/v1/opinion/list')
}

/**
 * 添加反馈
 * @param opinion
 */
export const saveOpinionApi = (opinion: User.Opinion) => {
  return request.post('/api/v1/opinion', { ...opinion })
}

/**
 * 获取反馈详情
 * @param id
 * @returns
 */
export const getOpinionApi = (id: string) => {
  return request.get<User.Opinion>('/api/v1/opinion', { id })
}
