/*
 * @Author: Derek Xu
 * @Date: 2023-03-09 17:47:09
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-03-19 17:57:26
 * @FilePath: \xuct-group-purchase-uniapp\src\store\plugins.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

 const pinia = createPinia().use(
  createPersistedState({
    storage: {
      getItem(key: string): string | null {
        debugger
        return uni.getStorageSync(key)
      },
      setItem(key: string, value: string) {
        debugger
        uni.setStorageSync(key, value)
      }
    }
  })
)

export default pinia