"use strict";
const common_vendor = require("../../../common/vendor.js");
const api_user = require("../../../api/user.js");
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
  (tmNavbar + tmResult + tmSheet + tmButton + tmMessage + tmApp)();
}
const tmApp = () => "../../../tmui/components/tm-app/tm-app.js";
const tmNavbar = () => "../../../tmui/components/tm-navbar/tm-navbar.js";
const tmButton = () => "../../../tmui/components/tm-button/tm-button.js";
const tmResult = () => "../../../tmui/components/tm-result/tm-result.js";
const tmSheet = () => "../../../tmui/components/tm-sheet/tm-sheet.js";
const tmMessage = () => "../../../tmui/components/tm-message/tm-message.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "list",
  setup(__props) {
    var _a, _b;
    const _showSafe = common_vendor.ref(false);
    const msg = common_vendor.ref(null);
    const addressList = common_vendor.reactive([]);
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
    common_vendor.onLoad(() => {
      common_vendor.nextTick(() => {
        _load();
      });
    });
    const _load = () => {
      var _a2;
      (_a2 = msg.value) == null ? void 0 : _a2.show({
        model: "load"
      });
      api_user.userAddressList().then((res) => {
        var _a3;
        addressList.push(...res.data);
        (_a3 = msg.value) == null ? void 0 : _a3.hide();
      }).catch((err) => {
        var _a3;
        console.log(err);
        (_a3 = msg.value) == null ? void 0 : _a3.hide();
      });
    };
    const chooseaddress = (e) => {
      common_vendor.index.chooseAddress({
        success: (res) => {
          if (res.errMsg == "chooseAddress:ok") {
            const { errMsg, ...address } = res;
            api_user.saveUserAddress(address).then(() => {
              _load();
            }).catch((err) => {
              console.log(err);
            });
          }
        },
        fail: (e2) => {
          var _a2;
          console.log(e2);
          (_a2 = msg.value) == null ? void 0 : _a2.show({
            text: "\u83B7\u53D6\u901A\u8BAF\u5F55\u5931\u8D25",
            icon: "error"
          });
        }
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "\u6536\u8D27\u5730\u5740",
          color: "green",
          linear: "right",
          blur: true
        }),
        b: addressList.length === 0
      }, addressList.length === 0 ? {
        c: common_vendor.p({
          showBtn: false,
          status: "empty",
          title: "\u6682\u65E0\u6570\u636E"
        }),
        d: common_vendor.p({
          transprent: true,
          margin: [0, 0]
        })
      } : {
        e: common_vendor.f(addressList, (item, index, i0) => {
          return {
            a: index,
            b: "2596ba8e-4-" + i0 + ",2596ba8e-0"
          };
        })
      }, {
        f: common_vendor.o(chooseaddress),
        g: common_vendor.p({
          block: true,
          color: "red",
          padding: [0, 10],
          label: "\u5FAE\u4FE1\u5BFC\u5165"
        }),
        h: common_vendor.p({
          block: true,
          color: "green",
          padding: [0, 10],
          label: "\u65B0\u589E"
        }),
        i: common_vendor.unref(_totalBarHeight) + "px",
        j: common_vendor.sr(msg, "2596ba8e-7,2596ba8e-0", {
          "k": "msg"
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/pages/member/address/list.nvue"]]);
wx.createPage(MiniProgramPage);
