"use strict";
const common_vendor = require("../../../common/vendor.js");
const tmui_tool_theme_theme = require("../../tool/theme/theme.js");
const tmui_tool_lib_minxs = require("../../tool/lib/minxs.js");
const tmui_tool_lib_tmpinia = require("../../tool/lib/tmpinia.js");
require("../../tool/theme/colortool.js");
require("../../tool/lib/interface.js");
require("../../tool/function/util.js");
require("../../tool/function/preview.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tm-text",
  props: {
    ...tmui_tool_lib_minxs.custom_props,
    label: {
      type: [String, Number],
      default: ""
    },
    fontSize: {
      type: [Number],
      default: 28
    },
    color: {
      type: String,
      default: ""
    },
    selectable: {
      type: [Boolean],
      default: false
    },
    unit: {
      type: String,
      default: "rpx"
    },
    parentClass: {
      type: String,
      default: ""
    },
    lineHeight: {
      type: [Number, String],
      default: "auto"
    }
  },
  emits: ["click"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const store = tmui_tool_lib_tmpinia.useTmpiniaStore();
    const _parentClass = common_vendor.computed$1(() => props.parentClass);
    const tmcfg = common_vendor.computed$1(() => store.tmStore);
    const customCSSStyle = common_vendor.computed$1(() => tmui_tool_lib_minxs.computedStyle(props));
    const customClass = common_vendor.computed$1(() => tmui_tool_lib_minxs.computedClass(props));
    const isDark = common_vendor.computed$1(() => tmui_tool_lib_minxs.computedDark(props, tmcfg.value));
    const _label = common_vendor.computed$1(() => props.label);
    const _fontSize = common_vendor.computed$1(() => {
      var _a, _b;
      return Number(props.fontSize) * ((_b = (_a = store.tmuiConfig.themeConfig) == null ? void 0 : _a.globalFontSizeRatio) != null ? _b : 1);
    });
    const appTextColor = common_vendor.inject(
      "appTextColor",
      common_vendor.computed$1(() => void 0)
    );
    const textColor = common_vendor.computed$1(() => {
      if (props.followTheme && store.tmStore.color)
        return store.tmStore.color;
      let isColorHex = tmui_tool_theme_theme.theme.isCssColor(props.color);
      if (isColorHex)
        return props.color;
      if (props.color && !isColorHex) {
        let nowcolor = tmui_tool_theme_theme.theme.getColor(props.color);
        return nowcolor.csscolor;
      }
      if (!appTextColor) {
        if (isDark)
          return "rgba(252, 252, 252, 1.0)";
        return "rgba(34, 34, 34, 1.0)";
      }
      if (appTextColor.value) {
        return appTextColor.value;
      }
      return "rgba(34, 34, 34, 1.0)";
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(_label)),
        b: common_vendor.o(($event) => emits("click", $event)),
        c: __props.selectable,
        d: __props.selectable,
        e: common_vendor.n(__props.fontSize ? "" : "text-size-m"),
        f: common_vendor.n(common_vendor.unref(customClass)),
        g: common_vendor.s(props.lineHeight == "auto" ? {
          lineHeight: (common_vendor.unref(_fontSize) ? common_vendor.unref(_fontSize) * 1.3 : 42) + props.unit
        } : {}),
        h: common_vendor.s(props.lineHeight > 0 ? {
          lineHeight: props.lineHeight + props.unit
        } : {}),
        i: common_vendor.s({
          color: common_vendor.unref(textColor)
        }),
        j: common_vendor.s(common_vendor.unref(_fontSize) ? {
          fontSize: common_vendor.unref(_fontSize) + props.unit
        } : ""),
        k: common_vendor.s(common_vendor.unref(customCSSStyle)),
        l: common_vendor.n(common_vendor.unref(_parentClass))
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3acfd808"], ["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/tmui/components/tm-text/tm-text.vue"]]);
wx.createComponent(Component);
