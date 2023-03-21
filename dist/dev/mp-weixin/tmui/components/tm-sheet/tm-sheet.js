"use strict";
const common_vendor = require("../../../common/vendor.js");
const tmui_tool_lib_minxs = require("../../tool/lib/minxs.js");
const tmui_tool_lib_tmpinia = require("../../tool/lib/tmpinia.js");
require("../../tool/theme/theme.js");
require("../../tool/theme/colortool.js");
require("../../tool/lib/interface.js");
require("../../tool/function/util.js");
require("../../tool/function/preview.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tm-sheet",
  props: {
    ...tmui_tool_lib_minxs.custom_props,
    parenClass: {
      type: String,
      default: ""
    },
    contStyle: {
      type: String,
      default: ""
    },
    height: {
      type: [Number],
      default: 0
    },
    width: {
      type: [Number],
      default: 0
    },
    color: {
      type: String,
      default: "white"
    },
    transprent: {
      type: [Boolean, String],
      default: false
    },
    border: {
      type: [Number, String],
      default: 0
    },
    margin: {
      type: Array,
      default: () => [32]
    },
    padding: {
      type: Array,
      default: () => [24]
    },
    unit: {
      type: String,
      default: "rpx"
    },
    hoverClass: {
      type: String,
      default: "none"
    },
    darkBgColor: {
      type: String,
      default: ""
    },
    noLevel: {
      type: Boolean,
      default: false
    },
    blur: {
      type: Boolean,
      default: false
    },
    url: {
      type: String,
      default: ""
    }
  },
  emits: [
    "click",
    "longpress",
    "touchend",
    "touchstart",
    "touchcancel",
    "mousedown",
    "mouseup",
    "mouseleave"
  ],
  setup(__props, { emit: emits }) {
    var _a, _b;
    const props = __props;
    const store = tmui_tool_lib_tmpinia.useTmpiniaStore();
    (_b = (_a = common_vendor.getCurrentInstance()) == null ? void 0 : _a.proxy) != null ? _b : null;
    const parenClass_p = common_vendor.computed$1(() => props.parenClass);
    const contStyle_p = common_vendor.computed$1(() => props.contStyle);
    const _transprent = common_vendor.computed$1(() => props.transprent);
    const tmcfg = common_vendor.computed$1(() => store.tmStore);
    const _blur = common_vendor.computed$1(() => {
      if (tmcfg.value.os == "android" && _isNvue.value) {
        return false;
      }
      return props.blur;
    });
    const customCSSStyle = common_vendor.computed$1(() => tmui_tool_lib_minxs.computedStyle(props));
    const customClass = common_vendor.computed$1(() => tmui_tool_lib_minxs.computedClass(props));
    const isDark = common_vendor.computed$1(() => tmui_tool_lib_minxs.computedDark(props, tmcfg.value));
    const tmcomputed = common_vendor.computed$1(() => {
      let text = props.text;
      if (_blur.value && tmcfg.value.os == "ios" && _isNvue.value) {
        text = true;
      }
      return tmui_tool_lib_minxs.computedTheme(
        { ...props, blur: _blur.value, text },
        isDark.value,
        tmcfg.value
      );
    });
    const _isNvue = common_vendor.ref(false);
    const _margin = common_vendor.computed$1(() => {
      if (props.margin.length == 1)
        return [props.margin[0], props.margin[0], props.margin[0], props.margin[0]];
      if (props.margin.length == 2)
        return [props.margin[0], props.margin[1], props.margin[0], props.margin[1]];
      if (props.margin.length == 3)
        return [props.margin[0], props.margin[1], props.margin[2], 0];
      if (props.margin.length == 4)
        return [props.margin[0], props.margin[1], props.margin[2], props.margin[3]];
      return [0, 0, 0, 0];
    });
    const _padding = common_vendor.computed$1(() => {
      if (props.padding.length == 1)
        return [props.padding[0], props.padding[0], props.padding[0], props.padding[0]];
      if (props.padding.length == 2)
        return [props.padding[0], props.padding[1], props.padding[0], props.padding[1]];
      if (props.padding.length == 3)
        return [props.padding[0], props.padding[1], props.padding[2], 0];
      if (props.padding.length == 4)
        return [props.padding[0], props.padding[1], props.padding[2], props.padding[3]];
      return [0, 0, 0, 0];
    });
    const _width = common_vendor.computed$1(() => props.width + _padding.value[0] + _padding.value[2]);
    const _height = common_vendor.computed$1(() => props.height + _padding.value[1] + _padding.value[3]);
    const _width_real = common_vendor.computed$1(() => props.width);
    const _height_real = common_vendor.computed$1(() => props.height);
    const _noLevel = common_vendor.computed$1(() => props.noLevel);
    const _blue_sheet = common_vendor.ref(true);
    const _blurEffect = common_vendor.computed$1(() => {
      if (props.blur === true && isDark.value)
        return "dark";
      if (props.blur === true && !isDark.value)
        return "extralight";
      return "none";
    });
    common_vendor.watch(
      () => isDark.value,
      () => {
      }
    );
    const _bgcolor = common_vendor.computed$1(() => {
      var _a2;
      if (_transprent.value === true)
        return `background-color:rgba(255,255,255,0);`;
      if (props.darkBgColor !== "" && isDark.value === true) {
        return `background-color:${props.darkBgColor};`;
      }
      if (props.linearColor.length == 2) {
        return { "background-image": `linear-gradient(${tmcomputed.value.linearDirectionStr},${props.linearColor[0]},${props.linearColor[1]})` };
      }
      if (((_a2 = tmcomputed.value.gradientColor) == null ? void 0 : _a2.length) == 2) {
        return tmcomputed.value.backgroundColorCss;
      }
      if (_noLevel.value && tmcomputed.value.isBlackAndWhite === true && isDark.value === true) {
        return `background-color: ${tmcomputed.value.inputcolor}`;
      }
      return `background-color: ${tmcomputed.value.backgroundColor}`;
    });
    const isLongPress = common_vendor.ref(false);
    function longpress(e) {
      isLongPress.value = true;
      emits("longpress", e);
    }
    function touchstart(e) {
      isLongPress.value = true;
      emits("touchstart", e);
    }
    function touchend(e) {
      isLongPress.value = false;
      emits("touchend", e);
    }
    function touchcancel(e) {
      isLongPress.value = false;
      emits("touchcancel", e);
    }
    function mousedown(e) {
      isLongPress.value = true;
      emits("mousedown", e);
    }
    function mouseup(e) {
      isLongPress.value = false;
      emits("mouseup", e);
    }
    function mouseleave(e) {
      isLongPress.value = false;
      emits("mouseleave", e);
    }
    function onClick(e) {
      emits("click", e);
      if (typeof props.url === "string" && props.url) {
        common_vendor.index.navigateTo({
          url: props.url,
          fail(result) {
            console.log(result);
          }
        });
      }
    }
    common_vendor.computed$1(() => {
      let w = parseFloat(String(_width.value)) - parseFloat(String(props.padding[0]));
      w = w - parseFloat(String(props.border)) * 2;
      return w;
    });
    common_vendor.computed$1(() => {
      let h = parseFloat(String(_height.value)) - parseFloat(String(props.padding[1]));
      h = h - parseFloat(String(props.border)) * 2;
      return h;
    });
    let textColor = common_vendor.computed$1(() => {
      return tmcomputed.value.textColor;
    });
    common_vendor.provide("appTextColor", textColor);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: _blue_sheet.value
      }, _blue_sheet.value ? {
        b: common_vendor.n(common_vendor.unref(customClass)),
        c: common_vendor.s(common_vendor.unref(contStyle_p)),
        d: (props.url ? " opacity-7 " : "  ") + props.hoverClass,
        e: common_vendor.unref(_blurEffect),
        f: common_vendor.o(onClick),
        g: common_vendor.o(longpress),
        h: common_vendor.o(touchend),
        i: common_vendor.o(touchstart),
        j: common_vendor.o(touchcancel),
        k: common_vendor.o(mousedown),
        l: common_vendor.o(mouseup),
        m: common_vendor.o(mouseleave),
        n: common_vendor.n(common_vendor.unref(parenClass_p)),
        o: common_vendor.n(!_ctx.isDisabledRoundAndriod ? `round-${props.round}` : ""),
        p: common_vendor.s({
          marginLeft: common_vendor.unref(_margin)[0] + "rpx",
          marginTop: common_vendor.unref(_margin)[1] + "rpx",
          marginRight: common_vendor.unref(_margin)[2] + "rpx",
          marginBottom: common_vendor.unref(_margin)[3] + "rpx",
          paddingLeft: common_vendor.unref(_padding)[0] + "rpx",
          paddingTop: common_vendor.unref(_padding)[1] + "rpx",
          paddingRight: common_vendor.unref(_padding)[2] + "rpx",
          paddingBottom: common_vendor.unref(_padding)[3] + "rpx"
        }),
        q: common_vendor.s(common_vendor.unref(_height_real) ? {
          height: common_vendor.unref(_height) + props.unit
        } : ""),
        r: common_vendor.s(common_vendor.unref(_width_real) ? {
          width: common_vendor.unref(_width) + props.unit
        } : ""),
        s: common_vendor.s(common_vendor.unref(tmcomputed).borderCss),
        t: common_vendor.s(common_vendor.unref(_blur) && common_vendor.unref(store).tmStore.os == "ios" && _isNvue.value === true ? "" : common_vendor.unref(_bgcolor)),
        v: common_vendor.s(!common_vendor.unref(_transprent) && props.shadow > 0 ? common_vendor.unref(tmcomputed).shadowColor : ""),
        w: common_vendor.s(!common_vendor.unref(_transprent) && common_vendor.unref(_blur) ? {
          backdropFilter: "blur(6px)"
        } : ""),
        x: common_vendor.s(common_vendor.unref(customCSSStyle))
      } : {});
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c6f3e58c"], ["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/tmui/components/tm-sheet/tm-sheet.vue"]]);
wx.createComponent(Component);
