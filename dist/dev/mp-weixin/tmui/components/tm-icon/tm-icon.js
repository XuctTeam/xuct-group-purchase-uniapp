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
  __name: "tm-icon",
  props: {
    ...tmui_tool_lib_minxs.custom_props,
    fontSize: {
      type: [Number],
      default: 34
    },
    color: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    spin: {
      type: [Boolean],
      default: false
    },
    unit: {
      type: String,
      default: "rpx"
    },
    lineHeight: {
      type: [Number],
      default: -1
    },
    rotate: {
      type: Boolean,
      default: false
    },
    rotateDeg: {
      type: Number,
      default: 0
    },
    customicon: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click", "longpress"],
  setup(__props, { emit: emits }) {
    var _a, _b;
    const props = __props;
    const store = tmui_tool_lib_tmpinia.useTmpiniaStore();
    const _rotateDeg = common_vendor.computed$1(() => props.rotateDeg);
    (_b = (_a = common_vendor.getCurrentInstance()) == null ? void 0 : _a.proxy) != null ? _b : null;
    const tmcfg = common_vendor.computed$1(() => store.tmStore);
    const customCSSStyle = common_vendor.computed$1(() => tmui_tool_lib_minxs.computedStyle(props));
    const customClass = common_vendor.computed$1(() => tmui_tool_lib_minxs.computedClass(props));
    const isDark = common_vendor.computed$1(() => tmui_tool_lib_minxs.computedDark(props, tmcfg.value));
    common_vendor.computed$1(
      () => tmui_tool_lib_minxs.computedTheme(props, isDark.value, tmcfg.value)
    );
    function clickhandle(e) {
      emits("click", e);
    }
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
      if (appTextColor.value)
        return appTextColor.value;
      return "rgba(34, 34, 34, 1.0)";
    });
    const fontSizeComputed = common_vendor.computed$1(() => {
      let strc = {
        fontSize: (props.fontSize || 30) + props.unit,
        lineHeight: props.lineHeight > -1 ? props.lineHeight + props.unit : (props.fontSize || 30) + props.unit
      };
      if (props.lineHeight == 0) {
        delete strc.lineHeight;
      }
      return strc;
    });
    const isImg = common_vendor.computed$1(() => {
      if (props.name[0] == "." || props.name[0] == "@" || props.name[0] == "/" || props.name[0] == "~" || props.name.substring(0, 5) == "data:" || props.name.substring(0, 4) == "http" || props.name.substring(0, 5) == "https" || props.name.substring(0, 3) == "ftp") {
        return true;
      }
      return false;
    });
    const prefx = common_vendor.computed$1(() => {
      var _a2;
      let prefix = (_a2 = props.name.split("-")) == null ? void 0 : _a2[0];
      return prefix;
    });
    const iconComputed = common_vendor.computed$1(() => {
      if (isImg.value)
        return props.name;
      if (props.customicon) {
        try {
          let names = props.name.split("-");
          if (/^e[0-9|a-z|A-Z]{3}/.test(names[names.length - 1])) {
            let clasName = props.name.substring(0, props.name.lastIndexOf("-"));
            console.log(clasName);
            return clasName;
          }
        } catch (e) {
        }
      }
      return props.name;
    });
    const spinComputed = common_vendor.computed$1(() => props.spin);
    const custom_space_size = common_vendor.inject("custom_space_size", [0, 0]);
    common_vendor.computed$1(() => Math.ceil(props.fontSize || 34) + custom_space_size[0]);
    common_vendor.computed$1(() => Math.ceil(props.fontSize || 34) + custom_space_size[1]);
    common_vendor.watch(spinComputed, () => {
    });
    common_vendor.onBeforeMount(() => {
    });
    common_vendor.onMounted(() => {
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !common_vendor.unref(isImg)
      }, !common_vendor.unref(isImg) ? {
        b: common_vendor.o(clickhandle),
        c: common_vendor.o(($event) => emits("longpress", $event)),
        d: common_vendor.n(props.rotate ? "ani" : ""),
        e: common_vendor.n(common_vendor.unref(spinComputed) ? "spin" : ""),
        f: common_vendor.n(common_vendor.unref(prefx)),
        g: common_vendor.n(common_vendor.unref(iconComputed)),
        h: common_vendor.n(common_vendor.unref(customClass)),
        i: common_vendor.s({
          transform: `rotate(${common_vendor.unref(_rotateDeg)}deg)`
        }),
        j: common_vendor.s(common_vendor.unref(fontSizeComputed)),
        k: common_vendor.s({
          color: common_vendor.unref(textColor)
        }),
        l: common_vendor.s(common_vendor.unref(customCSSStyle))
      } : {}, {
        m: common_vendor.unref(isImg)
      }, common_vendor.unref(isImg) ? {
        n: common_vendor.o(clickhandle),
        o: common_vendor.o(($event) => emits("longpress", $event)),
        p: common_vendor.unref(iconComputed),
        q: common_vendor.n(props.rotate ? "ani" : ""),
        r: common_vendor.n(common_vendor.unref(spinComputed) ? "spin" : ""),
        s: common_vendor.n(common_vendor.unref(customClass)),
        t: common_vendor.s({
          transform: `rotate(${common_vendor.unref(_rotateDeg)}deg)`
        }),
        v: common_vendor.s({
          width: (props.fontSize || 30) + props.unit,
          height: (props.fontSize || 30) + props.unit
        }),
        w: common_vendor.s(common_vendor.unref(customCSSStyle))
      } : {}, {
        x: common_vendor.s({
          marginRight: common_vendor.unref(custom_space_size)[0] + "rpx",
          marginBottom: common_vendor.unref(custom_space_size)[1] + "rpx"
        })
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e3e455a0"], ["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/tmui/components/tm-icon/tm-icon.vue"]]);
wx.createComponent(Component);
