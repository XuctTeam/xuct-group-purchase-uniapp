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
  (tmBadge + tmSheet)();
}
const tmSheet = () => "../tm-sheet/tm-sheet.js";
const tmBadge = () => "../tm-badge/tm-badge.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tm-grid-item",
  props: {
    ...tmui_tool_lib_minxs.custom_props,
    height: {
      type: Number,
      default: 100
    },
    transprent: {
      type: Boolean,
      default: true
    },
    dot: {
      type: [Boolean, String],
      default: false
    },
    icon: {
      type: [String],
      default: ""
    },
    count: {
      type: [Number, String],
      default: 0
    },
    maxCount: {
      type: [Number, String],
      default: 999
    },
    bgColor: {
      type: String,
      default: "white"
    },
    color: {
      type: String,
      default: "red"
    },
    url: {
      type: String,
      default: ""
    }
  },
  emits: ["click"],
  setup(__props, { emit: emits }) {
    var _a, _b, _c;
    const props = __props;
    const store = tmui_tool_lib_tmpinia.useTmpiniaStore();
    const proxy = (_b = (_a = common_vendor.getCurrentInstance()) == null ? void 0 : _a.proxy) != null ? _b : null;
    const tmcfg = common_vendor.computed$1(() => store.tmStore);
    const isDark = common_vendor.computed$1(() => tmui_tool_lib_minxs.computedDark(props, tmcfg.value));
    const tmcomputed = common_vendor.computed$1(() => {
      return tmui_tool_lib_minxs.computedTheme({ ...props, color: props.bgColor }, isDark.value, tmcfg.value);
    });
    const _colWidth = common_vendor.inject("tmGridItemWidth", 0);
    const _tmGridshowBorder = common_vendor.inject(
      "tmGridshowBorder",
      common_vendor.computed$1(() => false)
    );
    const tmGridshowCachList = common_vendor.inject(
      "tmGridshowCachList",
      common_vendor.computed$1(() => [])
    );
    const uid = common_vendor.ref({
      id: common_vendor.index.$tm.u.getUid(1),
      type: ""
    });
    let parentFormItem = proxy == null ? void 0 : proxy.$parent;
    while (parentFormItem) {
      if ((parentFormItem == null ? void 0 : parentFormItem.keyName) == "tmGrid" || !parentFormItem) {
        break;
      } else {
        parentFormItem = (_c = parentFormItem == null ? void 0 : parentFormItem.$parent) != null ? _c : void 0;
      }
    }
    common_vendor.onMounted(() => {
      if (parentFormItem == null ? void 0 : parentFormItem.pushKey) {
        parentFormItem.pushKey(uid.value);
      }
    }), common_vendor.onBeforeUnmount(() => {
      parentFormItem.delKey(uid.value);
    });
    let wkStyle = common_vendor.ref(`width:${_colWidth}'rpx'`);
    common_vendor.watch(
      [tmGridshowCachList, _tmGridshowBorder],
      () => {
        common_vendor.nextTick(() => setStyleFun());
      },
      { deep: true }
    );
    function setStyleFun() {
      let ar = tmGridshowCachList.value.filter((el) => el.id == uid.value.id);
      if (ar.length == 1) {
        uid.value = ar[0];
      }
      if (!_tmGridshowBorder.value) {
        wkStyle.value = `box-sizing: border-box;border:0rpx solid rgba(0,0,0,0);width:${_colWidth}rpx`;
        return;
      }
      if (uid.value.type == 1) {
        wkStyle.value = `box-sizing: border-box;border:1rpx solid ${tmcomputed.value.border};width:${_colWidth - 1}rpx`;
      }
      if (uid.value.type == 2) {
        wkStyle.value = `box-sizing: border-box;border-bottom:1rpx solid ${tmcomputed.value.border};border-right:1rpx solid ${tmcomputed.value.border};border-left:1rpx solid rgba(0,0,0,0);border-top:1rpx solid rgba(0,0,0,0);width:${_colWidth - 1}rpx`;
      }
      if (uid.value.type == 3) {
        wkStyle.value = `box-sizing: border-box;border-top:1rpx solid rgba(0,0,0,0);border-bottom:1rpx solid ${tmcomputed.value.border};border-right:1rpx solid ${tmcomputed.value.border};border-left:1rpx solid ${tmcomputed.value.border};width:${_colWidth - 1}rpx`;
      }
      if (uid.value.type == 4) {
        wkStyle.value = `box-sizing: border-box;border-left:1rpx solid rgba(0,0,0,0);border-bottom:1rpx solid ${tmcomputed.value.border};border-top:1rpx solid ${tmcomputed.value.border};border-right:1rpx solid ${tmcomputed.value.border};width:${_colWidth - 1}rpx`;
      }
    }
    function onClick(e) {
      emits("click", e);
      if (props.url !== "") {
        try {
          common_vendor.index.navigateTo({
            url: props.url
          });
        } catch (e2) {
        }
      }
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.n(props.dot ? "" : "py-5 "),
        b: common_vendor.p({
          top: 0,
          userInteractionEnabled: true,
          fontSize: 20,
          dot: props.dot,
          count: props.count,
          ["max-count"]: props.maxCount,
          icon: props.icon,
          color: props.color
        }),
        c: common_vendor.o(onClick),
        d: common_vendor.p({
          color: props.bgColor,
          text: props.text,
          border: 0,
          ["hover-class"]: "opacity-6",
          transprent: props.transprent,
          height: props.height,
          width: common_vendor.unref(_colWidth) - 0.5,
          margin: [0, 0],
          padding: [0, 0],
          _class: "flex-col flex"
        }),
        e: common_vendor.s(common_vendor.unref(wkStyle))
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/tmui/components/tm-grid-item/tm-grid-item.vue"]]);
wx.createComponent(Component);
