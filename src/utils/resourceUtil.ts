/*
 * @Author: Derek Xu
 * @Date: 2023-03-15 18:01:45
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-03-15 18:03:08
 * @FilePath: \xct-group-purchase-uniapp\src\utils\resourceUtil.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
export default class resourceUtil {
  static getAssetURL = (image: string) => {
    return new URL(`../assets/images/${image}`, import.meta.url).href
  }
}
