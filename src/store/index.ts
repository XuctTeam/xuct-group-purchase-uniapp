/*
 * @Author: Derek Xu
 * @Date: 2023-03-09 17:47:09
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-03-09 18:08:52
 * @FilePath: \xct-group-purchase-uniapp\src\store\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
import { defineStore, createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

type StateType = {
  user?: User.User
  token?: string
}
export default defineStore('useStore', {
  persist: {
    key: 'pinia',
    paths: ['user', 'token']
  },
  state: (): StateType => ({
    user: undefined,
    token: undefined
  }),
  actions: {
    setData<T extends keyof StateType>({ key, value }: { key: T; value: any }) {
      this[key] = value
    }
  }
})

export const pinia = createPinia().use(
  createPersistedState({
    storage: {
      getItem(key: string): string | null {
        return uni.getStorageSync(key)
      },
      setItem(key: string, value: string) {
        uni.setStorageSync(key, value)
      }
    }
  })
)
