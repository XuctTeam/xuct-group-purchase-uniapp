"use strict";
const common_vendor = require("../../../common/vendor.js");
const api_login = require("../../../api/login.js");
const store_user = require("../../../store/user.js");
const utils_dialog = require("../../../utils/dialog.js");
require("../../../services/request.js");
require("../../../services/codeMessage.js");
require("../../../config/env.js");
require("../../../config/.env.dev.js");
require("../../../constant/white.js");
require("../../../tmui/tool/function/util.js");
require("../../../tmui/tool/function/preview.js");
require("../../../constant/index.js");
if (!Math) {
  (tmNavbar + tmButton + tmApp)();
}
const tmApp = () => "../../../tmui/components/tm-app/tm-app.js";
const tmNavbar = () => "../../../tmui/components/tm-navbar/tm-navbar.js";
const tmButton = () => "../../../tmui/components/tm-button/tm-button.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const userStore = store_user.useUserHook();
    const login = () => {
      _login().then((res) => {
        const { tokenValue, ...user } = res;
        userStore.setToken(tokenValue);
        userStore.setUserInfo(user);
        back();
      }).catch((err) => {
        console.log(err);
      });
    };
    const back = () => {
      const pLenth = getCurrentPages().length;
      common_vendor.index.$tm.u.routerTo(pLenth === 1 ? "/pages/index/index" : "", pLenth === 1 ? "redirect" : "navigateBack");
    };
    const reject = () => {
      utils_dialog.confirm({
        title: "\u62D2\u7EDD\u540E\u5C06\u65E0\u6CD5\u8FDB\u884C\u767B\u5F55\uFF01",
        success: () => {
          back();
        },
        fail: (msg) => {
          console.log(msg);
        }
      });
    };
    const _login = () => {
      return new Promise((resolve, reject2) => {
        common_vendor.index.login({
          provider: "weixin",
          success: async (loginRes) => {
            utils_dialog.loading();
            try {
              const loinResult = await api_login.loginByCode(loginRes.code);
              const { tokenValue, user } = loinResult.data;
              utils_dialog.hideLoading();
              return resolve({
                tokenValue,
                ...user
              });
            } catch (err) {
              console.log(err);
              utils_dialog.hideLoading();
              return reject2(err);
            }
          },
          fail(result) {
            utils_dialog.hideLoading();
            return reject2(result);
          }
        });
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "\u6388\u6743\u767B\u5F55",
          color: "green",
          linear: "right",
          blur: true
        }),
        b: common_vendor.o(reject),
        c: common_vendor.p({
          round: 6,
          label: "\u62D2\u7EDD"
        }),
        d: common_vendor.o(login),
        e: common_vendor.p({
          round: 6,
          ["linear-color"]: ["#ea3c2d", "#ff9d14"],
          color: "orange",
          ["font-color"]: "white",
          linear: "left",
          label: "\u5141\u8BB8"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/pages/member/login/index.nvue"]]);
wx.createPage(MiniProgramPage);
