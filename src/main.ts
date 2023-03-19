/*
 * @Author: Derek Xu
 * @Date: 2023-03-17 09:13:39
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-03-19 18:10:30
 * @FilePath: \xuct-group-purchase-uniapp\src\main.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
import { createSSRApp } from 'vue'
import tmui from './tmui'
import App from './App.vue'
import config from './config'
import pinia from './store/plugins'
export function createApp() {
  const app = createSSRApp(App)
  //app.use(pinia)
  app.use(tmui, config)
  return {
    app,
    pinia
  }
}
