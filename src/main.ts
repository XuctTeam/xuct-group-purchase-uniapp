/*
 * @Author: Derek Xu
 * @Date: 2023-03-16 21:29:18
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-03-16 22:20:20
 * @FilePath: \xuct-group-purchase-uniapp\src\main.ts
 * @Description:
 * Copyright (c) 2022 by 楚恬商行, All Rights Reserved.
 */
import { createSSRApp } from 'vue'

import { pinia } from '@/store'
import tmui from './tmui'
import App from './App.vue'
import config from './config/config'

export function createApp() {
  const app = createSSRApp(App)
  app.use(tmui, config)
  return {
    app,
    pinia
  }
}
