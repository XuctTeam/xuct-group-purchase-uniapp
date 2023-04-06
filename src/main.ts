/*
 * @Author: Derek Xu
 * @Date: 2023-03-21 10:14:41
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-04-06 18:08:00
 * @FilePath: \xuct-group-purchase-uniapp\src\main.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
import { createSSRApp } from 'vue'
import tmui from './tmui'
import App from './App.vue'
import config from '@/config'
import { setupRouter } from './router'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist-uni'

export function createApp() {
  const app = createSSRApp(App)
  const pinia = createPinia()
  pinia.use(piniaPersist)
  app.use(tmui, config)
  app.use(pinia)
  setupRouter(app)
  return {
    app
  }
}
