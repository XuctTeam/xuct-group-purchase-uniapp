"use strict";
const common_vendor = require("../../../common/vendor.js");
const tmui_tool_lib_minxs = require("../../tool/lib/minxs.js");
const tmui_tool_lib_tmpinia = require("../../tool/lib/tmpinia.js");
require("../../tool/theme/theme.js");
require("../../tool/theme/colortool.js");
require("../../tool/lib/interface.js");
require("../../tool/function/util.js");
require("../../tool/function/preview.js");
if (!Math) {
  (tmText + tmIcon + tmTranslate + tmOverlay)();
}
const tmTranslate = () => "../tm-translate/tm-translate.js";
const tmText = () => "../tm-text/tm-text.js";
const tmIcon = () => "../tm-icon/tm-icon.js";
const tmOverlay = () => "../tm-overlay/tm-overlay.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tm-drawer",
  props: {
    ...tmui_tool_lib_minxs.custom_props,
    mask: {
      type: [Boolean, String],
      default: true
    },
    placement: {
      type: String,
      default: "bottom"
    },
    show: {
      type: [Boolean],
      default: false
    },
    width: {
      type: Number,
      default: 500
    },
    height: {
      type: Number,
      default: 600
    },
    round: {
      type: Number,
      default: 10
    },
    duration: {
      type: Number,
      default: 300
    },
    overlayClick: {
      type: Boolean,
      default: true
    },
    transprent: {
      type: [Boolean, String],
      default: false
    },
    closeable: {
      type: [Boolean, String],
      default: false
    },
    color: {
      type: String,
      default: "white"
    },
    title: [String],
    okText: {
      type: [String],
      default: "\u5B8C\u6210"
    },
    okColor: {
      type: [String],
      default: "primary"
    },
    okLoading: {
      type: [Boolean, String],
      default: false
    },
    cancelText: {
      type: [String],
      default: "\u53D6\u6D88"
    },
    hideCancel: {
      type: [Boolean, String],
      default: false
    },
    hideHeader: {
      type: [Boolean, String],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: [Number, String],
      default: 401
    },
    unit: {
      type: String,
      default: "rpx"
    },
    disabbleScroll: {
      type: Boolean,
      default: false
    },
    inContent: {
      type: Boolean,
      default: false
    },
    footHeight: {
      type: Number,
      default: 0
    }
  },
  emits: ["click", "open", "close", "update:show", "ok", "cancel"],
  setup(__props, { expose, emit: emits }) {
    var _a, _b;
    const props = __props;
    const drawerANI = common_vendor.ref(null);
    const overlayAni = common_vendor.ref(null);
    const store = tmui_tool_lib_tmpinia.useTmpiniaStore();
    (_b = (_a = common_vendor.getCurrentInstance()) == null ? void 0 : _a.proxy) != null ? _b : null;
    const sysinfo = common_vendor.inject(
      "tmuiSysInfo",
      common_vendor.computed$1(() => {
        return {
          bottom: 0,
          height: 750,
          width: common_vendor.index.upx2px(750),
          top: 0,
          isCustomHeader: false,
          sysinfo: null
        };
      })
    );
    const tmcfg = common_vendor.computed$1(() => store.tmStore);
    const customCSSStyle = common_vendor.computed$1(() => tmui_tool_lib_minxs.computedStyle(props));
    const customClass = common_vendor.computed$1(() => tmui_tool_lib_minxs.computedClass(props));
    const isDark = common_vendor.computed$1(() => tmui_tool_lib_minxs.computedDark(props, tmcfg.value));
    const tmcomputed = common_vendor.computed$1(
      () => tmui_tool_lib_minxs.computedTheme(props, isDark.value, tmcfg.value)
    );
    const syswidth = common_vendor.computed$1(() => sysinfo.value.width);
    const sysheight = common_vendor.computed$1(() => sysinfo.value.height);
    const reverse = common_vendor.ref(true);
    const timeid = common_vendor.ref(0);
    let timerId = NaN;
    let timerIdth_flas = false;
    common_vendor.index.hideKeyboard();
    let _show = common_vendor.ref(props.show);
    function debounce(func, wait = 500, immediate = false) {
      if (!isNaN(timerId))
        clearTimeout(timerId);
      if (immediate) {
        var callNow = !timerId;
        timerId = setTimeout(() => {
          timerId = NaN;
        }, wait);
        if (callNow)
          typeof func === "function" && func();
      } else {
        timerId = setTimeout(() => {
          typeof func === "function" && func();
        }, wait);
      }
    }
    function throttle(func, wait = 500, immediate = true) {
      if (immediate) {
        if (!timerIdth_flas) {
          timerIdth_flas = true;
          typeof func === "function" && func();
          setTimeout(() => {
            timerIdth_flas = false;
          }, wait);
        }
      } else {
        if (!timerIdth_flas) {
          timerIdth_flas = true;
          setTimeout(() => {
            timerIdth_flas = false;
            typeof func === "function" && func();
          }, wait);
        }
      }
    }
    timeid.value = common_vendor.index.$tm.u.getUid(4);
    if (_show.value) {
      reverse.value = false;
    }
    common_vendor.watch(
      () => props.show,
      (val) => {
        var _a2;
        if (val) {
          reverse.value = true;
        } else {
          reverse.value = false;
          (_a2 = overlayAni.value) == null ? void 0 : _a2.close();
        }
        if (_show.value !== props.show) {
          common_vendor.nextTick(() => {
            var _a3;
            (_a3 = drawerANI.value) == null ? void 0 : _a3.play();
          });
        }
        _show.value = props.show;
      }
    );
    common_vendor.onMounted(() => {
      if (_show.value) {
        open();
      }
    });
    const ok_loading = common_vendor.computed$1(() => props.okLoading);
    const round_rp = common_vendor.computed$1(() => {
      if (aniname.value == "left")
        return "round-r-" + props.round;
      if (aniname.value == "right")
        return "round-l-" + props.round;
      if (aniname.value == "up")
        return "round-b-" + props.round;
      if (aniname.value == "down")
        return "round-t-" + props.round;
      if (aniname.value == "zoom")
        return "round-" + props.round;
    });
    const reverse_rp = common_vendor.computed$1(() => {
      if (aniname.value != "zoom")
        return reverse.value;
      return !reverse.value;
    });
    const aniname = common_vendor.computed$1(() => {
      if (props.placement == "center")
        return "zoom";
      if (props.placement == "top")
        return "up";
      if (props.placement == "bottom")
        return "down";
      return props.placement;
    });
    const anwidth = common_vendor.computed$1(() => {
      if (aniname.value == "zoom") {
        return props.width + props.unit;
      }
      if (props.placement == "left" || props.placement == "right") {
        return props.width + props.unit;
      }
      return syswidth.value + "px";
    });
    const anheight = common_vendor.computed$1(() => {
      let wucha = 0;
      if (props.placement == "top" || props.placement == "bottom" || aniname.value == "zoom") {
        return props.height + wucha + props.unit;
      }
      return sysheight.value + "px";
    });
    const contentHeight = common_vendor.computed$1(() => {
      let base_height = props.hideHeader ? 0 : 44;
      let _footerHeight = common_vendor.index.$tm.u.topx(props.footHeight);
      if (props.placement == "top" || props.placement == "bottom" || aniname.value == "zoom") {
        let h = props.height;
        if (props.unit == "rpx") {
          h = common_vendor.index.upx2px(props.height);
        }
        return h - base_height - _footerHeight + "px";
      }
      return sysheight.value - base_height - _footerHeight + "px";
    });
    const align_rp = common_vendor.computed$1(() => {
      if (aniname.value == "down") {
        return "flex-col-bottom-center";
      }
      if (aniname.value == "up") {
        return "flex-top-custom";
      }
      if (aniname.value == "left") {
        return "flex-row-top-start";
      }
      if (aniname.value == "right") {
        return "flex-row-bottom-start";
      }
      if (aniname.value == "zoom") {
        return "flex-center";
      }
    });
    function OverLayOpen() {
      _show.value = true;
      emits("open");
      emits("update:show", true);
    }
    function overclose() {
      common_vendor.nextTick(() => {
        _show.value = false;
        emits("close");
        emits("update:show", false);
      });
    }
    function overlayClickFun(e) {
      emits("click", e);
      if (!props.overlayClick || props.disabled || !overlayAni.value)
        return;
      reverse.value = false;
      throttle(
        () => {
          var _a2, _b2;
          emits("cancel");
          (_a2 = overlayAni.value) == null ? void 0 : _a2.close();
          (_b2 = drawerANI.value) == null ? void 0 : _b2.play();
        },
        props.duration + 80,
        true
      );
    }
    function ok() {
      if (props.disabled)
        return;
      reverse.value = false;
      debounce(
        () => {
          var _a2, _b2;
          emits("ok");
          (_a2 = overlayAni.value) == null ? void 0 : _a2.close();
          (_b2 = drawerANI.value) == null ? void 0 : _b2.play();
        },
        500,
        true
      );
    }
    function cancel() {
      if (props.disabled)
        return;
      reverse.value = false;
      debounce(
        () => {
          var _a2, _b2;
          emits("cancel");
          (_a2 = overlayAni.value) == null ? void 0 : _a2.close();
          (_b2 = drawerANI.value) == null ? void 0 : _b2.play();
        },
        500,
        true
      );
    }
    function open() {
      reverse.value = true;
      _show.value = true;
      common_vendor.nextTick(() => {
        var _a2;
        (_a2 = drawerANI.value) == null ? void 0 : _a2.play();
      });
    }
    function close() {
      var _a2, _b2;
      reverse.value = false;
      (_a2 = overlayAni.value) == null ? void 0 : _a2.close();
      (_b2 = drawerANI.value) == null ? void 0 : _b2.play();
    }
    expose({
      close,
      open
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(open),
        b: !props.closeable && !props.hideHeader
      }, !props.closeable && !props.hideHeader ? common_vendor.e({
        c: !props.hideCancel
      }, !props.hideCancel ? {
        d: common_vendor.o(cancel),
        e: common_vendor.p({
          label: props.cancelText
        })
      } : {}, {
        f: common_vendor.p({
          _class: "text-overflow-1 opacity-7",
          label: props.title
        }),
        g: !common_vendor.unref(ok_loading)
      }, !common_vendor.unref(ok_loading) ? {
        h: common_vendor.o(ok),
        i: common_vendor.p({
          color: __props.okColor,
          dark: props.dark,
          label: props.okText
        })
      } : {}, {
        j: common_vendor.unref(ok_loading)
      }, common_vendor.unref(ok_loading) ? {
        k: common_vendor.p({
          color: __props.okColor,
          spin: common_vendor.unref(ok_loading),
          dark: common_vendor.unref(isDark),
          _class: common_vendor.unref(isDark) !== true ? "opacity-4" : "",
          fontSize: 34,
          name: common_vendor.unref(ok_loading) ? "tmicon-jiazai_dan" : "tmicon-times-circle-fill"
        })
      } : {}) : {}, {
        l: props.closeable && !props.hideHeader
      }, props.closeable && !props.hideHeader ? {
        m: common_vendor.p({
          _class: "text-overflow-1 opacity-7",
          dark: props.dark,
          label: props.title
        }),
        n: common_vendor.o(cancel),
        o: common_vendor.p({
          dark: props.dark,
          _class: common_vendor.unref(isDark) !== true ? "opacity-3" : "",
          fontSize: 36,
          name: "tmicon-times-circle-fill"
        })
      } : {}, {
        p: props.disabbleScroll ? "normal" : "auto",
        q: common_vendor.unref(contentHeight),
        r: props.footHeight > 0
      }, props.footHeight > 0 ? {} : {}, {
        s: common_vendor.o(($event) => $event.stopPropagation()),
        t: common_vendor.s({
          width: common_vendor.unref(anwidth),
          height: common_vendor.unref(anheight)
        }),
        v: common_vendor.s(!props.transprent ? common_vendor.unref(tmcomputed).borderCss : ""),
        w: common_vendor.s(!props.transprent ? common_vendor.unref(tmcomputed).backgroundColorCss : ""),
        x: common_vendor.s(!props.transprent ? common_vendor.unref(tmcomputed).shadowColor : ""),
        y: common_vendor.s(common_vendor.unref(customCSSStyle)),
        z: common_vendor.n(common_vendor.unref(round_rp)),
        A: common_vendor.n(common_vendor.unref(customClass)),
        B: common_vendor.sr(drawerANI, "ce9446c4-1,ce9446c4-0", {
          "k": "drawerANI"
        }),
        C: common_vendor.p({
          reverse: common_vendor.unref(reverse_rp),
          width: common_vendor.unref(anwidth),
          height: common_vendor.unref(anheight),
          ["auto-play"]: false,
          name: common_vendor.unref(aniname),
          duration: props.duration
        }),
        D: common_vendor.sr(overlayAni, "ce9446c4-0", {
          "k": "overlayAni"
        }),
        E: common_vendor.o(OverLayOpen),
        F: common_vendor.o(overclose),
        G: common_vendor.o(overlayClickFun),
        H: common_vendor.o(($event) => common_vendor.isRef(_show) ? _show.value = $event : _show = $event),
        I: common_vendor.p({
          inContent: props.inContent,
          duration: props.duration + 80,
          zIndex: props.zIndex,
          transprent: !props.mask,
          align: common_vendor.unref(align_rp),
          overlayClick: false,
          show: common_vendor.unref(_show)
        })
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ce9446c4"], ["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/tmui/components/tm-drawer/tm-drawer.vue"]]);
wx.createComponent(Component);
