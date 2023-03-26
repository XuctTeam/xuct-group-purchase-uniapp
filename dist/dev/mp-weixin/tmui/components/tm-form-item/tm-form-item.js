"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  (tmText + tmSheet + tmDivider)();
}
const tmSheet = () => "../tm-sheet/tm-sheet.js";
const tmText = () => "../tm-text/tm-text.js";
const tmDivider = () => "../tm-divider/tm-divider.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tm-form-item",
  props: {
    parentClass: {
      type: String,
      default: ""
    },
    align: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    //表单描述
    desc: {
      type: String,
      default: ""
    },
    margin: {
      type: Array,
      default: () => [12, 12]
    },
    padding: {
      type: Array,
      default: () => [0, 0]
    },
    //如果在forom绑定的model为深层对象，这里的名称需要如下:
    //比如model = {a:2,b:{c:333}}
    //如果想绑定c,则field = "b.c"
    field: {
      type: String,
      default: ""
    },
    //表彰底部的单项注意说明。
    help: {
      type: String,
      default: ""
    },
    //是否必填
    required: {
      type: Boolean,
      default: false
    },
    //检验规则
    rules: {
      type: [Object, Array],
      default: () => {
        return [{ validator: false, required: false }];
      }
    },
    //显示下划线。
    border: {
      type: Boolean,
      default: null
    },
    showError: {
      type: Boolean,
      default: true
    },
    /**当显示错误信息标题时，是否隐藏顶部的间隙，当连续的布局时有用，可以减少之间的间隙大小。 */
    showTopErrorGap: {
      type: Boolean,
      default: true
    },
    //校验不通过时，是否让标题跟着变化文字颜色，默认是。
    requiredTitleChangeColor: {
      type: Boolean,
      default: false
    },
    transprent: {
      type: [Boolean, String],
      default: null
    },
    round: {
      type: Number,
      default: 0
    }
  },
  setup(__props, { expose }) {
    var _a;
    const props = __props;
    const proxy = ((_a = common_vendor.getCurrentInstance()) == null ? void 0 : _a.proxy) ?? null;
    const tmFormComnameFormItem = "tmFormComnameFormItem";
    const item = common_vendor.ref({
      label: "",
      //标签名称。
      field: props.field,
      //字段名称key.
      value: null,
      isRequiredError: false,
      //true,错误，false正常 检验状态
      message: "",
      //检验信息提示语。
      id: common_vendor.index.$tm.u.getUid(1),
      //表单唯一标识id
      componentsName: ""
      //表单组件类型。
    });
    const _required = common_vendor.ref(props.required);
    const tmFormLabelWidth = common_vendor.inject(
      "tmFormLabelWidth",
      common_vendor.computed(() => 100)
    );
    const tmFormLabelAlign = common_vendor.inject(
      "tmFormLabelAlign",
      common_vendor.computed(() => "left")
    );
    const tmFormLayout = common_vendor.inject(
      "tmFormLayout",
      common_vendor.computed(() => "horizontal")
    );
    const tmFormBorder_inject = common_vendor.inject(
      "tmFormBorder",
      common_vendor.computed(() => true)
    );
    const tmFormTransprent = common_vendor.inject(
      "tmFormTransprent",
      common_vendor.computed(() => false)
    );
    const tmFormBorder = common_vendor.computed(() => {
      if (props.border !== null && typeof props.border === "boolean")
        return props.border;
      return tmFormBorder_inject.value;
    });
    const _label = common_vendor.computed(() => props.label);
    let parent = proxy == null ? void 0 : proxy.$parent;
    while (parent) {
      if ((parent == null ? void 0 : parent.tmFormComnameId) == "tmFormId" || !parent) {
        break;
      } else {
        parent = (parent == null ? void 0 : parent.$parent) ?? void 0;
      }
    }
    common_vendor.onUnmounted(() => {
      delCom();
    });
    common_vendor.provide(
      "tmFormItemRules",
      common_vendor.computed(() => {
        var _a2, _b, _c;
        let defaultrs = [];
        if (Array.isArray(props == null ? void 0 : props.rules)) {
          props == null ? void 0 : props.rules.forEach((el) => {
            let isreq = (el == null ? void 0 : el.required) || props.required;
            defaultrs.push({
              message: (el == null ? void 0 : el.message) ?? "请填写必要的内容",
              required: isreq,
              validator: (el == null ? void 0 : el.validator) ?? false
            });
          });
        } else {
          defaultrs = [
            {
              message: ((_a2 = props == null ? void 0 : props.rules) == null ? void 0 : _a2.message) ?? "请填写必要的内容",
              required: ((_b = props.rules) == null ? void 0 : _b.required) || props.required,
              validator: ((_c = props.rules) == null ? void 0 : _c.validator) ?? false
            }
          ];
        }
        return defaultrs;
      })
    );
    const Rules = common_vendor.computed(() => {
      var _a2, _b, _c;
      let defaultrs = [];
      if (Array.isArray(props == null ? void 0 : props.rules)) {
        props == null ? void 0 : props.rules.forEach((el) => {
          let isreq = (el == null ? void 0 : el.required) || props.required;
          defaultrs.push({
            message: (el == null ? void 0 : el.message) ?? "请填写必要的内容",
            required: isreq,
            validator: (el == null ? void 0 : el.validator) ?? false
          });
        });
      } else {
        defaultrs = [
          {
            message: ((_a2 = props == null ? void 0 : props.rules) == null ? void 0 : _a2.message) ?? "请填写必要的内容",
            required: ((_b = props.rules) == null ? void 0 : _b.required) || props.required,
            validator: ((_c = props.rules) == null ? void 0 : _c.validator) ?? false
          }
        ];
      }
      return defaultrs;
    });
    function pushCom(itemComval) {
      if (parent) {
        item.value = { ...item.value, ...itemComval ?? {} };
        parent.pushKey({ ...item.value });
      }
    }
    function delCom() {
      if (parent) {
        parent.delKey(item.value);
      }
    }
    const tmFormFun = common_vendor.inject(
      "tmFormFun",
      common_vendor.computed(() => "")
    );
    expose({ pushCom, delCom, tmFormComnameFormItem });
    const formCallFiled = common_vendor.inject(
      "formCallFiled",
      common_vendor.computed(() => {
      })
    );
    const nowValue = common_vendor.computed(() => {
      return getObjectVal(formCallFiled.value, props.field);
    });
    let tid = NaN;
    common_vendor.watch(
      () => nowValue.value,
      () => {
        if (_required.value) {
          clearTimeout(tid);
          tid = setTimeout(async () => {
            let vaild = await checkVal();
            item.value = { ...vaild };
            common_vendor.nextTick$1(() => {
              pushCom();
              if (parent) {
                parent == null ? void 0 : parent.checkValidate(vaild);
              }
            });
          }, 200);
        }
      },
      { deep: true }
    );
    const validate = (rules, value) => {
      rules = rules.map((el) => {
        if (typeof el.validator === "function" && el.required === true) {
          return el;
        } else if (typeof el.validator === "boolean" && el.required === true) {
          return {
            ...el,
            validator: (val) => {
              if (val === null || val === "" || typeof val == "undefined")
                return false;
              if (typeof val === "object") {
                if (Array.isArray(val)) {
                  if (val.length == 0)
                    return false;
                } else if (Object.keys(val).length === 0 && val.constructor === Object) {
                  return false;
                }
              }
              if (typeof val === "boolean") {
                return val;
              }
              if (typeof val === "number") {
                if (isNaN(val))
                  return false;
                if (Number(val) < 0)
                  return false;
              }
              if (typeof val === "string") {
                if (val.trim().length == 0)
                  return false;
              }
              return true;
            }
          };
        } else {
          return {
            ...el,
            validator: (val) => {
              return true;
            }
          };
        }
      });
      let rules_filter = rules.filter((el) => {
        return typeof el.validator === "function" && el.required === true;
      });
      let rules_fun = rules_filter.map((el) => {
        return new Promise(async (res, rej) => {
          if (typeof el.validator === "function") {
            let vr = await el.validator(value);
            if (vr) {
              res({
                message: String(el.message),
                validator: true
              });
            } else {
              rej({
                message: el.message,
                validator: false
              });
            }
          } else {
            res({
              message: el.message,
              validator: true
            });
          }
        });
      });
      return Promise.all(rules_fun);
    };
    function checkVal() {
      return new Promise((resolve, reject) => {
        validate(Rules.value, getObjectVal(formCallFiled.value, props.field)).then((rulst) => {
          resolve({ ...item.value, isRequiredError: false });
        }).catch((err) => {
          resolve({ ...item.value, isRequiredError: !err.validator, message: err.message });
        });
      });
    }
    common_vendor.onMounted(() => {
      checkVal().then((elitem) => pushCom({ ...elitem }));
    });
    common_vendor.watch(tmFormFun, () => {
      if (tmFormFun.value == "validate") {
        if (_required.value) {
          validate(Rules.value, getObjectVal(formCallFiled.value, props.field)).then((rulst) => {
            item.value.isRequiredError = false;
          }).catch((err) => {
            item.value.message = err.message;
            item.value.isRequiredError = !err.validator;
          });
          pushCom();
        }
      }
      if (tmFormFun.value == "reset")
        ;
      if (tmFormFun.value == "clearValidate") {
        item.value.isRequiredError = false;
      }
    });
    function getObjectVal(obj, field = "") {
      if (field == "")
        return obj;
      var arr = field.split(".");
      while (arr.length > 1) {
        let key = String(arr.shift());
        obj = common_vendor.toRaw(obj[key]);
      }
      return common_vendor.toRaw(obj[arr[0]]);
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: props.showError && props.showTopErrorGap
      }, props.showError && props.showTopErrorGap ? {} : {}, {
        b: common_vendor.unref(_label)
      }, common_vendor.unref(_label) ? common_vendor.e({
        c: _required.value
      }, _required.value ? {
        d: common_vendor.p({
          color: "red",
          ["font-size"]: 30,
          label: "*"
        })
      } : {}, {
        e: common_vendor.p({
          color: common_vendor.unref(tmFormFun) == "validate" && item.value.isRequiredError == true && props.requiredTitleChangeColor ? "red" : "",
          ["font-size"]: 30,
          label: common_vendor.unref(_label)
        }),
        f: common_vendor.s(common_vendor.unref(tmFormLayout) == "horizontal" ? {
          width: common_vendor.unref(tmFormLabelWidth) + "rpx"
        } : ""),
        g: common_vendor.n(common_vendor.unref(tmFormLabelAlign) == "right" ? "flex-row-center-end" : "flex-row-center-start"),
        h: common_vendor.n(common_vendor.unref(tmFormLayout) != "horizontal" ? "mb-24 flex-1 " : "mr-32 ")
      }) : {}, {
        i: common_vendor.s(common_vendor.unref(tmFormLayout) == "horizontal" ? {
          width: "0px"
        } : ""),
        j: common_vendor.n(common_vendor.unref(tmFormLayout) == "horizontal" ? "flex-row " : " "),
        k: common_vendor.n(common_vendor.unref(tmFormLayout) == "horizontal" && !props.align ? "flex-row-center-start" : ""),
        l: common_vendor.n(common_vendor.unref(tmFormLayout) == "vertical" && !props.align ? "flex-col" : ""),
        m: common_vendor.n(props.align),
        n: common_vendor.n(props.parentClass),
        o: common_vendor.p({
          color: "grey-darken-2",
          ["font-size"]: 22,
          label: props.desc
        }),
        p: common_vendor.n(props.desc ? "pt-12" : ""),
        q: props.showError
      }, props.showError ? common_vendor.e({
        r: common_vendor.unref(tmFormFun) == "validate" && item.value.isRequiredError == true
      }, common_vendor.unref(tmFormFun) == "validate" && item.value.isRequiredError == true ? {
        s: common_vendor.p({
          color: "red",
          ["font-size"]: 22,
          label: item.value.message
        })
      } : {}) : {}, {
        t: common_vendor.n(`py-${props.margin[1]}`),
        v: common_vendor.p({
          transprent: props.transprent !== null ? props.transprent : common_vendor.unref(tmFormTransprent),
          round: props.round,
          margin: [0, 0],
          padding: props.padding
        }),
        w: common_vendor.unref(tmFormBorder)
      }, common_vendor.unref(tmFormBorder) ? {
        x: common_vendor.p({
          border: 2,
          padding: [0, 0],
          margin: [0, 0]
        })
      } : {}, {
        y: common_vendor.n(`mx-${props.margin[0]}`)
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/tmui/components/tm-form-item/tm-form-item.vue"]]);
wx.createComponent(Component);