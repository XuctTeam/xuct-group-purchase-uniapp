/*
 * @Author: Derek Xu
 * @Date: 2023-03-17 17:04:50
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-03-17 17:52:27
 * @FilePath: \xuct-group-purchase-uniapp\src\config\env.ts
 * @Description:
 *
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved.
 */
import dev from './.env.dev'
import prod from './.env.prod'

const NODE_ENV = import.meta.env.MODE

let ENV_VAR: API.ENV = {
  BASE_API_URL: ''
}
if (NODE_ENV === 'dev') {
  ENV_VAR = dev
} else if (NODE_ENV === 'pro') {
  ENV_VAR = prod
}

export default ENV_VAR
