"use strict";
const common_vendor = require("../common/vendor.js");
const tmui_tool_function_util = require("../tmui/tool/function/util.js");
const constant_index = require("../constant/index.js");
const userStore = common_vendor.defineStore("userStore", () => {
  const token = common_vendor.ref(tmui_tool_function_util.getCookie(constant_index.StoreEnum.TOKEN) || "");
  const userInfo = common_vendor.reactive(tmui_tool_function_util.getCookie(constant_index.StoreEnum.USER) || { openId: "" });
  const logged = common_vendor.computed(() => {
    const { openId } = userInfo;
    return !!(token.value && openId);
  });
  const getToken = common_vendor.computed(() => token.value);
  const getUserId = common_vendor.computed(() => userInfo.openId);
  const getUserInfo = common_vendor.computed(() => userInfo);
  function setToken(_token) {
    token.value = _token;
    tmui_tool_function_util.setCookie(constant_index.StoreEnum.TOKEN, token.value);
  }
  function setUserInfo(user) {
    Object.assign(userInfo, { ...user });
    tmui_tool_function_util.setCookie(constant_index.StoreEnum.USER, userInfo);
  }
  return { getToken, logged, getUserId, getUserInfo, setToken, setUserInfo };
});
function useUserHook() {
  return userStore();
}
exports.useUserHook = useUserHook;
