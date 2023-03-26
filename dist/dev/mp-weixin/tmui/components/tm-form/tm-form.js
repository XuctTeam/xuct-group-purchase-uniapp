"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  tmSheet();
}
const tmSheet = () => "../tm-sheet/tm-sheet.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tm-form",
  props: {
    modelValue: {
      type: Object,
      default: () => {
        return {};
      },
      required: true
    },
    margin: {
      type: Array,
      default: () => [32, 24]
    },
    padding: {
      type: Array,
      default: () => [16, 0]
    },
    //表单标签是竖还是横排列。
    //vertical,horizontal
    layout: {
      type: String,
      default: "horizontal"
    },
    //如果为0表示自动宽度。
    labelWidth: {
      type: Number,
      default: 160
    },
    //标签对齐方式
    labelAlign: {
      type: String,
      default: "left"
    },
    //显示下划线。
    border: {
      type: Boolean,
      default: true
    },
    transprent: {
      type: Boolean,
      default: false
    }
  },
  emits: ["submit", "validate", "reset", "clearValidate", "update:modelValue"],
  setup(__props, { expose, emit: emits }) {
    const props = __props;
    const _modelVal = common_vendor.ref(props.modelValue);
    const _backModelVal = common_vendor.index.$tm.u.deepClone(props.modelValue);
    const _callBackModelVal = common_vendor.ref([]);
    const tmFormComnameId = "tmFormId";
    common_vendor.ref([
      "tm-radio-group",
      "tm-checkbox-box",
      "tm-input",
      "tm-rate",
      "tm-slider",
      "tm-segtab",
      "tm-switch",
      "tm-upload"
    ]);
    const formFunCallBack = common_vendor.ref("");
    common_vendor.provide(
      "tmFormFun",
      common_vendor.computed(() => formFunCallBack.value)
    );
    common_vendor.provide(
      "tmFormLabelWidth",
      common_vendor.computed(() => props.labelWidth)
    );
    common_vendor.provide(
      "tmFormLabelAlign",
      common_vendor.computed(() => props.labelAlign)
    );
    common_vendor.provide(
      "tmFormLayout",
      common_vendor.computed(() => props.layout)
    );
    common_vendor.provide(
      "tmFormBorder",
      common_vendor.computed(() => props.border)
    );
    common_vendor.provide(
      "tmFormTransprent",
      common_vendor.computed(() => props.transprent)
    );
    common_vendor.provide(
      "formCallFiled",
      common_vendor.computed(() => _modelVal.value)
    );
    common_vendor.watch(
      () => props.modelValue,
      () => {
        _modelVal.value = { ...common_vendor.toRaw(props.modelValue) };
      },
      { deep: true }
    );
    let timid = NaN;
    let ptimeId = 301120999856;
    function reset() {
      formFunCallBack.value = "";
      common_vendor.nextTick$1(() => {
        formFunCallBack.value = "reset";
        clearTimeout(timid);
        emits("reset");
        timid = setTimeout(function() {
          let dblack = common_vendor.index.$tm.u.deepClone(_backModelVal);
          emits("reset");
          emits("update:modelValue", dblack);
          _modelVal.value = dblack;
          console.log(dblack);
        }, 300);
      });
    }
    function clearValidate() {
      formFunCallBack.value = "";
      common_vendor.nextTick$1(() => {
        formFunCallBack.value = "clearValidate";
        common_vendor.nextTick$1(() => {
          emits("clearValidate");
        });
      });
    }
    function submit() {
      formFunCallBack.value = "";
      common_vendor.nextTick$1(() => {
        formFunCallBack.value = "validate";
        let isPass = true;
        common_vendor.index.$tm.u.throttle(
          () => {
            let par = common_vendor.toRaw(_callBackModelVal.value);
            for (let i = 0, len = par.length; i < len; i++) {
              if (par[i].isRequiredError == true) {
                isPass = false;
                break;
              }
            }
            emits("submit", { data: common_vendor.toRaw(_modelVal.value), validate: isPass });
          },
          220,
          false
        );
      });
    }
    function validate() {
      formFunCallBack.value = "";
      common_vendor.nextTick$1(() => {
        formFunCallBack.value = "validate";
        common_vendor.nextTick$1(() => {
          emits("reset");
        });
      });
    }
    function checkValidate(arg) {
      clearTimeout(ptimeId);
      ptimeId = setTimeout(() => {
        emits("validate", arg);
      }, 1e3);
    }
    function pushKey(item) {
      if (!item.field)
        return;
      let idsIndex = _callBackModelVal.value.findIndex((el) => el.id == item.id);
      if (idsIndex == -1) {
        _callBackModelVal.value.push(item);
      } else {
        _callBackModelVal.value[idsIndex] = { ...item };
      }
    }
    function delKey(item) {
      let idsIndex = _callBackModelVal.value.findIndex((el) => el.id == item.id);
      if (idsIndex > -1) {
        _callBackModelVal.value.splice(idsIndex, 1);
      }
    }
    expose({
      reset,
      validate,
      clearValidate,
      checkValidate,
      submit,
      pushKey,
      delKey,
      tmFormComnameId
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          transprent: props.transprent,
          round: 3,
          _class: "flex flex-col overflow",
          padding: props.padding,
          margin: props.margin
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/tmui/components/tm-form/tm-form.vue"]]);
wx.createComponent(Component);
