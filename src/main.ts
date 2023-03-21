/*
 * @Author: Derek Xu
 * @Date: 2023-03-21 10:14:41
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-03-21 12:13:09
 * @FilePath: \xuct-group-purchase-uniapp\src\main.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'
import tmui from './tmui'
import App from './App.vue'
import config from '@/config'

export function createApp() {
  const app = createSSRApp(App)
  app.use(tmui, config)
  return {
    app,
    Pinia
  }
}
