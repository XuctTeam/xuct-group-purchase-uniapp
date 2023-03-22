"use strict";
var _a, _b;
const common_vendor = require("../common/vendor.js");
const tmui_tool_lib_fetch = require("./tool/lib/fetch.js");
const tmui_tool_function_util = require("./tool/function/util.js");
const tmui_tool_lib_language = require("./tool/lib/language.js");
const tmui_tool_lib_share = require("./tool/lib/share.js");
const tmui_tool_lib_tmuiconfigDefault = require("./tool/lib/tmuiconfigDefault.js");
const tmui_tool_function_preview = require("./tool/function/preview.js");
const pages$1 = [
  {
    path: "pages/member/index/index",
    style: {
      navigationBarTitleText: "",
      navigationStyle: "custom",
      titlePenetrate: "YES",
      transparentTitle: "always"
    }
  },
  {
    path: "pages/member/setting/index",
    style: {
      navigationBarTitleText: "",
      navigationStyle: "custom",
      titlePenetrate: "YES",
      transparentTitle: "always"
    }
  },
  {
    path: "pages/index/index",
    style: {
      navigationBarTitleText: "",
      navigationStyle: "custom",
      titlePenetrate: "YES",
      transparentTitle: "always"
    }
  },
  {
    path: "pages/member/login/index",
    style: {
      navigationBarTitleText: "",
      navigationStyle: "custom",
      titlePenetrate: "YES",
      transparentTitle: "always"
    }
  },
  {
    path: "pages/member/userinfo/index",
    style: {
      navigationBarTitleText: "",
      navigationStyle: "custom",
      titlePenetrate: "YES",
      transparentTitle: "always"
    }
  },
  {
    path: "pages/member/address/list",
    style: {
      navigationBarTitleText: "",
      navigationStyle: "custom",
      titlePenetrate: "YES",
      transparentTitle: "always"
    }
  }
];
const globalStyle = {
  navigationBarTextStyle: "black",
  navigationBarTitleText: "uni-app",
  navigationBarBackgroundColor: "#FFFFFF",
  backgroundColor: "#FFFFFF"
};
const condition = {
  current: 0,
  list: [
    {
      name: "",
      path: "",
      query: ""
    }
  ]
};
const PageJsonInit = {
  pages: pages$1,
  globalStyle,
  condition
};
let pages = [];
if (typeof (PageJsonInit == null ? void 0 : PageJsonInit.pages) == "undefined") {
  PageJsonInit.pages = [];
}
PageJsonInit.pages.forEach((el) => {
  var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j;
  let customType = (_b2 = (_a2 = el == null ? void 0 : el.style) == null ? void 0 : _a2.navigationStyle) != null ? _b2 : "default";
  let bg = ((_f = (_e = (_c = el.style) == null ? void 0 : _c.navigationBarBackgroundColor) != null ? _e : (_d = PageJsonInit == null ? void 0 : PageJsonInit.globalStyle) == null ? void 0 : _d.navigationBarBackgroundColor) != null ? _f : "#FFFFFF") || "#FFFFFF";
  let txtColor = ((_j = (_i = (_g = el.style) == null ? void 0 : _g.navigationBarTextStyle) != null ? _i : (_h = PageJsonInit == null ? void 0 : PageJsonInit.globalStyle) == null ? void 0 : _h.navigationBarTextStyle) != null ? _j : "black") || "black";
  pages.push({
    path: el.path,
    custom: customType,
    navigationBarBackgroundColor: bg,
    navigationBarTextStyle: txtColor
  });
});
if (Array.isArray((_a = PageJsonInit == null ? void 0 : PageJsonInit.subPackages) != null ? _a : null)) {
  PageJsonInit == null ? void 0 : PageJsonInit.subPackages.forEach((el) => {
    let rootPath = el.root;
    el.pages.forEach((el2) => {
      var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j;
      let elany = el2;
      let bg = ((_d = (_c = (_a2 = el2.style) == null ? void 0 : _a2.navigationBarBackgroundColor) != null ? _c : (_b2 = PageJsonInit == null ? void 0 : PageJsonInit.globalStyle) == null ? void 0 : _b2.navigationBarBackgroundColor) != null ? _d : "#FFFFFF") || "#FFFFFF";
      let txtColor = ((_h = (_g = (_e = el2.style) == null ? void 0 : _e.navigationBarTextStyle) != null ? _g : (_f = PageJsonInit == null ? void 0 : PageJsonInit.globalStyle) == null ? void 0 : _f.navigationBarTextStyle) != null ? _h : "black") || "black";
      pages.push({
        path: rootPath + "/" + elany.path,
        custom: (_j = (_i = elany == null ? void 0 : elany.style) == null ? void 0 : _i.navigationStyle) != null ? _j : "default",
        navigationBarBackgroundColor: bg,
        navigationBarTextStyle: txtColor
      });
    });
  });
}
let pagers = PageJsonInit;
let tabBar = (_b = pagers == null ? void 0 : pagers.tabBar) != null ? _b : {
  color: "",
  selectedColor: "",
  borderStyle: "",
  backgroundColor: "",
  list: []
};
let cusutomIconList = [];
let $tm = {
  tabBar,
  pages,
  isColor: (color) => {
    const reg1 = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    const reg2 = /^(rgb|RGB|rgba|RGBA)/;
    return reg1.test(color) || reg2.test(color);
  },
  u: { ...tmui_tool_function_util.util, preview: tmui_tool_function_preview.preview },
  language: tmui_tool_lib_language.language,
  fetch: tmui_tool_lib_fetch.fetchNet,
  tmicon: [
    {
      font: "tmicon",
      prefix: "tmicon-",
      fontJson: cusutomIconList
    }
  ],
  config: tmui_tool_lib_tmuiconfigDefault.tmuiconfigdefault
};
const tmui = {
  install: (app, options = {}) => {
    common_vendor.index.addInterceptor("navigateTo", {
      invoke(result) {
        common_vendor.nextTick(() => {
          linsInko({
            path: result.url,
            context: null,
            openType: "navigateTo"
          });
        });
      },
      success(result) {
      }
    });
    common_vendor.index.addInterceptor("redirectTo", {
      success(result) {
        var _a2, _b2, _c;
        let pages2 = getCurrentPages().pop();
        let path = (_a2 = pages2 == null ? void 0 : pages2.route) != null ? _a2 : "";
        let msg = (_b2 = result.errMsg) != null ? _b2 : "";
        let opentype = (_c = msg.split(":")[0]) != null ? _c : "";
        linsInko({
          path,
          context: null,
          openType: opentype
        });
      }
    });
    common_vendor.index.addInterceptor("reLaunch", {
      success(result) {
        var _a2, _b2, _c;
        let pages2 = getCurrentPages().pop();
        let path = (_a2 = pages2 == null ? void 0 : pages2.route) != null ? _a2 : "";
        let msg = (_b2 = result.errMsg) != null ? _b2 : "";
        let opentype = (_c = msg.split(":")[0]) != null ? _c : "";
        linsInko({
          path,
          context: null,
          openType: opentype
        });
      }
    });
    common_vendor.index.addInterceptor("navigateBack", {
      invoke(result) {
        common_vendor.nextTick(() => {
          var _a2, _b2, _c;
          let pages2 = getCurrentPages().pop();
          let path = (_a2 = pages2 == null ? void 0 : pages2.route) != null ? _a2 : "";
          let msg = (_b2 = result.errMsg) != null ? _b2 : "";
          (_c = msg.split(":")[0]) != null ? _c : "";
          linsInko({
            path,
            context: null,
            openType: "navigateBack"
          });
        });
      },
      success(result) {
      }
    });
    function linsInko(obj) {
      obj.path = obj.path[0] == "/" ? obj.path.substr(1) : obj.path;
    }
    options = tmui_tool_function_util.deepObjectMerge($tm.config, options);
    const pinia = common_vendor.createPinia();
    pinia.use((context) => {
      context.store.tmuiConfig = options;
      context.store.$state.tmuiConfig = options;
    });
    app.use(pinia);
    app.use(tmui_tool_lib_language.languageByGlobal());
    let appconfig = {};
    const { onShareAppMessage, onShareTimeline } = tmui_tool_lib_share.share();
    appconfig = { ...appconfig, onShareAppMessage, onShareTimeline };
    app.mixin({
      ...appconfig
    });
    $tm = {
      ...$tm,
      config: options
    };
    common_vendor.index.$tm = $tm;
    app.config.globalProperties.tm = $tm;
  }
};
exports.tmui = tmui;
