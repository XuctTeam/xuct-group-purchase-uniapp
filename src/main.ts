/*
 * @Author: Derek Xu
 * @Date: 2023-03-09 20:45:02
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-03-09 20:48:46
 * @FilePath: \xct-group-purchase-uniapp\src\main.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
import { createSSRApp } from 'vue'
import tmui from './tmui'
import App from './App.vue'
import { pinia } from '@/store'

export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia)
  app.use(tmui)
  return {
    app
  }
}
