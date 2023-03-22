/*
 * @Author: Derek Xu
 * @Date: 2023-03-21 10:14:41
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-03-22 15:48:44
 * @FilePath: \xuct-group-purchase-uniapp\vite.config.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tmuiCss from './src/tmui/tool/vitePlugs/tmuiCss'
import { resolve } from 'path'
import h5ProdEffectPlugin from 'uni-vite-plugin-h5-prod-effect'
// import Components from 'unplugin-vue-components/vite'
// https://vitejs.dev/config/
export default defineConfig({
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
      '/rest': {
        target: 'http://localhost:6500',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '/api')
      }
    }
  },
  plugins: [uni(), vueJsx(), h5ProdEffectPlugin(), tmuiCss()]
})
