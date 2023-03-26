"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  (tmIcon + tmSheet + tmTranslate + tmText)();
}
const tmSheet = () => "../tm-sheet/tm-sheet.js";
const tmText = () => "../tm-text/tm-text.js";
const tmIcon = () => "../tm-icon/tm-icon.js";
const tmTranslate = () => "../tm-translate/tm-translate.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tm-result",
  props: {
    // empty,error,success,warning,lock,network
    status: {
      type: String,
      default: "empty"
    },
    icon: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "primary"
    },
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    btnText: {
      type: String,
      default: "确认"
    },
    //是否跟随全局主题的变换而变换
    followTheme: {
      type: [Boolean, String],
      default: true
    },
    followDark: {
      type: [Boolean, String],
      default: true
    },
    //暗黑
    dark: {
      type: [Boolean, String],
      default: false
    },
    //是否显示底部的操作按钮。
    showBtn: {
      type: Boolean,
      default: true
    },
    //是否禁用整个组件的点击事件。
    clickDisabled: {
      type: Boolean,
      default: true
    },
    text: {
      type: Boolean,
      default: true
    },
    size: {
      type: Number,
      default: 140
    }
  },
  emits: ["click", "resultClick"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const statusData = {
      empty: {
        icon: "tmicon-shiliangzhinengduixiang-",
        title: "数据空",
        subTitle: "下拉刷新",
        color: "primary"
      },
      error: {
        icon: "tmicon-times",
        title: "错误",
        subTitle: "请根据指示操作",
        color: "red"
      },
      success: {
        icon: "tmicon-check",
        title: "操作正确",
        subTitle: "请稍候",
        color: "green"
      },
      warning: {
        icon: "tmicon-exclamation-circle",
        title: "异常",
        subTitle: "请根据指示操作",
        color: "orange"
      },
      lock: {
        icon: "tmicon-ios-unlock",
        title: "授权提醒",
        subTitle: "需要你的授权进一步操作。",
        color: "blue"
      },
      network: {
        icon: "tmicon-wifi-off",
        title: "网络错误",
        subTitle: "请关注你的网络情况",
        color: "blue"
      }
    };
    const icon_rp = common_vendor.computed(() => {
      if (props.icon)
        return props.icon;
      if (!props.status)
        return "";
      return statusData[props.status].icon || "";
    });
    const icon_title = common_vendor.computed(() => {
      if (props.title)
        return props.title;
      if (!props.status)
        return "";
      return statusData[props.status].title || "";
    });
    const icon_subtitle = common_vendor.computed(() => {
      if (props.subTitle)
        return props.subTitle;
      if (!props.status)
        return "";
      return statusData[props.status].subTitle || "";
    });
    const icon_color = common_vendor.computed(() => {
      if (props.color)
        return props.color;
      if (!props.status)
        return "";
      return statusData[props.status].color || "";
    });
    const onClick = (e) => {
      if (props.clickDisabled)
        return;
      emits("resultClick", e);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          _style: "line-height:normal",
          dark: props.dark,
          followDark: props.followDark,
          fontSize: 80,
          name: common_vendor.unref(icon_rp)
        }),
        b: common_vendor.p({
          dark: props.dark,
          followTheme: false,
          followDark: props.followDark,
          _class: "flex-center flex-row rounded",
          width: props.size,
          height: props.size,
          round: 25,
          color: common_vendor.unref(icon_color),
          text: props.text
        }),
        c: common_vendor.p({
          eventPenetrationEnabled: true,
          name: "zoom",
          delay: 300
        }),
        d: common_vendor.p({
          dark: props.dark,
          followDark: props.followDark,
          _class: "text-weight-b",
          fontSize: 34,
          label: common_vendor.unref(icon_title)
        }),
        e: common_vendor.p({
          dark: props.dark,
          followDark: props.followDark,
          _class: "opacity-6 ",
          fontSize: 24,
          label: common_vendor.unref(icon_subtitle)
        }),
        f: props.showBtn
      }, props.showBtn ? {
        g: common_vendor.p({
          userInteractionEnabled: false,
          dark: props.dark,
          _class: "text-size-n",
          followDark: props.followDark,
          label: __props.btnText
        }),
        h: common_vendor.o(($event) => emits("click", $event)),
        i: common_vendor.p({
          padding: [0, 0],
          height: 80,
          dark: __props.dark,
          followTheme: props.followTheme,
          followDark: props.followDark,
          shadow: 3,
          linear: "right",
          color: common_vendor.unref(icon_color),
          _style: "cursor: pointer;",
          round: 4,
          width: 420,
          _class: "flex-center",
          margin: [0, 32]
        })
      } : {}, {
        j: common_vendor.o(onClick)
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/tmui/components/tm-result/tm-result.vue"]]);
wx.createComponent(Component);
