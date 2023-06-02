/*
 * @Author: Derek Xu
 * @Date: 2023-03-18 14:16:33
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-05-16 21:00:16
 * @FilePath: \xuct-group-purchase-uniapp\src\types\api.d.ts
 * @Description:
 * Copyright (c) 2022 by 楚恬商行, All Rights Reserved.
 */
export declare namespace API {
  type ENV = {
    BASE_API_URL: string
  }

  type UploadResult = {
    code: number
    data: string
  }

  type BannerResult = {
    title: string
    router: string
    image: string
  }

  type ConfigResult = {
    type: number
    content: string
  }

  type PageResult<T> = {
    pageTotal: number
    total: number
    list: T[]
  }
}
