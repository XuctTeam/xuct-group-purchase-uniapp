"use strict";
const common_vendor = require("../../../common/vendor.js");
const store_user = require("../../../store/user.js");
const api_user = require("../../../api/user.js");
const services_upload = require("../../../services/upload.js");
require("../../../tmui/tool/function/util.js");
require("../../../tmui/tool/function/preview.js");
require("../../../constant/index.js");
require("../../../services/request.js");
require("../../../services/codeMessage.js");
require("../../../config/env.js");
require("../../../config/.env.dev.js");
require("../../../constant/white.js");
if (!Math) {
  (tmNavbar + tmButton + tmInput + tmDivider + tmSheet + tmMessage + tmApp)();
}
const tmApp = () => "../../../tmui/components/tm-app/tm-app.js";
const tmNavbar = () => "../../../tmui/components/tm-navbar/tm-navbar.js";
const tmSheet = () => "../../../tmui/components/tm-sheet/tm-sheet.js";
const tmInput = () => "../../../tmui/components/tm-input/tm-input.js";
const tmButton = () => "../../../tmui/components/tm-button/tm-button.js";
const tmMessage = () => "../../../tmui/components/tm-message/tm-message.js";
const tmDivider = () => "../../../tmui/components/tm-divider/tm-divider.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const userStore = store_user.useUserHook();
    const userInfo = userStore.getUserInfo;
    const phoneRef = common_vendor.ref((userInfo == null ? void 0 : userInfo.phone) || "");
    const nickNameRef = common_vendor.ref((userInfo == null ? void 0 : userInfo.nickname) || "");
    const msg = common_vendor.ref(null);
    const loadingRef = common_vendor.ref(false);
    const chooseavatar = (avatar) => {
      var _a, _b;
      const tempPath = (_a = avatar == null ? void 0 : avatar.detail) == null ? void 0 : _a.avatarUrl;
      if (!tempPath) {
        (_b = msg.value) == null ? void 0 : _b.show({
          text: "\u5934\u50CF\u9009\u62E9\u5931\u8D25",
          model: "error"
        });
        return;
      }
      services_upload.upload(tempPath, {}, ({ code, data }) => {
        var _a2;
        if (code === -1) {
          (_a2 = msg.value) == null ? void 0 : _a2.show({
            text: data,
            model: "error"
          });
          return;
        }
        userStore.setUserInfo({ ...userInfo, avatar: data });
      });
    };
    const saveUser = () => {
      var _a, _b, _c;
      if (!phoneRef.value) {
        (_a = msg.value) == null ? void 0 : _a.show({
          text: "\u7535\u8BDD\u4E0D\u80FD\u4E3A\u7A7A",
          model: "error"
        });
        return;
      }
      if (!common_vendor.index.$tm.u.isPhone(phoneRef.value)) {
        (_b = msg.value) == null ? void 0 : _b.show({
          text: "\u624B\u673A\u683C\u5F0F\u9519\u8BEF",
          model: "error"
        });
        return;
      }
      if (!nickNameRef.value) {
        (_c = msg.value) == null ? void 0 : _c.show({
          text: "\u6635\u79F0\u4E0D\u80FD\u4E3A\u7A7A",
          model: "error"
        });
        return;
      }
      loadingRef.value = true;
      api_user.saveUserInfo(phoneRef.value, nickNameRef.value).then(() => {
        userStore.setUserInfo({ ...userInfo, nickname: nickNameRef.value, phone: phoneRef.value });
        loadingRef.value = false;
        common_vendor.index.$tm.u.routerTo("", "navigateBack");
      }).catch((err) => {
        console.log(err);
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "\u4E2A\u4EBA\u8D44\u6599",
          color: "green",
          linear: "right",
          blur: true
        }),
        b: common_vendor.unref(userInfo).avatar
      }, common_vendor.unref(userInfo).avatar ? {
        c: common_vendor.unref(userInfo).avatar
      } : {}, {
        d: common_vendor.o(chooseavatar),
        e: common_vendor.p({
          size: "small",
          ["font-color"]: "white",
          round: 10,
          color: "green",
          label: "\u6388\u6743\u66F4\u65B0",
          ["open-type"]: "chooseAvatar"
        }),
        f: common_vendor.o(($event) => phoneRef.value = $event),
        g: common_vendor.p({
          margin: [0, 30],
          placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7",
          prefix: "tmicon-phone-fill",
          ["model-value"]: phoneRef.value
        }),
        h: common_vendor.o(($event) => nickNameRef.value = $event),
        i: common_vendor.p({
          margin: [0, 30],
          placeholder: "\u8BF7\u8F93\u5165\u6635\u79F0",
          prefix: "tmicon-user-fill",
          ["model-value"]: nickNameRef.value
        }),
        j: common_vendor.o(saveUser),
        k: common_vendor.p({
          block: true,
          label: "block",
          margin: [10, 60],
          ["linear-color"]: ["#cbe54e", "#329d9c"],
          color: "green",
          ["font-color"]: "white",
          linear: "right",
          loading: loadingRef.value
        }),
        l: common_vendor.sr(msg, "98c50d94-8,98c50d94-0", {
          "k": "msg"
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/pages/member/userinfo/index.nvue"]]);
wx.createPage(MiniProgramPage);
