"use strict";
const common_vendor = require("../common/vendor.js");
const tmui_tool_function_util = require("../tmui/tool/function/util.js");
const constant_index = require("../constant/index.js");
const userStore = common_vendor.defineStore("userStore", () => {
  const token = common_vendor.ref(tmui_tool_function_util.getCookie(constant_index.StoreEnum.TOKEN) || "");
  const userInfo = common_vendor.ref(tmui_tool_function_util.getCookie(constant_index.StoreEnum.USER) || { openId: "" });
  const logged = common_vendor.computed$1(() => {
    const { openId } = userInfo;
    return !!(token.value && openId);
  });
  const getToken = common_vendor.computed$1(() => token.value);
  const userId = common_vendor.computed$1(() => userInfo.openId);
  const getUserInfo = common_vendor.computed$1(() => userInfo);
  function setUserInfo(token2, user) {
    token2 = token2;
    Object.assign(userInfo, user);
    tmui_tool_function_util.setCookie(constant_index.StoreEnum.TOKEN, token2);
    tmui_tool_function_util.setCookie(constant_index.StoreEnum.USER, userInfo);
  }
  return { token, userInfo, logged, getToken, userId, getUserInfo, setUserInfo };
});
function useUserHook() {
  return userStore();
}
exports.useUserHook = useUserHook;
