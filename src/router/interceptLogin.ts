/*
 * @Author: Derek Xu
 * @Date: 2023-03-22 09:15:21
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-04-07 09:37:08
 * @FilePath: \xuct-group-purchase-uniapp\src\router\interceptLogin.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
import { beforeEach, afterNotNext } from 'uni-crazy-router'
import { PAGE_NEED } from '@/constant/white'
import { useUserHook } from '@/store'
import * as u from '@/tmui/tool/function/util'

let intercept: any
export function bindInterceptLogin() {
  destroyInterceptLogin()
  intercept = beforeEach(async (to, from, next) => {
    const store = useUserHook()
    const { logged } = store
    if (!logged && PAGE_NEED.includes(to.url)) {
      afterNotNext(() => {
        // 拦截路由，并且跳转去登录页
        u.routerTo('/pages/member/login/index')
      })
      return // 拦截路由，不执行next
    }
    next()
  })
}

export function destroyInterceptLogin() {
  if (intercept) {
    intercept() // 销毁拦截
    intercept = null
  }
}
