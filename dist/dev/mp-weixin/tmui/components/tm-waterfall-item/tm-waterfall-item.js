"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  (tmImage + tmIcon + tmSheet)();
}
const tmSheet = () => "../tm-sheet/tm-sheet.js";
const tmImage = () => "../tm-image/tm-image.js";
const tmIcon = () => "../tm-icon/tm-icon.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tm-waterfall-item",
  props: {
    img: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "white"
    },
    round: {
      type: Number,
      default: 4
    }
  },
  emits: ["img-click"],
  setup(__props, { emit: emits }) {
    var _a, _b;
    const props = __props;
    const proxy = (_b = (_a = common_vendor.getCurrentInstance()) == null ? void 0 : _a.proxy) != null ? _b : null;
    const imgerror = common_vendor.ref(false);
    const _width = common_vendor.inject("tmWaterFallItemRealWidth", common_vendor.computed$1(() => common_vendor.index.upx2px(_width.value)));
    let _nodeInfo = common_vendor.ref({
      id: common_vendor.index.$tm.u.getUid(2),
      width: _width.value,
      height: _width.value,
      imgWidth: _width.value,
      imgHeight: _width.value,
      bottom: 0,
      index: NaN,
      top: 0,
      left: 0
    });
    const isimgLoad = common_vendor.ref(props.img ? false : true);
    const _parentComs = getParent();
    const isPush = common_vendor.ref(false);
    if (!_parentComs) {
      console.error("\u8BF7\u4E0D\u8981\u5355\u72EC\u4F7F\u7528\u6B64\u7EC4\u4EF6\uFF0C\u8BF7\u653E\u7F6E\u5728:tm-waterfall\u5185\uFF1B");
    }
    _parentComs.sumTotal(_nodeInfo.value.id);
    common_vendor.onMounted(() => {
      common_vendor.nextTick(() => {
        if (isimgLoad.value === true) {
          nvuegetClientRect();
        }
      });
    });
    function imgLoadSuccess(e) {
      const { width, height } = e.detail;
      let _w = _width.value;
      let _height = _w / (width / height);
      _nodeInfo.value = { ..._nodeInfo.value, imgWidth: _w, imgHeight: _height };
      setTimeout(() => {
        common_vendor.nextTick(() => nvuegetClientRect());
      }, 50);
    }
    function error() {
      const wx_width = _width.value;
      const wx_height = _width.value;
      _width.value;
      console.log(wx_height);
      _nodeInfo.value = { ..._nodeInfo.value, imgWidth: wx_width, imgHeight: wx_width };
      setTimeout(() => {
        common_vendor.nextTick(() => nvuegetClientRect());
        imgerror.value = true;
      }, 50);
    }
    function getParent() {
      var _a2;
      let parent = proxy.$parent;
      while (parent) {
        if ((parent == null ? void 0 : parent.parentNameId) == "tmWaterfallId" || !parent) {
          break;
        } else {
          parent = (_a2 = parent == null ? void 0 : parent.$parent) != null ? _a2 : void 0;
        }
      }
      return parent;
    }
    function nvuegetClientRect() {
      common_vendor.nextTick(function() {
        common_vendor.index.createSelectorQuery().in(proxy).select(".itemWall").boundingClientRect((res) => {
          if (res.height === 0 && res.width === 0) {
            nvuegetClientRect();
          } else {
            isimgLoad.value = true;
            const { width, height } = res;
            _nodeInfo.value = {
              ..._nodeInfo.value,
              height
            };
            if (isPush.value === false && isimgLoad.value) {
              pushKey();
              isPush.value = true;
            }
          }
        }).exec();
      });
    }
    async function pushKey() {
      if (_parentComs) {
        let pos = await _parentComs.pushKey(common_vendor.toRaw(_nodeInfo.value));
        _nodeInfo.value = pos;
      }
    }
    function onImgClick(e) {
      emits("img-click", e);
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !imgerror.value && props.img
      }, !imgerror.value && props.img ? {
        b: common_vendor.o(onImgClick),
        c: common_vendor.o(imgLoadSuccess),
        d: common_vendor.o(error),
        e: common_vendor.p({
          round: props.round,
          src: props.img,
          unit: "px",
          height: common_vendor.unref(_nodeInfo).imgHeight,
          width: common_vendor.unref(_nodeInfo).imgWidth
        })
      } : {}, {
        f: imgerror.value
      }, imgerror.value ? {
        g: common_vendor.p({
          name: "tmicon-exclamation-circle"
        }),
        h: common_vendor.s(imgerror.value ? {
          height: common_vendor.unref(_nodeInfo).imgWidth + "px",
          width: common_vendor.unref(_nodeInfo).imgWidth + "px"
        } : "")
      } : {}, {
        i: common_vendor.p({
          margin: [0, 0],
          padding: [0, 0],
          round: props.round,
          width: common_vendor.unref(_width),
          unit: "px",
          color: props.color,
          _class: "flex flex-col flex-col-top-start"
        }),
        j: common_vendor.s(!isPush.value ? {
          transform: "translateX(-1000px)"
        } : ""),
        k: common_vendor.s(isPush.value ? {
          transform: `translateX(${common_vendor.unref(_nodeInfo).left}px) translateY(${common_vendor.unref(_nodeInfo).top}px)`
        } : "")
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/tmui/components/tm-waterfall-item/tm-waterfall-item.vue"]]);
wx.createComponent(Component);
