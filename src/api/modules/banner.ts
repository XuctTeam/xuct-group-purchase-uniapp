/*
 * @Author: Derek Xu
 * @Date: 2023-03-22 15:58:09
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-06-08 18:14:34
 * @FilePath: \xuct-group-purchase-uniapp\src\api\modules\banner.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
import request from '@/api/config/request'
import { API } from '../interface'

/**
 * 查询banner列表
 * @returns
 */
export const bannerListApi = () => {
  return request.get<API.BannerResult[]>('/api/v1/banner/list', {}, { noLoading: true })
}
