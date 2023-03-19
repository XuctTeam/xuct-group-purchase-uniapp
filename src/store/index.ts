/*
 * @Author: Derek Xu
 * @Date: 2023-03-19 14:23:29
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-03-19 17:52:18
 * @FilePath: \xuct-group-purchase-uniapp\src\store\index.ts
 * @Description:
 * Copyright (c) 2022 by 楚恬商行, All Rights Reserved.
 */

import { defineStore, acceptHMRUpdate } from 'pinia'

type StateType = {
  user?: User.User
  token?: string
}
export const useStore = defineStore('useStore', {
  persist: {
    key: 'pinia',
    paths: ['user', 'token']
  },
  state: (): StateType => ({
    user: undefined,
    token: ''
  }),
  actions: {
      setData<T extends keyof StateType>({ key, value }: { key: T; value: any }) {
          debugger
      this[key] = value
      },
      
      setToken(value: string) {
          this.token = value
      }
  }
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
}
