/*
 * @Author: Derek Xu
 * @Date: 2023-03-16 21:29:18
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-03-19 00:39:31
 * @FilePath: \xuct-group-purchase-uniapp\src\env.d.ts
 * @Description:
 * Copyright (c) 2022 by 楚恬商行, All Rights Reserved.
 */
/// <reference types="vite/client" />
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
