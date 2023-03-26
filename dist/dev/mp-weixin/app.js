"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const tmui_index = require("./tmui/index.js");
const config_index = require("./config/index.js");
const router_index = require("./router/index.js");
require("./tmui/tool/lib/fetch.js");
require("./tmui/tool/function/util.js");
require("./tmui/tool/function/preview.js");
require("./tmui/tool/lib/language.js");
require("./tmui/tool/lib/share.js");
require("./tmui/tool/lib/tmuiconfigDefault.js");
require("./tmui/tool/router/index.js");
require("./router/interceptLogin.js");
require("./constant/white.js");
require("./store/user.js");
require("./constant/index.js");
if (!Math) {
  "./pages/member/index/index.js";
  "./pages/member/setting/index.js";
  "./pages/index/index.js";
  "./pages/member/login/index.js";
  "./pages/member/userinfo/index.js";
  "./pages/member/address/list.js";
  "./pages/member/address/index.js";
}
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return {};
}
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(tmui_index.tmui, config_index.config);
  router_index.setupRouter(app);
  return {
    app,
    Pinia: common_vendor.Pinia
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
