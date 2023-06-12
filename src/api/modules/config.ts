/*
 * @Author: Derek Xu
 * @Date: 2023-04-10 11:40:24
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-06-12 09:05:48
 * @FilePath: \xuct-group-purchase-uniapp\src\api\modules\config.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
import request from '@/api/config/request'

import { API } from '../interface'
/**
 * 通过类型查询配置
 *
 * @param type
 */
export const getConfigApi = (type: number) => {
  return request.get<API.ConfigResult>('/api/v1/config', { type })
}
