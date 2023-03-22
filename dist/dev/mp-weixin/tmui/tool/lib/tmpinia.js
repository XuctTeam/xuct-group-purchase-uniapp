"use strict";
var _a, _b;
const common_vendor = require("../../../common/vendor.js");
const tmui_tool_theme_theme = require("../theme/theme.js");
const tmui_tool_function_util = require("../function/util.js");
let pdefault_cookies_color = tmui_tool_function_util.getCookie("setTmVuetifyColor") || "";
let pdefault_cookies_black = tmui_tool_function_util.getCookie("setTmVuetifyBlack");
let pdefault_cookies_local = tmui_tool_function_util.getCookie("setTmVuetifyLocal") || "zh-Hans";
let pdefault_cookies_colorArrayList = tmui_tool_function_util.getCookie("colorArrayList");
let dark = typeof pdefault_cookies_black === "boolean" ? pdefault_cookies_black : false;
let themeObj = new tmui_tool_theme_theme.theme.themeColors();
if (pdefault_cookies_colorArrayList) {
  const result2 = pdefault_cookies_colorArrayList.filter((item) => themeObj.colors.every((subItem) => subItem.name !== item.name));
  themeObj = new tmui_tool_theme_theme.theme.themeColors([...themeObj.colors, ...result2]);
}
const colorArray = themeObj.colors;
const os = (_b = (_a = common_vendor.index.getSystemInfoSync()) == null ? void 0 : _a.osName) != null ? _b : "";
tmui_tool_function_util.setCookie("colorArrayList", colorArray);
const useTmpiniaStore = common_vendor.defineStore("tmpinia", {
  state: () => {
    return {
      tmStore: {
        color: pdefault_cookies_color,
        dark,
        tmVueTifly_pages: "",
        tmVueTifly_pagesIndex: "",
        os,
        wxshareConfig_miniMp: {
          title: "",
          desc: "",
          imageUrl: "",
          path: "",
          copyLink: "",
          query: {}
        },
        colorList: colorArray,
        local: pdefault_cookies_local
      }
    };
  },
  getters: {
    getAutoDark: (state) => {
      var _a2;
      let pdefault_cookies_autoDark = (_a2 = tmui_tool_function_util.getCookie("setTmVuetifyAutoDark")) != null ? _a2 : void 0;
      let autoDark = typeof pdefault_cookies_autoDark === "boolean" ? pdefault_cookies_autoDark : state.tmuiConfig.autoDark;
      return autoDark;
    }
  },
  actions: {
    setPageNow(url) {
      this.tmStore = {
        ...this.tmStore,
        tmVueTifly_pages: url
      };
    },
    setPageNowIndex(index) {
      this.tmStore = {
        ...this.tmStore,
        tmVueTifly_pagesIndex: index
      };
    },
    setTmVuetifyDark(dark2) {
      dark2 = typeof dark2 !== "boolean" ? false : dark2;
      tmui_tool_function_util.setCookie("setTmVuetifyBlack", dark2);
      this.tmStore = {
        ...this.tmStore,
        dark: dark2
      };
    },
    setTmAutoDark(autoDark) {
      var _a2, _b2;
      tmui_tool_function_util.setCookie("setTmVuetifyAutoDark", autoDark);
      this.tmuiConfig = {
        ...this.tmuiConfig,
        autoDark
      };
      if (autoDark) {
        let nowstrdark = "";
        nowstrdark = (_b2 = (_a2 = common_vendor.index.getSystemInfoSync()) == null ? void 0 : _a2.hostTheme) != null ? _b2 : "";
        this.setTmVuetifyDark(nowstrdark == "dark" ? true : false);
      }
    },
    setWxShare(cfg) {
      let pcf = cfg || {};
      if (typeof pcf !== "object" || Array.isArray(cfg))
        pcf = {};
      this.tmStore = {
        ...this.tmStore,
        wxshareConfig_miniMp: {
          ...this.tmStore.wxshareConfig_miniMp,
          ...pcf
        }
      };
    },
    setTmVuetifyTheme(color) {
      let defaultColorName = color;
      if (!defaultColorName || defaultColorName == "" || tmui_tool_theme_theme.theme.isCssColor(defaultColorName)) {
        defaultColorName = "";
      }
      tmui_tool_function_util.setCookie("setTmVuetifyColor", defaultColorName);
      this.tmStore = { ...this.tmStore, color: defaultColorName };
    },
    setTmVuetifyAddTheme(colorName, color, isSet = true) {
      this.tmStore = {
        ...this.tmStore,
        colorList: themeObj.add(colorName, color)
      };
      tmui_tool_function_util.setCookie("colorArrayList", this.tmStore.colorList);
      if (isSet) {
        this.setTmVuetifyTheme(colorName);
      }
    },
    setTmLocal(language) {
      language = language || "zh-Hans";
      tmui_tool_function_util.setCookie("setTmVuetifyLocal", language);
      this.tmStore = {
        ...this.tmStore,
        local: language
      };
    }
  }
});
exports.useTmpiniaStore = useTmpiniaStore;
