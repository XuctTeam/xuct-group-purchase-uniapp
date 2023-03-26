"use strict";
const common_vendor = require("../../../common/vendor.js");
const tmui_tool_lib_minxs = require("../../tool/lib/minxs.js");
require("../../tool/theme/theme.js");
require("../../tool/theme/colortool.js");
require("../../tool/lib/interface.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tm-overlay",
  props: {
    ...tmui_tool_lib_minxs.custom_props,
    // 内容的对齐方式的类
    align: {
      type: String,
      default: "flex-col-center-center"
    },
    //当前组件的主题。可以是颜色值，也可以是主题名称。
    bgColor: {
      type: String,
      default: "rgba(0,0,0,0.24)"
    },
    zIndex: {
      type: [Number, String],
      default: 999
    },
    show: {
      type: Boolean,
      default: false
    },
    overlayClick: {
      type: Boolean,
      default: true
    },
    transprent: {
      type: [Boolean, String],
      default: false
    },
    duration: {
      type: Number,
      default: 300
    },
    contentAnimation: {
      type: Boolean,
      default: false
    },
    /** 是否嵌入弹层，开启后将在它的父组件内执行弹层。 */
    inContent: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click", "open", "close", "update:show"],
  setup(__props, { expose, emit: emits }) {
    var _a;
    const props = __props;
    const defaultBgColor = "rgba(0,0,0,0.24)";
    ((_a = common_vendor.getCurrentInstance()) == null ? void 0 : _a.proxy) ?? null;
    const customCSSStyle = tmui_tool_lib_minxs.computedStyle(props);
    const customClass = tmui_tool_lib_minxs.computedClass(props);
    const sysinfo = common_vendor.inject(
      "tmuiSysInfo",
      common_vendor.computed(() => {
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
    const width = common_vendor.computed(() => sysinfo.value.width);
    const height = common_vendor.computed(() => sysinfo.value.height);
    const top = common_vendor.computed(() => sysinfo.value.top);
    common_vendor.ref(false);
    common_vendor.index.$tm.u.getUid(1);
    let timerId = NaN;
    common_vendor.ref(null);
    const showMask = common_vendor.ref(false);
    const ani = common_vendor.ref(false);
    common_vendor.onUnmounted(() => clearTimeout(timerId));
    const align_rpx = common_vendor.computed(() => props.align);
    const bgColor_rp = common_vendor.computed(() => {
      if (!props.bgColor || props.transprent)
        return "rgba(0,0,0,0)";
      return props.bgColor || defaultBgColor;
    });
    const _inContent = common_vendor.ref(props.inContent);
    const isNvue = common_vendor.ref(false);
    common_vendor.onMounted(() => {
      if (!props.show)
        return;
      open(props.show);
    });
    function close() {
      if (timerId) {
        clearTimeout(timerId);
        timerId = NaN;
      }
      open(false);
    }
    function closeByclick(e) {
      try {
        e.stopPropagation();
        e.stopImmediatePropagation();
      } catch (e2) {
      }
      emits("click", e);
      if (timerId) {
        clearTimeout(timerId);
        timerId = NaN;
      }
      if (!props.overlayClick)
        return;
      open(false);
    }
    function open(off) {
      if (off == true) {
        common_vendor.index.hideKeyboard();
      }
      fadeInVue(off);
    }
    function touchmove(e) {
      try {
        e.preventDefault();
      } catch (e2) {
      }
    }
    function fadeInVue(off = false) {
      if (showMask.value == off)
        return;
      common_vendor.index.$tm.u.throttle(
        function() {
          if (off == false) {
            ani.value = false;
            setTimeout(function() {
              showMask.value = off;
              emits("close");
              emits("update:show", false);
            }, props.duration + 10);
          } else {
            showMask.value = true;
            setTimeout(function() {
              ani.value = true;
            }, 10);
            emits("open");
            setTimeout(function() {
              emits("update:show", true);
            }, props.duration);
          }
        },
        props.duration + 10,
        true
      );
    }
    common_vendor.watch(
      () => props.show,
      (newval) => {
        open(newval);
      }
    );
    expose({
      close,
      open
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: showMask.value
      }, showMask.value ? {
        b: common_vendor.n(common_vendor.unref(bgColor_rp) && !props.transprent && ani.value ? "blurOn" : "blurOff"),
        c: common_vendor.s(common_vendor.unref(bgColor_rp) && !props.transprent ? {
          backgroundColor: showMask.value ? common_vendor.unref(bgColor_rp) : ""
        } : ""),
        d: common_vendor.s(_inContent.value && !isNvue.value ? {
          width: "100%",
          height: "100%"
        } : {
          width: common_vendor.unref(width) + "px",
          height: common_vendor.unref(height) + "px"
        }),
        e: common_vendor.s({
          transitionDuration: props.duration + "ms"
        }),
        f: common_vendor.o(closeByclick),
        g: common_vendor.o(touchmove),
        h: common_vendor.n(common_vendor.unref(align_rpx)),
        i: common_vendor.n(common_vendor.unref(customClass)),
        j: common_vendor.n(props.contentAnimation ? "overlay" : ""),
        k: common_vendor.n(props.contentAnimation && ani.value ? "blurOnOpacity " : ""),
        l: common_vendor.n(props.contentAnimation && !ani.value ? "blurOffOpacity overlay" : ""),
        m: common_vendor.s(_inContent.value && !isNvue.value ? {
          width: "100%",
          height: "100%",
          top: "0px"
        } : {
          width: common_vendor.unref(width) + "px",
          height: common_vendor.unref(height) + "px"
        }),
        n: common_vendor.s(common_vendor.unref(customCSSStyle)),
        o: common_vendor.s(_inContent.value && !isNvue.value ? {
          width: "100%",
          height: "100%",
          top: "0px",
          position: "absolute"
        } : {
          width: common_vendor.unref(width) + "px",
          height: common_vendor.unref(height) + "px",
          top: common_vendor.unref(top) + "px",
          position: "fixed"
        }),
        p: common_vendor.s(__props.zIndex ? {
          zIndex: __props.zIndex
        } : "")
      } : {});
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-009fda2d"], ["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/tmui/components/tm-overlay/tm-overlay.vue"]]);
wx.createComponent(Component);
