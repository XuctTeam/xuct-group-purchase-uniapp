/*
 * @Author: Derek Xu
 * @Date: 2023-06-01 13:22:27
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-06-01 15:39:45
 * @FilePath: \xuct-group-purchase-uniapp\src\components\uv-ui\common\utils\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */

function isObjectLike(value: any) {
  return typeof value === 'object' && value !== null
}

function getTag(value: any) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return toString.call(value)
}

export function isArray(value: any) {
  return Array.isArray(value)
}

export function isNumber(value: any) {
  return typeof value === 'number' || (isObjectLike(value) && getTag(value) == '[object Number]')
}

export function setRpx(val: any): string {
  return isArray(val) ? val.map(setRpx).join(' ') : isNumber(val) ? `${val}rpx` : val
}
