"use strict";
const common_vendor = require("../../../common/vendor.js");
const api_user = require("../../../api/user.js");
const utils_dialog = require("../../../utils/dialog.js");
require("../../../services/request.js");
require("../../../store/user.js");
require("../../../tmui/tool/function/util.js");
require("../../../tmui/tool/function/preview.js");
require("../../../constant/index.js");
require("../../../services/codeMessage.js");
require("../../../config/env.js");
require("../../../config/.env.dev.js");
require("../../../constant/white.js");
if (!Math) {
  (tmNavbar + tmInput + tmFormItem + tmText + tmIcon + tmSwitch + tmForm + tmCityPicker + tmButton + tmApp)();
}
const tmApp = () => "../../../tmui/components/tm-app/tm-app.js";
const tmNavbar = () => "../../../tmui/components/tm-navbar/tm-navbar.js";
const tmFormItem = () => "../../../tmui/components/tm-form-item/tm-form-item.js";
const tmForm = () => "../../../tmui/components/tm-form/tm-form.js";
const tmInput = () => "../../../tmui/components/tm-input/tm-input.js";
const tmCityPicker = () => "../../../tmui/components/tm-city-picker/tm-city-picker.js";
const tmText = () => "../../../tmui/components/tm-text/tm-text.js";
const tmIcon = () => "../../../tmui/components/tm-icon/tm-icon.js";
const tmButton = () => "../../../tmui/components/tm-button/tm-button.js";
const tmSwitch = () => "../../../tmui/components/tm-switch/tm-switch.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    var _a, _b;
    const _showSafe = common_vendor.ref(false);
    const form = common_vendor.ref(null);
    const showCity = common_vendor.ref(false);
    const address = common_vendor.ref({
      id: "",
      userName: "",
      detailInfo: "",
      firstChoose: 0,
      city: [],
      cityStr: "",
      telNumber: ""
    });
    let sys = common_vendor.index.getSystemInfoSync();
    const win_bottom = (_b = (_a = sys == null ? void 0 : sys.safeAreaInsets) == null ? void 0 : _a.bottom) != null ? _b : 0;
    if (win_bottom > 0) {
      _showSafe.value = true;
    }
    const _totalBarHeight = common_vendor.computed$1(() => {
      if (_showSafe.value)
        return 90;
      return 75;
    });
    common_vendor.onLoad((opt) => {
      const { id } = opt;
      if (!id) {
        return;
      }
      address.value.id = id;
      _load(id);
    });
    const _load = (id) => {
      utils_dialog.loading();
      api_user.getUserAddress(id).then((res) => {
        const { provinceName = "", cityName = "", countyName = "", ...addr } = res.data;
        address.value = { ...addr, city: [provinceName, cityName, countyName], cityStr: provinceName + cityName + countyName };
        utils_dialog.hideLoading();
      }).catch((err) => {
        console.log(err);
        utils_dialog.hideLoading();
      });
    };
    const areaClick = () => {
      showCity.value = !showCity.value;
    };
    const checkPhone = (value) => {
      return common_vendor.index.$tm.u.isPhone(value);
    };
    const onSave = () => {
      var _a2;
      (_a2 = form.value) == null ? void 0 : _a2.submit();
    };
    const onDelete = () => {
      if (!address.value.id) {
        return;
      }
      utils_dialog.confirm({
        title: "\u786E\u8BA4\u5220\u9664\u5417?",
        success: () => {
          api_user.deleteUserAddress(address.value.id || "").then(() => {
            common_vendor.index.$emit("address:add::success");
            common_vendor.index.$tm.u.routerTo("", "navigateBack");
          }).catch((err) => {
            utils_dialog.message({
              title: err,
              icon: "error"
            });
          });
        },
        fail: () => {
          console.log("\u70B9\u51FB\u4E86\u53D6\u6D88");
        }
      });
    };
    const onConfirm = (e) => {
      const { validate, data } = e;
      if (!validate) {
        return;
      }
      const { city, cityStr, ..._address } = data;
      if (city[0]) {
        _address.provinceName = city[0];
      }
      if (city[1]) {
        _address.cityName = city[1];
      }
      if (city[2]) {
        _address.countyName = city[2];
      }
      utils_dialog.loading();
      api_user.saveUserAddress(_address).then(() => {
        utils_dialog.hideLoading();
        common_vendor.index.$emit("address:add::success");
        common_vendor.index.$tm.u.routerTo("", "navigateBack");
      }).catch((err) => {
        console.log(err);
        utils_dialog.hideLoading();
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "\u7F16\u8F91\u5730\u5740",
          color: "#70DB93",
          fontColor: "white"
        }),
        b: common_vendor.o(common_vendor.m(($event) => address.value.userName = $event, {
          lazy: true
        }, true)),
        c: common_vendor.p({
          inputPadding: [0, 0],
          placeholder: "\u8BF7\u8F93\u5165\u6536\u8D27\u4EBA",
          transprent: true,
          showBottomBotder: false,
          modelValue: address.value.userName
        }),
        d: common_vendor.p({
          required: true,
          label: "\u6536\u8D27\u4EBA",
          field: "userName",
          rules: [{
            required: true,
            message: "\u6536\u8D27\u4EBA\u4E0D\u80FD\u4E3A\u7A7A"
          }]
        }),
        e: common_vendor.o(common_vendor.m(($event) => address.value.telNumber = $event, {
          lazy: true
        }, true)),
        f: common_vendor.p({
          inputPadding: [0, 0],
          placeholder: "\u8BF7\u8F93\u5165\u7535\u8BDD",
          transprent: true,
          showBottomBotder: false,
          modelValue: address.value.telNumber
        }),
        g: common_vendor.p({
          required: true,
          label: "\u8054\u7CFB\u7535\u8BDD",
          field: "telNumber",
          rules: [{
            required: true,
            message: "\u7535\u8BDD\u4E0D\u80FD\u4E3A\u7A7A\u4E14\u683C\u5F0F\u6B63\u786E",
            validator: (val) => checkPhone(val)
          }]
        }),
        h: common_vendor.p({
          userInteractionEnabled: false,
          label: address.value.cityStr || "\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A\u5730\u5740"
        }),
        i: common_vendor.p({
          userInteractionEnabled: false,
          ["font-size"]: 24,
          name: "tmicon-angle-right"
        }),
        j: common_vendor.o(areaClick),
        k: common_vendor.p({
          padding: [0, 0],
          requiredTitleChangeColor: true,
          label: "\u9009\u62E9\u5730\u533A",
          field: "city",
          required: true,
          rules: [{
            required: true,
            message: "\u8BF7\u9009\u62E9\u5730\u533A"
          }]
        }),
        l: common_vendor.o(common_vendor.m(($event) => address.value.detailInfo = $event, {
          lazy: true
        }, true)),
        m: common_vendor.p({
          placeholder: "\u8BF7\u8F93\u5165\u8BE6\u7EC6\u5730\u5740",
          inputPadding: [0, 0],
          transprent: true,
          showBottomBotder: false,
          modelValue: address.value.detailInfo
        }),
        n: common_vendor.p({
          required: true,
          label: "\u8BE6\u7EC6\u5730\u5740",
          field: "detailInfo",
          rules: [{
            required: true,
            message: "\u8BE6\u7EC6\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A"
          }]
        }),
        o: common_vendor.o(($event) => address.value.firstChoose = $event),
        p: common_vendor.p({
          color: "red",
          ["default-value"]: address.value.firstChoose,
          selected: 1,
          modelValue: address.value.firstChoose
        }),
        q: common_vendor.p({
          label: "\u662F\u5426\u9ED8\u8BA4",
          field: "switch"
        }),
        r: common_vendor.sr(form, "0ce79303-2,0ce79303-0", {
          "k": "form"
        }),
        s: common_vendor.o(onConfirm),
        t: common_vendor.o(($event) => address.value = $event),
        v: common_vendor.p({
          ["label-width"]: 170,
          margin: [10, 10],
          modelValue: address.value
        }),
        w: common_vendor.o(($event) => address.value.city = $event),
        x: common_vendor.o(($event) => address.value.cityStr = $event),
        y: common_vendor.o(($event) => showCity.value = $event),
        z: common_vendor.p({
          selectedModel: "name",
          ["default-value"]: address.value.city,
          color: "green",
          modelValue: address.value.city,
          ["model-str"]: address.value.cityStr,
          show: showCity.value
        }),
        A: common_vendor.o(onDelete),
        B: common_vendor.p({
          block: true,
          color: "red",
          padding: [0, 10],
          label: "\u5220\u9664",
          disabled: !address.value.id
        }),
        C: common_vendor.o(onSave),
        D: common_vendor.p({
          block: true,
          color: "green",
          padding: [0, 10],
          label: "\u4FDD\u5B58"
        }),
        E: common_vendor.unref(_totalBarHeight) + "px"
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/pages/member/address/index.nvue"]]);
wx.createPage(MiniProgramPage);
