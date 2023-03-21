"use strict";
const common_vendor = require("../common/vendor.js");
const store_user = require("../store/user.js");
const services_codeMessage = require("./codeMessage.js");
const config_env = require("../config/env.js");
const { BASE_API_URL } = config_env.ENV_CONFIG;
const codeKeys = services_codeMessage.codeMessage;
const instance = common_vendor.ajax.create({
  baseURL: BASE_API_URL
});
let isRefreshing = false;
let requestQueue = [];
const executeQueue = (error) => {
  requestQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve();
    }
  });
  requestQueue = [];
};
const refreshToken = () => instance.post("/oauth/token");
const refreshTokenHandler = (afresh) => {
  if (isRefreshing) {
    return new Promise((resolve, reject) => {
      requestQueue.push({ resolve, reject });
    }).then(afresh);
  }
  isRefreshing = true;
  return new Promise((resolve, reject) => {
    refreshToken().then((res) => res.data.code === 0 ? res : Promise.reject(res)).then((res) => {
      common_vendor.index.setStorageSync("TOKEN", res.data.data);
      resolve(afresh == null ? void 0 : afresh());
      executeQueue(null);
    }).catch((err) => {
      common_vendor.index.removeStorageSync("TOKEN");
      reject(err);
      executeQueue(err);
    }).finally(() => {
      isRefreshing = false;
    });
  });
};
instance.interceptors.request.use(
  (config) => {
    const store = store_user.useUserHook();
    const token = store.token;
    token && (config.header["Authorization"] = token);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (response) => {
    const { statusCode } = response;
    if (statusCode === 401) {
      return refreshTokenHandler(() => instance(response.config));
    }
    const { code, msg } = response.data;
    if (code !== 200) {
      common_vendor.index.$tm.u.toast(msg, true, "error");
      return Promise.reject({
        error: code,
        message: msg
      });
    }
    return response.data;
  },
  (error) => {
    const { errno } = error;
    const _tips = codeKeys[errno] || "\u8BF7\u6C42\u5F02\u5E38\uFF01";
    common_vendor.index.$tm.u.toast(_tips, true, "error");
    return Promise.reject(error);
  }
);
exports.instance = instance;
