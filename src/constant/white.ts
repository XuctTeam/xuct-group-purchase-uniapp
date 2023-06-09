/*
 * @Author: Derek Xu
 * @Date: 2023-03-22 15:51:01
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-06-07 08:47:16
 * @FilePath: \xuct-group-purchase-uniapp\src\constant\white.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
/**
 * api 地址中不需要添加token
 */
export const API_NOT_TOKEN = ['/api/v1/login', '/api/v1/config', '/api/v1/banner/list', '/api/v1/wares/list']

/**
 * 需要登录的页面
 */
export const PAGE_NEED = [
  'pages/member/setting/index',
  'pages/member/address/list',
  'pages/order/confirm/index',
  'pages/order/list/index',
  'pages/services/index',
  'pages/wares/evaluate/list',
  'pages/order/refund/list',
  'pages/member/browse/index',
  'pages/member/collect/index',
  'pages/member/coupon/index',
  'pages/order/deleted/index'
]
