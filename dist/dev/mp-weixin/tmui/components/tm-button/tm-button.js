"use strict";
const common_vendor = require("../../../common/vendor.js");
const tmui_tool_lib_minxs = require("../../tool/lib/minxs.js");
const tmui_tool_lib_tmpinia = require("../../tool/lib/tmpinia.js");
const tmui_tool_theme_theme = require("../../tool/theme/theme.js");
require("../../tool/lib/interface.js");
require("../../tool/function/util.js");
require("../../tool/function/preview.js");
require("../../tool/theme/colortool.js");
if (!Math) {
  tmIcon();
}
const tmIcon = () => "../tm-icon/tm-icon.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tm-button",
  props: {
    ...tmui_tool_lib_minxs.custom_props,
    transprent: {
      type: Boolean,
      default: false
    },
    followTheme: {
      type: Boolean,
      default: true
    },
    hoverClass: {
      type: String,
      default: "opacity-7"
    },
    size: {
      type: String,
      default: "normal"
    },
    fontSize: {
      type: Number,
      default: 0
    },
    fontColor: {
      type: String,
      default: ""
    },
    margin: {
      type: Array,
      default: () => [0, 16]
    },
    padding: {
      type: Array,
      default: () => [0, 0]
    },
    noLevel: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Number,
      default: 2
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    block: {
      type: Boolean,
      default: false
    },
    round: {
      type: Number,
      default: 0
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    url: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    formType: {
      type: String,
      default: ""
    },
    openType: {
      type: String,
      default: ""
    },
    appParameter: {
      type: String,
      default: ""
    },
    sessionFrom: {
      type: String,
      default: ""
    },
    sendMessageTitle: {
      type: String,
      default: ""
    },
    sendMessagePath: {
      type: String,
      default: ""
    },
    sendMessageImg: {
      type: String,
      default: ""
    },
    sendMessageCard: {
      type: String,
      default: ""
    },
    groupId: {
      type: String,
      default: ""
    },
    guildId: {
      type: String,
      default: ""
    },
    publicId: {
      type: String,
      default: ""
    },
    unit: {
      type: String,
      default: "rpx"
    },
    darkBgColor: {
      type: String,
      default: ""
    },
    disabledColor: {
      type: String,
      default: "grey-1"
    }
  },
  emits: ["click", "touchstart", "touchmove", "touchcancel", "touchend", "tap", "longpress", "getphonenumber", "getUserInfo", "getUserProfile", "error", "opensetting", "launchapp", "contact", "chooseavatar"],
  setup(__props, { emit: emits }) {
    var _a, _b, _c, _d;
    const props = __props;
    const store = tmui_tool_lib_tmpinia.useTmpiniaStore();
    common_vendor.ref(false);
    const proxy = (_b = (_a = common_vendor.getCurrentInstance()) == null ? void 0 : _a.proxy) != null ? _b : null;
    const formtype = common_vendor.computed$1(() => props.formType);
    let FormParent = null;
    let FilterParent = null;
    if (formtype.value == "reset" || formtype.value == "submit") {
      FormParent = proxy == null ? void 0 : proxy.$parent;
      while (FormParent) {
        if ((FormParent == null ? void 0 : FormParent.tmFormComnameId) == "tmFormId" || !FormParent) {
          break;
        } else {
          FormParent = (_c = FormParent == null ? void 0 : FormParent.$parent) != null ? _c : void 0;
        }
      }
    }
    if (formtype.value == "filterCancel" || formtype.value == "filterConfirm") {
      FilterParent = proxy == null ? void 0 : proxy.$parent;
      while (FilterParent) {
        if ((FilterParent == null ? void 0 : FilterParent.FilterMenu) == "FilterMenu" || !FilterParent) {
          break;
        } else {
          FilterParent = (_d = FilterParent == null ? void 0 : FilterParent.$parent) != null ? _d : void 0;
        }
      }
    }
    const _noLevel = common_vendor.computed$1(() => props.noLevel);
    const isDark = common_vendor.computed$1(() => tmui_tool_lib_minxs.computedDark(props, tmcfg.value));
    let textColor = common_vendor.computed$1(() => {
      if (tmui_tool_theme_theme.theme.isCssColor(_fontColor.value))
        return _fontColor.value;
      if (!props.fontColor)
        return tmcomputed.value.textColor;
      return tmui_tool_theme_theme.theme.getColor(props.fontColor).value;
    });
    const customCSSStyle = common_vendor.computed$1(() => {
      return {
        ...tmui_tool_lib_minxs.computedStyle(props)
      };
    });
    const customClass = common_vendor.computed$1(() => tmui_tool_lib_minxs.computedClass(props));
    const tmcfg = common_vendor.computed$1(() => store.tmStore);
    const tmcomputed = common_vendor.computed$1(() => {
      let nprops = { ...props };
      if (_disabled.value) {
        nprops.color = props.disabledColor;
      }
      return tmui_tool_lib_minxs.computedTheme({ ...nprops }, isDark.value, tmcfg.value);
    });
    const isclickOn = common_vendor.ref(false);
    const _load = common_vendor.computed$1(() => props.loading);
    const _disabled = common_vendor.computed$1(() => props.disabled);
    const _label = common_vendor.computed$1(() => props.label);
    const _icon = common_vendor.computed$1(() => props.icon);
    common_vendor.computed$1(() => {
      if (props.outlined && props.border == 0)
        return 1;
      if (props.border > 0)
        return props.border;
      return 0;
    });
    const sizeObj = common_vendor.computed$1(() => {
      let ptest = {
        block: { w: 0, h: 80, fontSize: 28, round: 3 },
        mini: { w: 88, h: 36, fontSize: 20, round: 2 },
        small: { w: 120, h: 56, fontSize: 22, round: 2 },
        normal: { w: 220, h: 80, fontSize: 28, round: 2 },
        middle: { w: 360, h: 80, fontSize: 30, round: 2 },
        large: { w: 535, h: 88, fontSize: 32, round: 3 }
      };
      if (props.unit == "px") {
        let key = "block";
        let key2 = "w";
        for (key in ptest) {
          for (key2 in ptest[key]) {
            ptest[key][key2] = common_vendor.index.upx2px(ptest[key][key2]);
          }
        }
      }
      return ptest;
    });
    const btnSizeObj = common_vendor.computed$1(() => {
      let fontSize = props.fontSize || 0;
      if (props.block) {
        return {
          w: 0,
          h: props.height || sizeObj.value.block.h,
          fontSize: fontSize || sizeObj.value.block.fontSize,
          round: props.round == -1 ? 0 : props.round || sizeObj.value.normal.round
        };
      }
      return {
        w: props.width || sizeObj.value[props.size].w,
        h: props.height || sizeObj.value[props.size].h,
        fontSize: fontSize || sizeObj.value[props.size].fontSize,
        round: props.round == -1 ? 0 : props.round || sizeObj.value[props.size].round
      };
    });
    const _fontColor = common_vendor.computed$1(() => props.fontColor);
    const _transprent = common_vendor.computed$1(() => props.transprent);
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
    function touchstart(e) {
      isclickOn.value = true;
      emits("touchstart", e);
    }
    function touchend(e) {
      isclickOn.value = false;
      emits("touchend", e);
    }
    function onclick(e) {
      if (FormParent != null && typeof FormParent != "undefined" && formtype.value && !props.loading) {
        FormParent[formtype.value]();
      }
      if (FilterParent != null && typeof FilterParent != "undefined" && formtype.value && !props.loading) {
        FilterParent[formtype.value]();
      }
      emits("click", e);
      if (props.url !== "" && typeof props.url === "string") {
        let url = props.url;
        if (url[0] !== "/")
          url = "/" + url;
        common_vendor.index.navigateTo({
          url
        });
        return;
      }
      if (props.openType == "getUserInfo" || props.openType == "getUserProfile") {
        common_vendor.index.getUserProfile({
          desc: "\u7528\u4E8E\u5B8C\u5584\u4F1A\u5458\u8D44\u6599",
          success: function(userProfile) {
            if (userProfile.errMsg != "getUserProfile:ok") {
              common_vendor.index.showToast({
                title: userProfile.errMsg,
                icon: "error",
                mask: true
              });
              return;
            }
            emits("getUserInfo", userProfile);
            emits("getUserProfile", userProfile);
          },
          fail: (error) => {
            console.log(error);
            common_vendor.index.showToast({
              icon: "none",
              title: typeof error == "object" ? error.errMsg : error
            });
          }
        });
        console.warn(
          "\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5DF2\u6536\u56DE\u2018getUserProfile\u2019\u4EE5\u53CA\u2018getUserInfo\u2019\u6743\u9650\uFF0C\u8BF7\u4F7F\u7528open-type='chooseAvatar'\u4F7F\u7528@chooseavatar\u56DE\u8C03\uFF0C\u8BE6\u89C1\u300A\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7528\u6237\u5934\u50CF\u6635\u79F0\u83B7\u53D6\u89C4\u5219\u8C03\u6574\u516C\u544A\u300Bhttps://developers.weixin.qq.com/community/develop/doc/00022c683e8a80b29bed2142b56c01"
        );
      }
    }
    common_vendor.provide("appTextColor", textColor);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(_icon)
      }, common_vendor.unref(_icon) ? {
        b: common_vendor.p({
          lineHeight: common_vendor.unref(btnSizeObj).fontSize * 0.9,
          userInteractionEnabled: false,
          color: common_vendor.unref(_fontColor),
          _class: common_vendor.unref(_label) ? "pr-10" : "",
          unit: props.unit,
          fontSize: common_vendor.unref(btnSizeObj).fontSize * 0.9,
          name: common_vendor.unref(_icon)
        })
      } : {}, {
        c: common_vendor.t(common_vendor.unref(_label)),
        d: common_vendor.o(onclick),
        e: common_vendor.o(touchstart),
        f: common_vendor.o(touchend),
        g: common_vendor.o(($event) => emits("longpress", $event)),
        h: common_vendor.o(($event) => {
          isclickOn.value = false;
          emits("touchcancel", $event);
        }),
        i: common_vendor.o(($event) => emits("touchmove", $event)),
        j: common_vendor.o(($event) => emits("getphonenumber", $event)),
        k: common_vendor.o(($event) => emits("error", $event)),
        l: common_vendor.o(($event) => emits("opensetting", $event)),
        m: common_vendor.o(($event) => emits("launchapp", $event)),
        n: common_vendor.o(($event) => emits("contact", $event)),
        o: common_vendor.o(($event) => emits("chooseavatar", $event)),
        p: props.formType,
        q: props.openType,
        r: props.appParameter,
        s: props.sessionFrom,
        t: props.sendMessageTitle,
        v: props.sendMessagePath,
        w: props.sendMessageImg,
        x: props.sendMessageCard,
        y: common_vendor.unref(_load),
        z: common_vendor.unref(_disabled),
        A: props.groupId,
        B: props.guildId,
        C: props.publicId,
        D: common_vendor.n(isclickOn.value && !common_vendor.unref(_disabled) && !common_vendor.unref(_load) ? props.hoverClass + " bhover" : ""),
        E: common_vendor.n(!common_vendor.unref(_disabled) && !common_vendor.unref(_load) ? "webpc" : ""),
        F: common_vendor.n(common_vendor.unref(_load) || common_vendor.unref(_disabled) ? "opacity-8" : ""),
        G: common_vendor.n(!_ctx.isDisabledRoundAndriod ? `round-${common_vendor.unref(btnSizeObj).round}` : ""),
        H: common_vendor.n(common_vendor.unref(customClass)),
        I: common_vendor.s({
          marginLeft: common_vendor.unref(_margin)[0] + "rpx",
          marginTop: common_vendor.unref(_margin)[1] + "rpx",
          marginRight: common_vendor.unref(_margin)[2] + "rpx",
          marginBottom: common_vendor.unref(_margin)[3] + "rpx",
          paddingLeft: common_vendor.unref(_padding)[0] + "rpx",
          paddingTop: common_vendor.unref(_padding)[1] + "rpx",
          paddingRight: common_vendor.unref(_padding)[2] + "rpx",
          paddingBottom: common_vendor.unref(_padding)[3] + "rpx"
        }),
        J: common_vendor.s({
          height: common_vendor.unref(btnSizeObj).h + props.unit,
          fontSize: common_vendor.unref(btnSizeObj).fontSize + props.unit,
          color: common_vendor.unref(textColor),
          lineHeight: common_vendor.unref(btnSizeObj).h + props.unit
        }),
        K: common_vendor.s(common_vendor.unref(btnSizeObj).w && !props.block ? {
          width: common_vendor.unref(btnSizeObj).w + props.unit
        } : ""),
        L: common_vendor.s(common_vendor.unref(tmcomputed).borderCss),
        M: common_vendor.s(common_vendor.unref(_bgcolor)),
        N: common_vendor.s(!common_vendor.unref(_transprent) && props.shadow > 0 ? common_vendor.unref(tmcomputed).shadowColor : ""),
        O: common_vendor.s(common_vendor.unref(customCSSStyle))
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f3634985"], ["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/tmui/components/tm-button/tm-button.vue"]]);
wx.createComponent(Component);
