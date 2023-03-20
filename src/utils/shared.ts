/*
 * @Author: Derek Xu
 * @Date: 2023-03-20 16:17:56
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-03-20 16:18:05
 * @FilePath: \xuct-group-purchase-uniapp\src\utils\shared.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
// 防止快速点击
let lastClickTime = 0

export function isFastClick(num = 1000) {
  const time = new Date().getTime()
  if (time - lastClickTime > num) return false
  lastClickTime = time
  return true
}

// 解析 path
export function parseUrl(fullPath: string) {
  const [path, queryStr] = fullPath.split('?')
  const name = path.slice(path.lastIndexOf('/') + 1)
  const query: any = {}
  queryStr
    ?.split('&')
    .map(i => i.split('='))
    .forEach(i => (query[i[0]] = i[1]))
  return {
    name,
    path,
    query
  }
}

// 还原url
export function restoreUrl(path: string, query: any) {
  let count = 0
  for (const key in query) {
    path += `${count === 0 ? '?' : '&'}${key}=${query[key]}`
    count += 1
  }
  return path
}
