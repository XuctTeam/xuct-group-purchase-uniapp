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
  (tmIcon + tmText)();
}
const tmText = () => "../tm-text/tm-text.js";
const tmIcon = () => "../tm-icon/tm-icon.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tm-spin",
  props: {
    ...tmui_tool_lib_minxs.custom_props,
    followTheme: {
      type: [Boolean, String],
      default: true
    },
    color: {
      type: String,
      default: "primary"
    },
    icon: {
      type: String,
      default: "tmicon-shuaxin"
    },
    size: {
      type: Number,
      default: 46
    },
    bgColor: {
      type: String,
      default: "rgba(255,255,255,0.9)"
    },
    tip: {
      type: [String],
      defalut: ""
    },
    load: {
      type: [Boolean, String],
      default: false
    }
  },
  emits: ["click"],
  setup(__props, { emit: emits }) {
    var _a, _b;
    const props = __props;
    const store = tmui_tool_lib_tmpinia.useTmpiniaStore();
    (_b = (_a = common_vendor.getCurrentInstance()) == null ? void 0 : _a.proxy) != null ? _b : null;
    const tmcfg = common_vendor.computed$1(() => store.tmStore);
    const customCSSStyle = common_vendor.computed$1(() => tmui_tool_lib_minxs.computedStyle(props));
    const customClass = common_vendor.computed$1(() => tmui_tool_lib_minxs.computedClass(props));
    const isDark = common_vendor.computed$1(() => tmui_tool_lib_minxs.computedDark(props, tmcfg.value));
    const css_is_nvue = common_vendor.ref(true);
    css_is_nvue.value = false;
    const css_nvue_size = common_vendor.ref([0, 0]);
    const bgColorComputed = common_vendor.computed$1(
      () => isDark.value ? "rgba(0,0,0,0.9)" : props.bgColor
    );
    const loadingComputed = common_vendor.computed$1(() => props.load);
    const _color = common_vendor.computed$1(() => props.color);
    common_vendor.onUpdated(() => {
    });
    common_vendor.onMounted(() => {
    });
    function clickMask(e) {
      emits("click", e);
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(loadingComputed)
      }, common_vendor.unref(loadingComputed) ? {
        b: common_vendor.p({
          spin: true,
          fontSize: props.size,
          dark: common_vendor.unref(isDark),
          color: common_vendor.unref(_color),
          followDark: _ctx.followDark,
          followTheme: props.followTheme,
          name: props.icon
        }),
        c: common_vendor.p({
          followTheme: props.followTheme,
          dark: common_vendor.unref(isDark),
          followDark: _ctx.followDark,
          color: common_vendor.unref(_color),
          _class: "mt-16",
          label: props.tip
        }),
        d: common_vendor.o(clickMask),
        e: common_vendor.n(css_is_nvue.value ? "" : " fulled-height   "),
        f: common_vendor.s(css_is_nvue.value ? "" : {
          width: "100%"
        }),
        g: common_vendor.s({
          backgroundColor: common_vendor.unref(bgColorComputed)
        }),
        h: common_vendor.s(css_is_nvue.value ? {
          width: (css_nvue_size.value[0] || props.fontSize) + "px",
          height: (css_nvue_size.value[1] || props.fontSize) + "px"
        } : "")
      } : {}, {
        i: common_vendor.n(common_vendor.unref(customClass)),
        j: common_vendor.s(common_vendor.unref(customCSSStyle))
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/tmui/components/tm-spin/tm-spin.vue"]]);
wx.createComponent(Component);
