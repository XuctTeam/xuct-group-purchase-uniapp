"use strict";
const common_vendor = require("../../../common/vendor.js");
const tmui_tool_lib_minxs = require("../../tool/lib/minxs.js");
const tmui_tool_static_province = require("../../tool/static/province.js");
const tmui_tool_static_city = require("../../tool/static/city.js");
const tmui_tool_static_area = require("../../tool/static/area.js");
require("../../tool/theme/theme.js");
require("../../tool/theme/colortool.js");
require("../../tool/lib/interface.js");
if (!Math) {
  (tmPickerView + tmButton + tmDrawer)();
}
const tmDrawer = () => "../tm-drawer/tm-drawer.js";
const tmPickerView = () => "../tm-picker-view/tm-picker-view.js";
const tmButton = () => "../tm-button/tm-button.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tm-city-picker",
  props: {
    ...tmui_tool_lib_minxs.custom_props,
    followTheme: {
      type: [Boolean, String],
      default: true
    },
    modelValue: {
      type: Array,
      default: () => []
    },
    modelStr: {
      type: String,
      default: ""
    },
    show: {
      type: [Boolean],
      default: false
    },
    selectedModel: {
      type: String,
      default: "id"
    },
    cityLevel: {
      type: String,
      default: "area"
    },
    city: {
      type: Array,
      default: () => []
    },
    color: {
      type: String,
      default: "primary"
    },
    linear: {
      type: String,
      default: ""
    },
    linearDeep: {
      type: String,
      default: "light"
    },
    btnRound: {
      type: Number,
      default: 3
    },
    round: {
      type: Number,
      default: 12
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    "update:show",
    "update:modelValue",
    "update:modelStr",
    "confirm",
    "cancel"
  ],
  setup(__props, { emit: emits }) {
    var _a, _b;
    const props = __props;
    (_b = (_a = common_vendor.getCurrentInstance()) == null ? void 0 : _a.proxy) != null ? _b : null;
    const drawer = common_vendor.ref(null);
    const picker = common_vendor.ref(null);
    const showCity = common_vendor.ref(true);
    const _cityData = common_vendor.computed$1(() => props.city);
    const _colIndex = common_vendor.ref([]);
    const _data = common_vendor.ref(chiliFormatCity_area());
    let tmid = NaN;
    const _colStr = common_vendor.ref("");
    const aniover = common_vendor.ref(true);
    const sysinfo = common_vendor.inject("tmuiSysInfo", {
      bottom: 0,
      height: 750,
      width: common_vendor.index.upx2px(750),
      top: 0,
      isCustomHeader: false,
      sysinfo: null
    });
    let win_bottom = sysinfo.bottom;
    common_vendor.watchEffect(() => {
      showCity.value = props.show;
    });
    common_vendor.watch(
      [() => props.city, () => props.modelValue],
      () => {
        _data.value = chiliFormatCity_area();
        clearTimeout(tmid);
        tmid = setTimeout(function() {
          getIndexBymodel(_data.value, props.selectedModel, 0, props.modelValue);
          defaultModerStrGet();
        }, 500);
      },
      { deep: true }
    );
    function closeDrawer(e) {
      showCity.value = e;
      emits("update:show", showCity.value);
      getIndexBymodel(_data.value, "index", 0, common_vendor.toRaw(_colIndex.value));
    }
    function drawerOpen() {
      getIndexBymodel(_data.value, props.selectedModel, 0, props.modelValue);
    }
    function confirm() {
      if (!aniover.value)
        return;
      setVal();
      common_vendor.nextTick(() => {
        var _a2;
        emits("confirm", props.modelValue);
        (_a2 = drawer.value) == null ? void 0 : _a2.close();
      });
    }
    function cancel() {
      if (!aniover.value)
        return;
      emits("cancel");
    }
    function setVal() {
      var _a2;
      let val = [];
      if (props.selectedModel == "name") {
        val = (_a2 = _colStr.value.split("/")) != null ? _a2 : [];
      } else if (props.selectedModel == "id") {
        val = getRouterId(_data.value, 0);
      } else {
        val = [..._colIndex.value];
      }
      emits("update:modelValue", val);
      emits("update:modelStr", _colStr.value);
    }
    function defaultModerStrGet() {
      clearTimeout(tmid);
      tmid = setTimeout(function() {
        if (_colIndex.value.length > 0) {
          console.log(_colIndex.value, 999);
          let text = getRouterText(_data.value, 0);
          emits("update:modelStr", text.join("/"));
        }
      }, 200);
    }
    function getIndexBymodel(vdata = [], model = "name", parentIndex = 0, value = []) {
      if (value.length == 0)
        return [];
      if (model == "name") {
        let item = vdata.filter((el) => value[parentIndex] == el["text"]);
        if (item.length == 0) {
          item = vdata[0];
          if (item) {
            value[parentIndex] = item["text"];
            _colIndex.value[parentIndex] = 0;
            if (item["children"]) {
              getIndexBymodel(item["children"], model, parentIndex + 1, value);
            }
          }
        } else {
          item = item[0];
          if (item) {
            _colIndex.value[parentIndex] = vdata.findIndex(
              (el) => el["text"] == item["text"]
            );
            if (item["children"]) {
              getIndexBymodel(item["children"], model, parentIndex + 1, value);
            }
          }
        }
      } else if (model == "id") {
        let item = vdata.filter((el) => value[parentIndex] == el["id"]);
        if (item.length == 0) {
          item = vdata[0];
          if (item) {
            value[parentIndex] = item["id"];
            _colIndex.value[parentIndex] = 0;
            if (item["children"]) {
              getIndexBymodel(item["children"], model, parentIndex + 1, value);
            }
          }
        } else {
          item = item[0];
          if (item) {
            _colIndex.value[parentIndex] = vdata.findIndex((el) => el["id"] == item["id"]);
            if (item["children"]) {
              getIndexBymodel(item["children"], model, parentIndex + 1, value);
            }
          }
        }
      }
      return _colIndex.value;
    }
    function getRouterId(list = [], parentIndex = 0) {
      let p = [];
      for (let i = 0; i < list.length; i++) {
        if (i == _colIndex.value[parentIndex]) {
          p.push(list[i]["id"]);
          if (typeof _colIndex.value[parentIndex] != "undefined") {
            let c = getRouterId(list[i]["children"], parentIndex + 1);
            p = [...p, ...c];
          }
          break;
        }
      }
      return p;
    }
    function getRouterText(list = [], parentIndex = 0) {
      let p = [];
      for (let i = 0; i < list.length; i++) {
        if (i == _colIndex.value[parentIndex]) {
          p.push(list[i]["text"]);
          if (typeof _colIndex.value[parentIndex] != "undefined") {
            let c = getRouterText(list[i]["children"], parentIndex + 1);
            p = [...p, ...c];
          }
          break;
        }
      }
      return p;
    }
    function chiliFormatCity_area() {
      let list = [];
      if (_cityData.value.length > 0) {
        return _cityData.value;
      }
      tmui_tool_static_province.provinceData.forEach((item, index) => {
        var _a2;
        list.push({
          id: (_a2 = item.value) != null ? _a2 : "",
          text: String(item.label),
          children: []
        });
      });
      if (props.cityLevel == "province")
        return list;
      tmui_tool_static_city.cityData.forEach((item, index) => {
        item.forEach((citem, cindex) => {
          var _a2, _b2, _c;
          (_c = list[index]) == null ? void 0 : _c.children.push({
            id: (_a2 = citem.value) != null ? _a2 : "",
            text: (_b2 = citem.label) != null ? _b2 : "",
            children: []
          });
        });
      });
      if (props.cityLevel == "city")
        return list;
      list.forEach((item, index) => {
        item.children.forEach((citem, cindex) => {
          tmui_tool_static_area.areaData[index][cindex].forEach((jitem) => {
            var _a2, _b2, _c, _d;
            (_d = (_a2 = list[index]) == null ? void 0 : _a2.children[cindex]) == null ? void 0 : _d.children.push({
              id: (_b2 = jitem.value) != null ? _b2 : "",
              text: (_c = jitem.label) != null ? _c : ""
            });
          });
        });
      });
      return list;
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: showCity.value
      }, showCity.value ? {
        b: common_vendor.sr(picker, "20c9eb5a-1,20c9eb5a-0", {
          "k": "picker"
        }),
        c: common_vendor.o(($event) => aniover.value = true),
        d: common_vendor.o(($event) => aniover.value = false),
        e: common_vendor.o(($event) => _colIndex.value = $event),
        f: common_vendor.o(($event) => _colStr.value = $event),
        g: common_vendor.p({
          height: 590,
          value: _colIndex.value,
          ["model-str"]: _colStr.value,
          ["default-value"]: _colIndex.value,
          columns: _data.value
        })
      } : {}, {
        h: common_vendor.o(confirm),
        i: common_vendor.p({
          label: "\u786E\u8BA4\u9009\u62E9",
          block: true,
          margin: [32, 12],
          color: props.color,
          linear: props.linear,
          ["linear-deep"]: props.linearDeep,
          round: props.btnRound
        }),
        j: common_vendor.unref(win_bottom) + "px",
        k: common_vendor.sr(drawer, "20c9eb5a-0", {
          "k": "drawer"
        }),
        l: common_vendor.o(drawerOpen),
        m: common_vendor.o(cancel),
        n: common_vendor.o(confirm),
        o: common_vendor.o(closeDrawer),
        p: common_vendor.p({
          disabbleScroll: true,
          round: props.round,
          height: 820,
          closable: true,
          overlayClick: aniover.value,
          show: showCity.value,
          title: "\u8BF7\u9009\u62E9\u5730\u533A",
          ["ok-text"]: "\u786E\u8BA4"
        }),
        q: common_vendor.o(($event) => showCity.value = !props.disabled ? !showCity.value : false)
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/tmui/components/tm-city-picker/tm-city-picker.vue"]]);
wx.createComponent(Component);
