"use strict";
const common_vendor = require("../../../common/vendor.js");
const tmui_tool_lib_minxs = require("../../tool/lib/minxs.js");
require("../../tool/theme/theme.js");
require("../../tool/theme/colortool.js");
require("../../tool/lib/interface.js");
if (!Math) {
  (tmText + tmIcon + tmSheet)();
}
const tmSheet = () => "../tm-sheet/tm-sheet.js";
const tmText = () => "../tm-text/tm-text.js";
const tmIcon = () => "../tm-icon/tm-icon.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tm-avatar",
  props: {
    ...tmui_tool_lib_minxs.custom_props,
    size: {
      type: [Number],
      default: 90
    },
    //是否开启交互，在pc端有用，鼠标移上去变成手型
    trigger: {
      type: [Boolean, String],
      default: false
    },
    triggerColor: {
      type: [String],
      default: ""
    },
    triggerIcon: {
      type: [String],
      default: ""
    },
    triggerStyle: {
      type: [String],
      default: ""
    },
    round: {
      type: [Number],
      default: 6
    },
    border: {
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
    transprent: {
      type: [Boolean, String],
      default: false
    },
    label: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    img: {
      type: String,
      default: ""
    },
    //自动匹配字体大小。
    fontSize: {
      type: [Number],
      default: 0
    },
    unit: {
      type: String,
      default: "rpx"
    }
  },
  emits: ["click"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const customCSSStyle = common_vendor.computed(() => tmui_tool_lib_minxs.computedStyle(props));
    const customClass = common_vendor.computed(() => tmui_tool_lib_minxs.computedClass(props));
    const width = common_vendor.computed(() => props.size ?? 90);
    const height = common_vendor.computed(() => props.size ?? 90);
    const fontSize = common_vendor.computed(() => {
      if (props.fontSize)
        return props.fontSize;
      if (props.label)
        return parseInt(String(width.value)) * 0.4;
      if (props.icon)
        return parseInt(String(width.value)) * 0.7;
      return props.size ?? 90;
    });
    const imgsize = common_vendor.computed(() => {
      return common_vendor.index.upx2px(fontSize.value - 4) + "px";
    });
    const triggSize = common_vendor.computed(() => {
      let wh = width.value / 3 + 6;
      wh = wh >= 64 ? 64 : wh;
      return {
        size: wh,
        fontSize: wh * 0.5
      };
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: props.label && !props.icon && !props.img
      }, props.label && !props.icon && !props.img ? {
        b: common_vendor.p({
          userInteractionEnabled: false,
          label: props.label,
          ["font-size"]: common_vendor.unref(fontSize),
          unit: props.unit
        })
      } : {}, {
        c: !props.label && props.icon && !props.img
      }, !props.label && props.icon && !props.img ? {
        d: common_vendor.p({
          userInteractionEnabled: false,
          name: props.icon,
          ["font-size"]: common_vendor.unref(fontSize),
          unit: props.unit
        })
      } : {}, {
        e: !props.label && !props.icon && props.img
      }, !props.label && !props.icon && props.img ? {
        f: props.img,
        g: common_vendor.unref(imgsize),
        h: common_vendor.unref(imgsize),
        i: common_vendor.n("round-" + props.round)
      } : {}, {
        j: common_vendor.o(($event) => emits("click", $event)),
        k: common_vendor.p({
          color: props.color,
          _class: [common_vendor.unref(customClass), "flex-center flex-col"],
          _style: [common_vendor.unref(customCSSStyle), {
            flexShrink: 1
          }],
          followTheme: props.followTheme,
          dark: props.dark,
          round: props.round,
          shadow: props.shadow,
          outlined: props.outlined,
          border: props.border,
          borderStyle: props.borderStyle,
          borderDirection: props.borderDirection,
          text: props.text,
          transprent: props.img ? true : props.transprent,
          linear: props.linear,
          linearDeep: props.linearDeep,
          width: common_vendor.unref(width),
          height: common_vendor.unref(height),
          margin: [0, 0],
          padding: props.padding,
          unit: props.unit
        }),
        l: props.triggerIcon
      }, props.triggerIcon ? {
        m: common_vendor.p({
          name: props.triggerIcon,
          ["font-size"]: common_vendor.unref(triggSize).fontSize,
          unit: props.unit
        }),
        n: common_vendor.p({
          userInteractionEnabled: false,
          width: common_vendor.unref(triggSize).size,
          height: common_vendor.unref(triggSize).size,
          _style: props.triggerStyle,
          text: props.img ? false : !props.text,
          color: props.triggerColor || props.color,
          transprent: false,
          dark: props.dark,
          _class: "flex-center ",
          margin: [0, 0],
          padding: [0, 0],
          round: 24,
          unit: props.unit
        }),
        o: common_vendor.o(($event) => emits("click", $event)),
        p: `${common_vendor.unref(width)}${props.unit}`
      } : {}, {
        q: common_vendor.n(__props.trigger ? "trigger" : ""),
        r: common_vendor.n(`mx-${props.margin[0]} my-${props.margin[1]}`),
        s: common_vendor.unref(width) + props.unit,
        t: common_vendor.unref(height) + props.unit
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-248ae041"], ["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/tmui/components/tm-avatar/tm-avatar.vue"]]);
wx.createComponent(Component);
