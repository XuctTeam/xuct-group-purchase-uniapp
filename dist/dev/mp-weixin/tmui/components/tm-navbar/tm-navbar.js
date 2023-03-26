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
  (tmIcon + tmText + tmSheet)();
}
const tmSheet = () => "../tm-sheet/tm-sheet.js";
const tmText = () => "../tm-text/tm-text.js";
const tmIcon = () => "../tm-icon/tm-icon.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tm-navbar",
  props: {
    ...tmui_tool_lib_minxs.custom_props,
    followTheme: {
      type: [Boolean, String],
      default: true
    },
    transprent: {
      type: [Boolean, String],
      default: false
    },
    color: {
      type: [String],
      default: "white"
    },
    text: {
      type: [Boolean],
      default: false
    },
    border: {
      type: [Number],
      default: 0
    },
    shadow: {
      type: [Number],
      default: 1
    },
    borderDirection: {
      type: String,
      default: "bottom"
    },
    round: {
      type: [Number],
      default: 0
    },
    margin: {
      type: Array,
      default: () => [0, 0]
    },
    padding: {
      type: Array,
      default: () => [0, 0]
    },
    height: {
      type: [Number],
      default: 44
    },
    //指两边，左宽度除了中间，中间标题宽度为自动
    leftWidth: {
      type: [Number],
      default: 220
    },
    //指两边，左宽度除了中间，中间标题宽度为自动
    rightWidth: {
      type: [Number],
      default: 220
    },
    fontSize: {
      type: [Number],
      default: 30
    },
    iconFontSize: {
      type: [Number],
      default: 37
    },
    title: {
      type: [String],
      default: "标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题"
    },
    //默认为自动，提供了，将强制使用本主题色。
    fontColor: {
      type: [String],
      default: ""
    },
    homeColor: {
      type: [String],
      default: ""
    },
    hideHome: {
      type: Boolean,
      default: false
    },
    hideBack: {
      type: Boolean,
      default: false
    },
    //返回首页的路径，默认/pages/index/index
    homePath: {
      type: [String],
      default: "/pages/index/index"
    },
    beforeBack: {
      type: [Boolean, Function],
      default: () => true
    },
    blur: {
      type: Boolean,
      default: false
    },
    unit: {
      type: String,
      default: "rpx"
    },
    //暗下强制的背景色，
    //有时自动的背景，可能不是你想要暗黑背景，此时可以使用此参数，强制使用背景色，
    //只能是颜色值。
    darkBgColor: {
      type: String,
      default: ""
    },
    /**是否占位,如果为false,底部内容会被导航遮盖,true则会店内内容位置. */
    isPlace: {
      type: Boolean,
      default: true
    }
  },
  emits: ["click", "close"],
  setup(__props, { emit: emits }) {
    var _a, _b;
    const props = __props;
    tmui_tool_lib_tmpinia.useTmpiniaStore();
    ((_a = common_vendor.getCurrentInstance()) == null ? void 0 : _a.proxy) ?? null;
    const _height = common_vendor.computed(() => props.height);
    const _width = common_vendor.index.getSystemInfoSync().windowWidth;
    const statusBarHeight = ((_b = common_vendor.index.getSystemInfoSync()) == null ? void 0 : _b.statusBarHeight) ?? 0;
    const _barHeight = common_vendor.computed(() => statusBarHeight + _height.value);
    const _leftWidth = common_vendor.computed(() => props.leftWidth);
    const _rightWidth = common_vendor.computed(() => props.rightWidth);
    const contentwidth = common_vendor.computed(() => {
      return _width - common_vendor.index.upx2px(_leftWidth.value) - common_vendor.index.upx2px(_rightWidth.value);
    });
    const _title = common_vendor.computed(() => props.title);
    const _fontColor = common_vendor.computed(() => props.fontColor);
    const _homeColor = common_vendor.computed(() => props.homeColor);
    const _blur = common_vendor.computed(() => props.blur);
    const _pages = common_vendor.ref(0);
    common_vendor.onMounted(() => {
      _pages.value = getCurrentPages().length;
    });
    const backhome = () => {
      common_vendor.index.reLaunch({
        url: props.homePath
      });
    };
    let timerId = NaN;
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
    const goback = () => {
      debounce(
        async () => {
          if (typeof props.beforeBack === "function") {
            let p = await props.beforeBack();
            if (typeof p === "function") {
              p = await p();
            }
            if (!p)
              return;
          }
          common_vendor.index.navigateBack({});
        },
        250,
        true
      );
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: props.isPlace
      }, props.isPlace ? {
        b: common_vendor.unref(_barHeight) + "px"
      } : {}, {
        c: common_vendor.unref(statusBarHeight) + "px",
        d: _pages.value > 1 && !props.hideBack
      }, _pages.value > 1 && !props.hideBack ? {
        e: common_vendor.o(goback),
        f: common_vendor.p({
          unit: props.unit,
          ["font-size"]: props.iconFontSize,
          _class: "pointer pb-12 pt-12 px-24",
          color: common_vendor.unref(_homeColor),
          name: "tmicon-angle-left"
        })
      } : {}, {
        g: _pages.value == 1 && !__props.hideHome
      }, _pages.value == 1 && !__props.hideHome ? {
        h: common_vendor.o(backhome),
        i: common_vendor.p({
          unit: props.unit,
          _class: "pointer  pb-12 pt-12 px-24",
          color: common_vendor.unref(_homeColor),
          ["font-size"]: props.iconFontSize,
          name: "tmicon-md-home"
        })
      } : {}, {
        j: common_vendor.unref(_leftWidth) + "rpx",
        k: common_vendor.p({
          unit: props.unit,
          _class: "text-weight-b text-overflow-1",
          color: common_vendor.unref(_fontColor),
          ["font-size"]: props.fontSize,
          label: common_vendor.unref(_title)
        }),
        l: common_vendor.unref(contentwidth) + "px",
        m: common_vendor.unref(_rightWidth) + "rpx",
        n: common_vendor.o(($event) => emits("click", $event)),
        o: common_vendor.p({
          blur: common_vendor.unref(_blur),
          color: props.color,
          _class: _ctx._class,
          _style: _ctx._style,
          followTheme: props.followTheme,
          ["follow-dark"]: props.followDark,
          dark: props.dark,
          round: props.round,
          shadow: props.shadow,
          outlined: props.outlined,
          border: props.border,
          borderStyle: props.borderStyle,
          borderDirection: props.borderDirection,
          text: props.text,
          transprent: props.transprent,
          linear: props.linear,
          linearDeep: props.linearDeep,
          margin: props.margin,
          padding: props.padding,
          height: common_vendor.unref(_barHeight),
          width: common_vendor.unref(_width),
          unit: "px",
          darkBgColor: props.darkBgColor
        }),
        p: common_vendor.unref(_width) + "px",
        q: common_vendor.unref(_barHeight) + "px"
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ae017a04"], ["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/tmui/components/tm-navbar/tm-navbar.vue"]]);
wx.createComponent(Component);
