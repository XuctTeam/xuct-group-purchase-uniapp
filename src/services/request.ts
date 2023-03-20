/*
 * @Author: Derek Xu
 * @Date: 2023-03-17 16:49:47
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-03-20 19:03:46
 * @FilePath: \xuct-group-purchase-uniapp\src\services\request.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */

import ajax from 'uni-ajax'
import useStore from '@/store/user'
import codeMessage from './codeMessage'
import ENV_CONFIG from '@/config/env'

interface RequestTaskQuery<T = any> {
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

// 刷新 Token 请求
const refreshToken = () => instance.post('/oauth/token')

// 刷新 Token 请求处理，参数为刷新成功后的回调函数
const refreshTokenHandler = (afresh: any) => {
  // 如果当前是在请求刷新 Token 中，则将期间的请求暂存起来
  if (isRefreshing) {
    return new Promise((resolve: any, reject: any) => {
      requestQueue.push({ resolve, reject })
    }).then(afresh)
  }

  isRefreshing = true

  return new Promise((resolve, reject) => {
    refreshToken()
      // 假设请求成功接口返回的 code === 0 为刷新成功，其他情况都是刷新失败
      .then(res => (res.data.code === 0 ? res : Promise.reject(res)))
      .then(res => {
        uni.setStorageSync('TOKEN', res.data.data)
        resolve(afresh?.())
        executeQueue(null)
      })
      .catch(err => {
        uni.removeStorageSync('TOKEN')
        reject(err)
        executeQueue(err)
      })
      .finally(() => {
        isRefreshing = false
      })
  })
}

instance.interceptors.request.use(
  config => {
    const store = useStore()
    const token = store.token
    token && (config.header['Authorization'] = token)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    const { statusCode } = response
    // 假设接口返回的 code === 401 时则需要刷新 Token
    if (statusCode === 401) {
      return refreshTokenHandler(() => instance(response.config))
    }
    const { code, msg } = response.data

    if (code !== 200) {
      uni.showToast({
        icon: 'error',
        title: msg
      })
      return Promise.reject({
        error: code,
        message: msg
      })
    }
    return response.data
  },
  error => {
    const { errno } = error
    const _tips = codeKeys[errno] || '请求异常！'
    uni.showToast({
      title: _tips,
      icon: 'error'
    })
    return Promise.reject(error)
  }
)

export default instance
