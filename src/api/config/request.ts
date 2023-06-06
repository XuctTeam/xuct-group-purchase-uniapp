/*
 * @Author: Derek Xu
 * @Date: 2023-03-17 16:49:47
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-06-06 19:02:54
 * @FilePath: \xuct-group-purchase-uniapp\src\api\config\request.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */

import ajax from 'uni-ajax'
import { useUserHook } from '@/store'
import codeMessage from './codeMessage'
import ENV_CONFIG from '@/config/env'
import { API_NOT_TOKEN } from '@/constant/white'
import { message as toast } from '@/utils/dialog'
import { showFullScreenLoading, tryHideFullScreenLoading } from './serviceLoading'

interface RequestTaskQuery {
  resolve: any
  reject: any
}

const { BASE_API_URL } = ENV_CONFIG

const codeKeys = codeMessage as { [key: string]: any }
const instance = ajax.create({
  baseURL: BASE_API_URL
})

let isRefreshing = false // 当前是否在请求刷新 Token
let requestQueue: RequestTaskQuery[] = [] // 将在请求刷新 Token 中的请求暂存起来，等刷新 Token 后再重新请求

// 执行暂存起来的请求
const executeQueue = (error: any) => {
  requestQueue.forEach((promise: RequestTaskQuery) => {
    if (error) {
      promise.reject(error)
    } else {
      promise.resolve()
    }
  })

  requestQueue = []
}

// 验证 Token 请求
const checkToken = () => instance.post('/api/v1/login/token/check')

// 验证 Token 请求处理，参数为刷新成功后的回调函数
const checkTokenHandler = (afresh: any) => {
  // 如果当前是在请求刷新 Token 中，则将期间的请求暂存起来
  if (isRefreshing) {
    return new Promise((resolve: any, reject: any) => {
      requestQueue.push({ resolve, reject })
    }).then(afresh)
  }

  isRefreshing = true
  const store = useUserHook()

  return new Promise((resolve, reject) => {
    checkToken()
      // 假设请求成功接口返回的 code === 0 为刷新成功，其他情况都是刷新失败
      .then((res: any) => {
        return res.code === 200 && res.data ? res : Promise.reject(res)
      })
      .then(() => {
        resolve(afresh?.())
        executeQueue(null)
      })
      .catch((err) => {
        store.setLogout()
        reject(err)
        executeQueue(err)
      })
      .finally(() => {
        isRefreshing = false
      })
  })
}

instance.interceptors.request.use(
  (config: any) => {
    const store = useUserHook()
    const token = store.getToken
    const url = config.url
    config.noLoading || showFullScreenLoading()
    if (url && !API_NOT_TOKEN.includes(url) && token) {
      config.header['satoken'] = 'Bearer ' + token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    const { code, message } = response.data
    tryHideFullScreenLoading()
    if (code !== 200) {
      toast({
        title: message || '请求异常',
        icon: 'error'
      })
      return Promise.reject({
        error: code,
        message
      })
    }
    return response.data
  },
  (error) => {
    tryHideFullScreenLoading()
    const { statusCode } = error
    // 假设接口返回的 code === 401 时则需要刷新 Token
    if (statusCode === 401) {
      return checkTokenHandler(() => instance(error.config))
    }
    const _tips = codeKeys[statusCode] || '请求异常！'
    toast({
      title: _tips,
      icon: 'error'
    })
    return Promise.reject(error)
  }
)

export default instance
