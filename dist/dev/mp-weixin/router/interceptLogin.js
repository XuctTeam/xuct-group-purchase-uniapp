"use strict";
const common_vendor = require("../common/vendor.js");
const constant_white = require("../constant/white.js");
const store_user = require("../store/user.js");
const tmui_tool_function_util = require("../tmui/tool/function/util.js");
let intercept;
function bindInterceptLogin() {
  destroyInterceptLogin();
  intercept = common_vendor.Et(async (to, from, next) => {
    const store = store_user.useUserHook();
    const { logged } = store;
    if (!logged && constant_white.PAGE_NEED.includes(to.url)) {
      common_vendor.Rt(() => {
        tmui_tool_function_util.routerTo("/pages/member/login/index");
      });
      return;
    }
    next();
  });
}
function destroyInterceptLogin() {
  if (intercept) {
    intercept();
    intercept = null;
  }
}
exports.bindInterceptLogin = bindInterceptLogin;
