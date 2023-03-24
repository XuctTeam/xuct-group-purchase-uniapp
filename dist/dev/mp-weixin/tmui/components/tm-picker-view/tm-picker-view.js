"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  pickerPanelVue();
}
const pickerPanelVue = () => "./picker-panel.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tm-picker-view",
  props: {
    followTheme: {
      type: [Boolean],
      default: true
    },
    height: {
      type: Number,
      default: 450
    },
    modelValue: {
      type: Array,
      default: () => []
    },
    modelStr: {
      type: [String],
      default: ""
    },
    defaultValue: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => [],
      required: true
    },
    dataKey: {
      type: String,
      default: "text"
    },
    mapKey: {
      type: String,
      default: "text"
    },
    beforeChange: {
      type: [Boolean, Function],
      default: () => false
    },
    immediateChange: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    "change",
    "update:modelValue",
    "update:modelStr",
    "end",
    "start"
  ],
  setup(__props, { emit: emits }) {
    const props = __props;
    const _colIndex = common_vendor.ref([...props.defaultValue]);
    const _data = common_vendor.ref([]);
    const _modelStr = common_vendor.computed$1(() => {
      let str = [];
      _data.value.forEach((el, index) => {
        var _a;
        let item = el[_colIndex.value[index]];
        if (typeof item == "undefined")
          return;
        str.push((_a = item[props.mapKey || props.dataKey]) != null ? _a : "");
      });
      return str.join("/");
    });
    common_vendor.watch(
      () => _colIndex.value,
      () => {
        common_vendor.nextTick(() => {
          emits("update:modelStr", _modelStr.value);
        });
      },
      { deep: true }
    );
    function getIndexLoop(defaultindex = 0, data) {
      var _a;
      let ds = [];
      if (data.length == 0)
        return [];
      if (typeof _colIndex.value[defaultindex] == "undefined") {
        _colIndex.value.push(0);
      }
      let nowData = data[_colIndex.value[defaultindex]];
      if (!nowData) {
        _colIndex.value[defaultindex] = 0;
        nowData = data[_colIndex.value[defaultindex]];
      }
      if (nowData && (nowData == null ? void 0 : nowData.children) && Array.isArray(nowData == null ? void 0 : nowData.children) && ((_a = nowData == null ? void 0 : nowData.children) == null ? void 0 : _a.length) > 0) {
        ds.push(data);
        let dy = getIndexLoop(defaultindex + 1, nowData == null ? void 0 : nowData.children);
        ds = [...ds, ...dy];
      } else {
        if ((data == null ? void 0 : data.length) > 0 && Array.isArray(data) && data) {
          ds.push(data);
        }
      }
      return ds;
    }
    _data.value = getIndexLoop(0, props.columns);
    common_vendor.watch(
      () => props.columns,
      () => {
        _data.value = getIndexLoop(0, props.columns);
      },
      { deep: true }
    );
    common_vendor.watch(
      () => props.modelValue,
      () => {
        _colIndex.value = props.modelValue;
        _data.value = getIndexLoop(0, props.columns);
      },
      { deep: true }
    );
    async function pickerChange(itemindex, levelIndex) {
      let isActive = true;
      let toItem = _data.value[levelIndex][itemindex];
      const params = {
        from: {
          itemindex: _colIndex.value[levelIndex],
          levelIndex,
          data: _data.value[levelIndex][_colIndex.value[levelIndex]]
        },
        to: { itemindex, levelIndex, data: toItem }
      };
      _colIndex.value.splice(levelIndex, 1, itemindex);
      if (typeof props.beforeChange === "function") {
        common_vendor.index.showLoading({ title: "...", mask: true });
        let p = await props.beforeChange(params);
        if (typeof p === "function") {
          p = await p(params);
        }
        if (!p) {
          isActive = false;
          common_vendor.nextTick(() => {
            _colIndex.value.splice(levelIndex, 1, params.from.itemindex);
          });
          common_vendor.index.hideLoading();
        }
      }
      if ((toItem == null ? void 0 : toItem.disabled) == true) {
        isActive = false;
        common_vendor.nextTick(() => {
          _colIndex.value.splice(levelIndex, 1, params.from.itemindex);
        });
      }
      if (isActive) {
        _data.value = getIndexLoop(0, props.columns);
        emits("change", levelIndex, itemindex);
        emits("update:modelValue", common_vendor.toRaw(_colIndex.value));
      }
    }
    common_vendor.nextTick(() => {
      emits("update:modelValue", common_vendor.toRaw(_colIndex.value));
      emits("update:modelStr", _modelStr.value || props.modelStr);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(_data.value, (item, index, i0) => {
          return {
            a: common_vendor.o(($event) => emits("end"), index),
            b: common_vendor.o(($event) => emits("start"), index),
            c: common_vendor.o(($event) => pickerChange($event, index), index),
            d: index,
            e: "8fdc4e4c-0-" + i0,
            f: common_vendor.p({
              immediateChange: props.immediateChange,
              followTheme: props.followTheme,
              dataKey: props.mapKey || props.dataKey,
              mapKey: props.mapKey || props.dataKey,
              col: _colIndex.value[index],
              data: item,
              height: props.height
            })
          };
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/tmui/components/tm-picker-view/tm-picker-view.vue"]]);
wx.createComponent(Component);
