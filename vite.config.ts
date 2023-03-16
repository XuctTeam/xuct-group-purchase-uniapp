/*
 * @Author: Derek Xu
 * @Date: 2023-03-16 21:29:21
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-03-16 22:14:57
 * @FilePath: \xuct-group-purchase-uniapp\vite.config.ts
 * @Description:
 * Copyright (c) 2022 by 楚恬商行, All Rights Reserved.
 */
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tmuiCss from './src/tmui/tool/vitePlugs/tmuiCss'
import { resolve } from 'path'
// import Components from 'unplugin-vue-components/vite'
// https://vitejs.dev/config/
export default defineConfig({
  dts: true,
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  },
  server: {
    // 选项写法
    proxy: {
      '/pag': {
        target: 'https://cdn.tmui.design',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '/api')
      }
    }
  },
  plugins: [uni(), vueJsx(), tmuiCss()]
})
