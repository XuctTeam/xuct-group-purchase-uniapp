/*
 * @Author: Derek Xu
 * @Date: 2023-03-27 10:11:35
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-04-22 22:28:06
 * @FilePath: \xuct-group-purchase-uniapp\src\api\user.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
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
 * 绑定手机号
 *
 * @param code
 * @param encryptedData
 * @param iv
 */
export const bindPhone = (code: string, encryptedData: string, iv: string) => {
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

/**
 * 获取默认的通讯录地址
 */
export const getDefaultAddress = () => {
  return request.get<User.Address>('/api/v1/address/default')
}

/**
 * 获取留言列表
 */
export const commentList = () => {
  return request.get<User.Comment[]>('/api/v1/user/comment/list')
}

/**
 * 添加留言
 *
 * @param comment
 */
export const addComment = (comment: User.Comment) => {
  return request.post('/api/v1/user/comment', { ...comment })
}
