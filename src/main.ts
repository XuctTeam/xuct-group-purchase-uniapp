/*
 * @Author: Derek Xu
 * @Date: 2023-03-21 10:14:41
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-04-07 09:59:42
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
import * as Pinia from 'pinia'

export function createApp() {
  const app = createSSRApp(App).use(tmui, config)
  setupRouter(app)
  return {
    app,
    Pinia
  }
}
