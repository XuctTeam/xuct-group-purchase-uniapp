"use strict";
const common_vendor = require("../../../common/vendor.js");
const tmui_tool_lib_tmpinia = require("../../tool/lib/tmpinia.js");
const tmui_tool_function_util = require("../../tool/function/util.js");
const tmui_tool_lib_minxs = require("../../tool/lib/minxs.js");
require("../../tool/theme/theme.js");
require("../../tool/theme/colortool.js");
require("../../tool/lib/interface.js");
require("../../tool/function/preview.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tm-app",
  props: {
    ...tmui_tool_lib_minxs.custom_props,
    theme: {
      type: String,
      default: "grey-5"
    },
    bgImg: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "grey-4"
    },
    darkColor: {
      type: String,
      default: "#050505"
    },
    blur: {
      type: [Boolean, String],
      default: false
    },
    navbar: {
      type: Object,
      default: () => {
        return {
          background: "",
          fontColor: ""
        };
      }
    },
    showMenu: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:showMenu"],
  setup(__props, { expose, emit: emits }) {
    var _a, _b;
    const props = __props;
    const store = tmui_tool_lib_tmpinia.useTmpiniaStore();
    const proxy = (_b = (_a = common_vendor.getCurrentInstance()) == null ? void 0 : _a.proxy) != null ? _b : null;
    const tmcfg = common_vendor.computed$1(() => store.tmStore);
    const isSetThemeOk = common_vendor.ref(false);
    const isDark = common_vendor.computed$1(() => tmui_tool_lib_minxs.computedDark(props, tmcfg.value));
    const tmcomputed = common_vendor.computed$1(
      () => tmui_tool_lib_minxs.computedTheme(props, isDark.value, tmcfg.value)
    );
    const _showMenu = common_vendor.ref(props.showMenu);
    const sysinfo = tmui_tool_function_util.getWindow();
    const sysinfoRef = common_vendor.ref(sysinfo);
    const _bgImg = common_vendor.computed$1(() => props.bgImg);
    const view_width = common_vendor.ref(sysinfo.width);
    let view_height = common_vendor.ref(sysinfo.height);
    let isTabbarPage = false;
    let nowPage = getCurrentPages().pop();
    const _blurEffect = common_vendor.computed$1(() => {
      if (props.blur === true && isDark.value)
        return "dark";
      if (props.blur === true && !isDark.value)
        return "extralight";
      return "none";
    });
    let appConfig = common_vendor.ref({
      width: view_width,
      height: view_height,
      theme: tmcomputed.value.backgroundColor,
      bgImg: props.bgImg,
      dark: isDark.value
    });
    common_vendor.onLoad((opts) => {
      var _a2, _b2;
      try {
        (_b2 = store.tmuiConfig.router) == null ? void 0 : _b2.useTmRouterAfter({
          path: (_a2 = nowPage == null ? void 0 : nowPage.route) != null ? _a2 : "",
          opts,
          context: proxy != null ? proxy : null
        });
      } catch (error) {
      }
    });
    common_vendor.onMounted(() => {
      _onInit();
    });
    function _onInit() {
      var _a2, _b2;
      let barLit = (_b2 = (_a2 = common_vendor.index.$tm.tabBar) == null ? void 0 : _a2.list) != null ? _b2 : [];
      for (let i = 0; i < barLit.length; i++) {
        if ((nowPage == null ? void 0 : nowPage.route) == barLit[i].pagePath) {
          isTabbarPage = true;
          break;
        }
      }
      if (store.getAutoDark) {
        osChangeTheme(sysinfo.sysinfo.hostTheme);
      } else {
        setAppStyle();
      }
    }
    common_vendor.watch(
      () => props.showMenu,
      () => {
        _showMenu.value = props.showMenu;
      }
    );
    common_vendor.watch([() => tmcfg.value.color, isDark], () => {
      isSetThemeOk.value = false;
      setAppStyle();
    });
    common_vendor.watch([() => props.color], () => {
      appConfig.value.theme = tmcomputed.value.backgroundColor;
    });
    function setAppStyle() {
      var _a2, _b2, _c;
      if (isDark.value) {
        appConfig.value.theme = ((_c = (_b2 = (_a2 = store.tmuiConfig) == null ? void 0 : _a2.themeConfig) == null ? void 0 : _b2.dark) == null ? void 0 : _c.bodyColor) || props.darkColor;
      } else {
        appConfig.value.theme = tmcomputed.value.backgroundColor;
      }
      common_vendor.index.setBackgroundColor({
        backgroundColor: appConfig.value.theme,
        backgroundColorBottom: appConfig.value.theme,
        backgroundColorTop: appConfig.value.theme
      });
      if (isDark.value) {
        try {
          common_vendor.index.setNavigationBarColor({
            backgroundColor: "#000000",
            frontColor: "#ffffff"
          });
        } catch (error) {
        }
        if (isTabbarPage) {
          common_vendor.index.setTabBarStyle({
            backgroundColor: "#141415",
            borderStyle: "black",
            color: "#ffffff",
            selectedColor: common_vendor.index.$tm.tabBar.selectedColor || tmcomputed.value.textColor
          });
        }
      } else {
        try {
          let nowPageConfigs = common_vendor.index.$tm.pages.filter((el) => el.path == (nowPage == null ? void 0 : nowPage.route));
          if (nowPageConfigs.length > 0 && !props.navbar.background) {
            let tcolor = nowPageConfigs[0].navigationBarTextStyle;
            tcolor = tcolor.toLocaleLowerCase();
            tcolor = tcolor == "black" ? "#000000" : tcolor;
            tcolor = tcolor == "white" ? "#ffffff" : tcolor;
            common_vendor.index.setNavigationBarColor({
              backgroundColor: nowPageConfigs[0].navigationBarBackgroundColor,
              frontColor: tcolor
            });
            common_vendor.index.setStorageSync(
              "tmuiNavStyle",
              JSON.stringify({
                navbarBackground: nowPageConfigs[0].navigationBarBackgroundColor,
                navbarFontColor: tcolor
              })
            );
          } else {
            common_vendor.index.setNavigationBarColor({
              backgroundColor: props.navbar.background,
              frontColor: props.navbar.fontColor
            });
            common_vendor.index.setStorageSync(
              "tmuiNavStyle",
              JSON.stringify({
                navbarBackground: props.navbar.background,
                navbarFontColor: props.navbar.fontColor
              })
            );
          }
        } catch (error) {
        }
        try {
          if (isTabbarPage) {
            common_vendor.index.setTabBarStyle({
              backgroundColor: common_vendor.index.$tm.tabBar.backgroundColor || props.navbar.background,
              borderStyle: common_vendor.index.$tm.tabBar.borderStyle || "white",
              color: common_vendor.index.$tm.tabBar.color || props.navbar.fontColor,
              selectedColor: common_vendor.index.$tm.tabBar.selectedColor || tmcomputed.value.textColor
            });
          }
        } catch (error) {
        }
      }
      isSetThemeOk.value = true;
    }
    function setTheme(colorName) {
      store.setTmVuetifyTheme(colorName);
    }
    function setDark(dark) {
      let maindark = !isDark.value;
      if (typeof dark !== "undefined" && typeof dark == "boolean") {
        maindark = dark;
      }
      appConfig.value.dark = maindark;
      store.setTmVuetifyDark(maindark);
      setAppStyle();
    }
    function toogleOpen(type) {
      _showMenu.value = type;
      emits("update:showMenu", _showMenu.value);
    }
    try {
      common_vendor.index.onThemeChange((ev) => {
        osChangeTheme(ev.theme);
      });
    } catch (error) {
      console.warn("\u6CA1\u6709\u4E3B\u9898\u5207\u6362\u529F\u80FD\uFF1A", error);
    }
    function osChangeTheme(ev) {
      if (!store.getAutoDark)
        return;
      if (ev === "light") {
        setDark(false);
      } else if (ev === "dark") {
        setDark(true);
      }
    }
    common_vendor.provide(
      "tmuiSysInfo",
      common_vendor.computed$1(() => sysinfoRef.value)
    );
    common_vendor.provide(
      "appTextColor",
      common_vendor.computed$1(() => tmcomputed.value.textColor)
    );
    common_vendor.provide("custom_space_size", [0, 0]);
    expose({
      setTheme,
      setDark
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.n(__props.blur ? "blur" : ""),
        b: common_vendor.s({
          zIndex: 1,
          width: common_vendor.unref(appConfig).width + "px",
          minHeight: common_vendor.unref(appConfig).height + "px"
        }),
        c: common_vendor.s(__props.blur ? {
          backgroundColor: common_vendor.unref(isDark) ? "rgba(0,0,0,0.3)" : "rgba(248, 248, 248, 0.7)"
        } : ""),
        d: _showMenu.value
      }, _showMenu.value ? {
        e: common_vendor.r("menu", {
          sys: {
            width: common_vendor.unref(appConfig).width * 0.7,
            height: common_vendor.unref(appConfig).height
          }
        }),
        f: common_vendor.o(() => {
        }),
        g: common_vendor.unref(appConfig).width * 0.7 + "px",
        h: common_vendor.unref(appConfig).height + "px",
        i: common_vendor.unref(appConfig).width * 0.7 + "px",
        j: common_vendor.unref(appConfig).height + "px"
      } : {}, {
        k: common_vendor.unref(_blurEffect),
        l: common_vendor.o(($event) => toogleOpen(false)),
        m: common_vendor.n(_showMenu.value ? "menuOn" : ""),
        n: common_vendor.unref(appConfig).width + "px",
        o: common_vendor.unref(appConfig).height + "px",
        p: common_vendor.s(common_vendor.unref(appConfig).theme ? {
          background: common_vendor.unref(appConfig).theme
        } : ""),
        q: common_vendor.s({
          width: common_vendor.unref(appConfig).width + "px",
          minHeight: common_vendor.unref(appConfig).height + "px",
          backgroundImage: `url(${common_vendor.unref(_bgImg)})`,
          backgroundSize: `100% ${common_vendor.unref(appConfig).height}px`
        })
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-690d8382"], ["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/tmui/components/tm-app/tm-app.vue"]]);
wx.createComponent(Component);
