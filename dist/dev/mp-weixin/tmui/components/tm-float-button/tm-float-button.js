"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  (tmIcon + tmText + tmButton)();
}
const tmIcon = () => "../tm-icon/tm-icon.js";
const tmText = () => "../tm-text/tm-text.js";
const tmButton = () => "../tm-button/tm-button.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tm-float-button",
  props: {
    followTheme: {
      type: [Boolean],
      default: true
    },
    position: {
      type: String,
      default: "br"
    },
    actionsPos: {
      type: String,
      default: "top"
    },
    width: {
      type: Number,
      default: 124
    },
    height: {
      type: Number,
      default: 124
    },
    offset: {
      type: Array,
      default: () => [32, 32]
    },
    actions: {
      type: Array,
      default: () => []
    },
    btn: {
      type: Object,
      default: () => {
      },
      required: true
    },
    showActions: {
      type: Boolean,
      default: false
    },
    clickHidnActions: {
      type: Boolean,
      default: true
    },
    disabledScrollTo: {
      type: Boolean,
      default: true
    },
    scrollTo: {
      type: Object,
      default: () => {
        return {
          scrollTop: 0,
          selector: "",
          duration: 300
        };
      }
    }
  },
  emits: ["click", "change"],
  setup(__props, { emit: emits }) {
    var _a, _b, _c;
    const props = __props;
    const sysinfo = common_vendor.inject(
      "tmuiSysInfo",
      common_vendor.computed$1(() => {
        return {
          bottom: 0,
          height: 750,
          width: common_vendor.index.upx2px(750),
          top: 0,
          isCustomHeader: false,
          sysinfo: null
        };
      })
    );
    const windowWidth = common_vendor.computed$1(() => sysinfo.value.width);
    common_vendor.computed$1(() => sysinfo.value.top);
    (_b = (_a = common_vendor.getCurrentInstance()) == null ? void 0 : _a.proxy) != null ? _b : null;
    common_vendor.ref(false);
    const showActions = common_vendor.ref((_c = props.showActions) != null ? _c : false);
    const BtnPos = common_vendor.computed$1(() => props.position);
    const AcionPos = common_vendor.computed$1(() => props.actionsPos);
    const _offset = common_vendor.computed$1(() => {
      var _a2;
      let ost = (_a2 = props.offset) != null ? _a2 : [0, 0];
      ost = [common_vendor.index.upx2px(props.offset[0]), common_vendor.index.upx2px(props.offset[1])];
      return ost;
    });
    const centerPosLeft = common_vendor.computed$1(() => {
      let ps = (windowWidth.value - common_vendor.index.upx2px(props.width * 2)) / 2 + _offset.value[0] * 2;
      return ps;
    });
    common_vendor.computed$1(() => common_vendor.index.upx2px(props.width));
    const _btn = common_vendor.computed$1(() => {
      var _a2;
      return {
        icon: "tmicon-plus",
        fontSize: 20,
        color: "primary",
        linear: "",
        linearDeep: "accent",
        label: "",
        iconSize: 42,
        fontColor: "",
        ...(_a2 = props.btn) != null ? _a2 : {}
      };
    });
    const _actionsItem = common_vendor.computed$1(() => {
      let asbtn = props.actions.map((el) => {
        let default_btn = {
          icon: "tmicon-plus",
          fontSize: 20,
          color: "primary",
          linear: "",
          linearDeep: "accent",
          label: "",
          fontColor: "",
          iconSize: 36
        };
        return { ...default_btn, ...el };
      });
      return asbtn;
    });
    const _pos = common_vendor.computed$1(() => {
      common_vendor.index.upx2px(24);
      let actionwidth_total = _actionsItem.value.length * common_vendor.index.upx2px(props.width);
      let actionwidth = common_vendor.index.upx2px(props.width);
      if (AcionPos.value == "left" && BtnPos.value == "bc") {
        return {
          parent: {
            bottom: _offset.value[1] + "px",
            left: centerPosLeft.value + "px"
          },
          children: {
            bottom: _offset.value[1] + "px",
            left: centerPosLeft.value - actionwidth_total + "px",
            display: "flex",
            "flex-direction": "row"
          }
        };
      }
      if (AcionPos.value == "right" && BtnPos.value == "bc") {
        return {
          parent: {
            bottom: _offset.value[1] + "px",
            left: centerPosLeft.value + "px"
          },
          children: {
            bottom: _offset.value[1] + "px",
            left: centerPosLeft.value + actionwidth + "px",
            display: "flex",
            "flex-direction": "row"
          }
        };
      }
      if (AcionPos.value == "bottom" && BtnPos.value == "bc") {
        return {
          parent: {
            bottom: _offset.value[1] + "px",
            left: centerPosLeft.value + "px"
          },
          children: {
            bottom: _offset.value[1] - actionwidth_total + "px",
            left: centerPosLeft.value + "px"
          }
        };
      }
      if (AcionPos.value == "top" && BtnPos.value == "bc") {
        return {
          parent: {
            bottom: _offset.value[1] + "px",
            left: centerPosLeft.value + "px"
          },
          children: {
            bottom: _offset.value[1] + actionwidth + "px",
            left: centerPosLeft.value + "px"
          }
        };
      }
      if (AcionPos.value == "right" && BtnPos.value == "bl") {
        return {
          parent: {
            bottom: _offset.value[1] + "px",
            left: _offset.value[0] + "px"
          },
          children: {
            bottom: _offset.value[1] + "px",
            left: _offset.value[0] + actionwidth + "px",
            display: "flex",
            "flex-direction": "row"
          }
        };
      }
      if (AcionPos.value == "left" && BtnPos.value == "bl") {
        return {
          parent: {
            bottom: _offset.value[1] + "px",
            left: _offset.value[0] + "px"
          },
          children: {
            bottom: _offset.value[1] + "px",
            left: _offset.value[0] - actionwidth_total + "px",
            display: "flex",
            "flex-direction": "row"
          }
        };
      }
      if (AcionPos.value == "top" && BtnPos.value == "bl") {
        return {
          parent: {
            bottom: _offset.value[1] + "px",
            left: _offset.value[0] + "px"
          },
          children: {
            bottom: _offset.value[1] + actionwidth + "px",
            left: _offset.value[0] + "px"
          }
        };
      }
      if (AcionPos.value == "bottom" && BtnPos.value == "bl") {
        return {
          parent: {
            bottom: _offset.value[1] + "px",
            left: _offset.value[0] + "px"
          },
          children: {
            bottom: _offset.value[1] - actionwidth_total + "px",
            left: _offset.value[0] + "px"
          }
        };
      }
      if (AcionPos.value == "right" && BtnPos.value == "br") {
        return {
          parent: {
            bottom: _offset.value[1] + "px",
            right: _offset.value[0] + "px"
          },
          children: {
            bottom: _offset.value[1] + "px",
            right: _offset.value[0] - actionwidth_total + "px",
            display: "flex",
            "flex-direction": "row"
          }
        };
      }
      if (AcionPos.value == "left" && BtnPos.value == "br") {
        return {
          parent: {
            bottom: _offset.value[1] + "px",
            right: _offset.value[0] + "px"
          },
          children: {
            bottom: _offset.value[1] + "px",
            right: _offset.value[0] + actionwidth + "px",
            display: "flex",
            "flex-direction": "row"
          }
        };
      }
      if (AcionPos.value == "top" && BtnPos.value == "br") {
        return {
          parent: {
            bottom: _offset.value[1] + "px",
            right: _offset.value[0] + "px"
          },
          children: {
            bottom: _offset.value[1] + actionwidth + "px",
            right: _offset.value[0] + "px"
          }
        };
      }
      if (AcionPos.value == "bottom" && BtnPos.value == "br") {
        return {
          parent: {
            bottom: _offset.value[1] + "px",
            right: _offset.value[0] + "px"
          },
          children: {
            bottom: _offset.value[1] - actionwidth_total + "px",
            right: _offset.value[0] + "px"
          }
        };
      }
      if (AcionPos.value == "left" && BtnPos.value == "tc") {
        return {
          parent: {
            top: _offset.value[1] + "px",
            left: centerPosLeft.value + "px"
          },
          children: {
            top: _offset.value[1] + "px",
            left: centerPosLeft.value - actionwidth_total + "px",
            display: "flex",
            "flex-direction": "row"
          }
        };
      }
      if (AcionPos.value == "right" && BtnPos.value == "tc") {
        return {
          parent: {
            top: _offset.value[1] + "px",
            left: centerPosLeft.value + "px"
          },
          children: {
            top: _offset.value[1] + "px",
            left: centerPosLeft.value + actionwidth + "px",
            display: "flex",
            "flex-direction": "row"
          }
        };
      }
      if (AcionPos.value == "bottom" && BtnPos.value == "tc") {
        return {
          parent: {
            top: _offset.value[1] + "px",
            left: centerPosLeft.value + "px"
          },
          children: {
            top: _offset.value[1] + actionwidth + "px",
            left: centerPosLeft.value + "px"
          }
        };
      }
      if (AcionPos.value == "top" && BtnPos.value == "tc") {
        return {
          parent: {
            top: _offset.value[1] + "px",
            left: centerPosLeft.value + "px"
          },
          children: {
            top: _offset.value[1] - actionwidth_total + "px",
            left: centerPosLeft.value + "px"
          }
        };
      }
      if (AcionPos.value == "right" && BtnPos.value == "tl") {
        return {
          parent: {
            top: _offset.value[1] + "px",
            left: _offset.value[0] + "px"
          },
          children: {
            top: _offset.value[1] + "px",
            left: _offset.value[0] + actionwidth + "px",
            display: "flex",
            "flex-direction": "row"
          }
        };
      }
      if (AcionPos.value == "left" && BtnPos.value == "tl") {
        return {
          parent: {
            top: _offset.value[1] + "px",
            left: _offset.value[0] + "px"
          },
          children: {
            top: _offset.value[1] + "px",
            left: _offset.value[0] - actionwidth_total + "px",
            display: "flex",
            "flex-direction": "row"
          }
        };
      }
      if (AcionPos.value == "top" && BtnPos.value == "tl") {
        return {
          parent: {
            top: _offset.value[1] + "px",
            left: _offset.value[0] + "px"
          },
          children: {
            top: _offset.value[1] - actionwidth_total + "px",
            left: _offset.value[0] + "px"
          }
        };
      }
      if (AcionPos.value == "bottom" && BtnPos.value == "tl") {
        return {
          parent: {
            top: _offset.value[1] + "px",
            left: _offset.value[0] + "px"
          },
          children: {
            top: _offset.value[1] + actionwidth + "px",
            left: _offset.value[0] + "px"
          }
        };
      }
      if (AcionPos.value == "right" && BtnPos.value == "tr") {
        return {
          parent: {
            top: _offset.value[1] + "px",
            right: _offset.value[0] + "px"
          },
          children: {
            top: _offset.value[1] + "px",
            right: _offset.value[0] - actionwidth_total + "px",
            display: "flex",
            "flex-direction": "row"
          }
        };
      }
      if (AcionPos.value == "left" && BtnPos.value == "tr") {
        return {
          parent: {
            top: _offset.value[1] + "px",
            right: _offset.value[0] + "px"
          },
          children: {
            top: _offset.value[1] + "px",
            right: _offset.value[0] + actionwidth + "px",
            display: "flex",
            "flex-direction": "row"
          }
        };
      }
      if (AcionPos.value == "top" && BtnPos.value == "tr") {
        return {
          parent: {
            top: _offset.value[1] + "px",
            right: _offset.value[0] + "px"
          },
          children: {
            top: _offset.value[1] - actionwidth_total + "px",
            right: _offset.value[0] + "px"
          }
        };
      }
      if (AcionPos.value == "bottom" && BtnPos.value == "tr") {
        return {
          parent: {
            top: _offset.value[1] + "px",
            right: _offset.value[0] + "px"
          },
          children: {
            top: _offset.value[1] + actionwidth + "px",
            right: _offset.value[0] + "px"
          }
        };
      }
    });
    function onclick(e) {
      if (props.clickHidnActions) {
        showActions.value = !showActions.value;
      } else {
        showActions.value = true;
      }
      emits("click", e);
      if (!props.disabledScrollTo) {
        common_vendor.index.pageScrollTo({
          scrollTop: props.scrollTo.scrollTop,
          duration: props.scrollTo.duration,
          selector: props.scrollTo.selector
        });
      }
    }
    common_vendor.onMounted(() => {
      if (showActions.value)
        ;
    });
    function change(index, item) {
      if (props.clickHidnActions) {
        showActions.value = false;
      }
      emits("change", index, item);
    }
    return (_ctx, _cache) => {
      var _a2, _b2;
      return common_vendor.e({
        a: common_vendor.p({
          userInteractionEnabled: false,
          ["follow-dark"]: false,
          color: common_vendor.unref(_btn).fontColor,
          name: common_vendor.unref(_btn).icon,
          ["font-size"]: common_vendor.unref(_btn).iconSize
        }),
        b: common_vendor.unref(_btn).label
      }, common_vendor.unref(_btn).label ? {
        c: common_vendor.p({
          userInteractionEnabled: false,
          ["follow-dark"]: false,
          color: common_vendor.unref(_btn).fontColor,
          label: common_vendor.unref(_btn).label,
          ["font-size"]: common_vendor.unref(_btn).fontSize
        })
      } : {}, {
        d: common_vendor.o(onclick),
        e: common_vendor.p({
          followTheme: props.followTheme,
          _class: "flex flex-col flex-col-center-center",
          shadow: 3,
          linear: common_vendor.unref(_btn).linear,
          ["linear-deep"]: common_vendor.unref(_btn).linearDeep,
          color: common_vendor.unref(_btn).color,
          margin: [0, 0],
          round: 16,
          padding: [0, 0],
          width: props.width - 24,
          height: props.height - 24
        }),
        f: props.width + "rpx",
        g: props.height + "rpx",
        h: showActions.value && common_vendor.unref(_actionsItem).length > 0
      }, showActions.value && common_vendor.unref(_actionsItem).length > 0 ? {
        i: common_vendor.f(common_vendor.unref(_actionsItem), (item, index, i0) => {
          return common_vendor.e({
            a: "77075966-4-" + i0 + "," + ("77075966-3-" + i0),
            b: common_vendor.p({
              userInteractionEnabled: false,
              ["follow-dark"]: false,
              color: item.fontColor,
              name: item.icon,
              ["font-size"]: item.iconSize
            }),
            c: item.label
          }, item.label ? {
            d: "77075966-5-" + i0 + "," + ("77075966-3-" + i0),
            e: common_vendor.p({
              userInteractionEnabled: false,
              ["follow-dark"]: false,
              color: item.fontColor,
              label: item.label,
              ["font-size"]: item.fontSize
            })
          } : {}, {
            f: common_vendor.o(($event) => change(index, item), index),
            g: "77075966-3-" + i0,
            h: common_vendor.p({
              followTheme: props.followTheme,
              _class: "flex flex-col flex-col-center-center",
              shadow: 3,
              linear: item.linear,
              ["linear-deep"]: item.linearDeep,
              color: item.color,
              margin: [0, 0],
              round: 16,
              padding: [0, 0],
              width: props.width - 24,
              height: props.height - 24
            }),
            i: index
          });
        }),
        j: props.width + "rpx",
        k: props.height + "rpx",
        l: common_vendor.n(showActions.value && common_vendor.unref(_actionsItem).length > 0 ? "scaleNvue" : ""),
        m: common_vendor.s((_a2 = common_vendor.unref(_pos)) == null ? void 0 : _a2.children),
        n: showActions.value
      } : {}, {
        o: common_vendor.s((_b2 = common_vendor.unref(_pos)) == null ? void 0 : _b2.parent)
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-77075966"], ["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/tmui/components/tm-float-button/tm-float-button.vue"]]);
wx.createComponent(Component);
