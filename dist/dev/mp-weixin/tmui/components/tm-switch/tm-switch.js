"use strict";
const common_vendor = require("../../../common/vendor.js");
const tmui_tool_lib_minxs = require("../../tool/lib/minxs.js");
require("../../tool/theme/theme.js");
require("../../tool/theme/colortool.js");
require("../../tool/lib/interface.js");
if (!Math) {
  (tmText + tmIcon + tmTranslate + tmSheet)();
}
const tmSheet = () => "../tm-sheet/tm-sheet.js";
const tmText = () => "../tm-text/tm-text.js";
const tmIcon = () => "../tm-icon/tm-icon.js";
const tmTranslate = () => "../tm-translate/tm-translate.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tm-switch",
  props: {
    ...tmui_tool_lib_minxs.custom_props,
    followTheme: {
      type: [Boolean, String],
      default: true
    },
    margin: {
      type: Array,
      default: () => [0, 0]
    },
    transprent: {
      type: Boolean,
      default: false
    },
    defaultValue: {
      type: [Boolean, String, Number],
      default: false
    },
    modelValue: {
      type: [Boolean, String, Number],
      default: false
    },
    unSelected: {
      type: [Boolean, String, Number],
      default: false
    },
    selected: {
      type: [Boolean, String, Number],
      default: true
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    size: {
      type: String,
      default: "normal"
    },
    color: {
      type: String,
      default: "primary"
    },
    unCheckedColor: {
      type: String,
      default: "grey-3"
    },
    barColor: {
      type: String,
      default: "white"
    },
    round: {
      type: Number,
      default: 10
    },
    load: {
      type: Boolean,
      default: false
    },
    beforeChecked: {
      type: [Function, Boolean, String],
      default: () => false
    },
    barIcon: {
      type: String,
      default: "tmicon-check"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: Array,
      default: () => ["", ""]
    }
  },
  emits: ["update:modelValue", "change", "click"],
  setup(__props, { emit: emits }) {
    var _a, _b;
    const props = __props;
    (_b = (_a = common_vendor.getCurrentInstance()) == null ? void 0 : _a.proxy) != null ? _b : null;
    const viewSize = common_vendor.computed$1(() => {
      let width = 0;
      let height = 0;
      let fontSize = 24;
      let gutter = 2;
      let round = props.round;
      if (props.width && props.height) {
        width = props.width;
        height = props.height;
        fontSize = height * 0.45;
      } else {
        if (props.size == "normal") {
          width = 100;
          height = 50;
          fontSize = 26;
        } else if (props.size == "mini") {
          width = 80;
          height = 40;
          fontSize = 22;
        } else if (props.size == "large") {
          width = 120;
          height = 60;
          fontSize = 32;
          round = 24;
        }
      }
      let gutterPx = gutter;
      width = Math.ceil(common_vendor.index.upx2px(width));
      height = Math.ceil(common_vendor.index.upx2px(height));
      let obj = {
        width,
        height,
        innerHeight: height - gutterPx * 2,
        innerWidth: width / 2 - gutterPx * 2,
        coenteWidth: width - gutterPx * 2,
        conentWidthPx: width - gutterPx * 2,
        fontSize,
        round
      };
      return obj;
    });
    const _value = common_vendor.ref(props.defaultValue);
    const _CheckVal = common_vendor.computed$1(() => checkVal(_value.value));
    _CheckVal.value;
    const _load = common_vendor.ref(false);
    common_vendor.watchEffect(() => {
      _load.value = props.load;
    });
    async function switchClick() {
      emits("click");
      if (_load.value || props.disabled)
        return;
      if (typeof props.beforeChecked === "function") {
        _load.value = true;
        let p = await props.beforeChecked();
        if (typeof p === "function") {
          p = await p();
        }
        _load.value = false;
        if (!p)
          return;
      }
      _value.value = !_CheckVal.value ? props.selected : props.unSelected;
      spinNvueAni(_CheckVal.value);
      emits("change", _CheckVal.value ? props.selected : props.unSelected);
      emits("update:modelValue", _CheckVal.value ? props.selected : props.unSelected);
    }
    common_vendor.watch(
      () => props.modelValue,
      (newval) => {
        _value.value = newval;
        spinNvueAni(_CheckVal.value);
      }
    );
    common_vendor.onMounted(() => {
      common_vendor.nextTick(() => spinNvueAni(_CheckVal.value));
    });
    function checkVal(nowVal) {
      let val = typeof nowVal !== "undefined" ? nowVal : props.modelValue;
      if (val === props.unSelected) {
        return false;
      } else if (val === props.selected) {
        return true;
      }
    }
    function spinNvueAni(reveser = false) {
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          ["font-size"]: common_vendor.unref(viewSize).fontSize,
          label: props.label[0]
        }),
        b: common_vendor.p({
          ["font-size"]: common_vendor.unref(viewSize).fontSize,
          label: props.label[1]
        }),
        c: common_vendor.s({
          width: common_vendor.unref(viewSize).coenteWidth + "px",
          height: common_vendor.unref(viewSize).innerHeight + "px"
        }),
        d: _load.value
      }, _load.value ? {
        e: common_vendor.p({
          followTheme: props.followTheme,
          ["font-size"]: common_vendor.unref(viewSize).fontSize,
          color: props.color,
          name: "tmicon-shuaxin",
          spin: true
        })
      } : {}, {
        f: !_load.value && common_vendor.unref(_CheckVal)
      }, !_load.value && common_vendor.unref(_CheckVal) ? {
        g: common_vendor.p({
          followTheme: props.followTheme,
          ["font-size"]: common_vendor.unref(viewSize).fontSize,
          color: props.color,
          name: props.barIcon
        }),
        h: common_vendor.p({
          name: "zoom"
        })
      } : {}, {
        i: common_vendor.p({
          userInteractionEnabled: false,
          padding: [0, 0],
          margin: [0, 0],
          height: common_vendor.unref(viewSize).innerHeight,
          width: common_vendor.unref(viewSize).innerWidth,
          color: props.barColor,
          ["follow-dark"]: false,
          round: common_vendor.unref(viewSize).round,
          unit: "px",
          _class: "flex flex-center flex-row"
        }),
        j: common_vendor.n(common_vendor.unref(_CheckVal) ? "on" : "off"),
        k: common_vendor.unref(viewSize).innerWidth + "px",
        l: common_vendor.unref(viewSize).innerHeight + "px",
        m: `${common_vendor.unref(viewSize).width}px`,
        n: `${common_vendor.unref(viewSize).height}px`,
        o: common_vendor.o(switchClick),
        p: common_vendor.p({
          ["no-level"]: !common_vendor.unref(_CheckVal),
          followTheme: props.followTheme,
          followDark: props.followDark,
          dark: props.dark,
          shadow: props.shadow,
          outlined: props.outlined,
          borderStyle: props.borderStyle,
          borderDirection: props.borderDirection,
          linearDeep: props.linearDeep,
          linear: common_vendor.unref(_CheckVal) ? props.linear : "",
          round: common_vendor.unref(viewSize).round,
          color: common_vendor.unref(_CheckVal) ? props.color : props.unCheckedColor,
          height: common_vendor.unref(viewSize).height,
          width: common_vendor.unref(viewSize).width,
          parenClass: "switchbgani",
          _class: ["flex  relative flex-col", props.disabled ? "opacity-4" : ""],
          text: common_vendor.unref(_CheckVal) ? false : props.text,
          unit: "px",
          padding: [0, 0],
          margin: props.margin
        })
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-031c9c9a"], ["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/tmui/components/tm-switch/tm-switch.vue"]]);
wx.createComponent(Component);
