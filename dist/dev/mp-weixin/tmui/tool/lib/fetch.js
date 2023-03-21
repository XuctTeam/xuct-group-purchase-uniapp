"use strict";
const common_vendor = require("../../../common/vendor.js");
let config = {
  url: "",
  data: {},
  statusCode: 200,
  header: {},
  method: "POST",
  timeout: 6e4,
  dataType: "json",
  responseType: "text",
  sslVerify: true,
  withCredentials: false,
  firstIpv4: false
};
function request(cog = config, complete, beforeRequest2, afterRequest2) {
  let newConfig = { ...config, ...cog };
  return new Promise(async (resolve, reject) => {
    if (typeof beforeRequest2 === "function") {
      let opts = await beforeRequest2(newConfig);
      if (typeof opts !== "object") {
        opts = {};
      }
      newConfig = { ...newConfig, ...opts };
    }
    common_vendor.index.request({
      url: newConfig.url || "",
      data: newConfig.data,
      header: newConfig.header,
      method: newConfig.method,
      timeout: newConfig.timeout,
      dataType: newConfig.dataType,
      responseType: newConfig.responseType,
      sslVerify: newConfig.sslVerify,
      withCredentials: newConfig.withCredentials,
      firstIpv4: newConfig.firstIpv4,
      async success(result) {
        var _a;
        if (result.statusCode !== (newConfig == null ? void 0 : newConfig.statusCode)) {
          reject(result);
          return;
        }
        if (typeof afterRequest2 === "function") {
          let opts = await afterRequest2(result);
          try {
            if (typeof opts !== "object") {
              opts = result;
            }
            if (typeof opts === "object" && ((_a = Object.keys(opts)) == null ? void 0 : _a.length) == 0) {
              opts = result;
            }
          } catch (e) {
            console.error("tmui:", e);
          }
          result = { ...opts };
        }
        resolve(result);
      },
      fail(result) {
        reject(result);
      },
      complete(result) {
        if (typeof complete === "function") {
          complete(result);
        }
      }
    });
  });
}
var beforeRequest = (val) => val;
var afterRequest = (val) => val;
class fetchNet {
  constructor(cog, beforeRequestFun, afterRequesFunt) {
    config = { ...config, ...cog || {} };
    if (typeof beforeRequestFun == "function") {
      beforeRequest = beforeRequestFun;
    }
    if (typeof afterRequesFunt == "function") {
      afterRequest = afterRequesFunt;
    }
  }
  static get(url, data = {}, opts = {}) {
    let cfg = { ...config, ...opts || {}, url, method: "GET", data };
    return request(cfg);
  }
  static post(url, data = {}, opts = {}) {
    let cfg = { ...config, ...opts || {}, url, method: "POST", data };
    return request(cfg);
  }
  static async request(cog = config, beforeFun, afterFun, complete) {
    let newConfig = { ...config, ...cog };
    if (typeof beforeFun == "function") {
      let testFun = await beforeFun();
      let cb = { errMsg: "\u4E2D\u6B62\u8BF7\u6C42" };
      if (!testFun)
        return cb;
    }
    return request(newConfig, complete, beforeFun || beforeRequest, afterFun || afterRequest);
  }
}
exports.fetchNet = fetchNet;
