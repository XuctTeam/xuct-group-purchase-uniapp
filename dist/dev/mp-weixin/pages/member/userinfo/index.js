"use strict";
const common_vendor = require("../../../common/vendor.js");
const store_user = require("../../../store/user.js");
const api_user = require("../../../api/user.js");
const services_upload = require("../../../services/upload.js");
const utils_dialog = require("../../../utils/dialog.js");
require("../../../tmui/tool/function/util.js");
require("../../../tmui/tool/function/preview.js");
require("../../../constant/index.js");
require("../../../services/request.js");
require("../../../services/codeMessage.js");
require("../../../config/env.js");
require("../../../config/.env.dev.js");
require("../../../constant/white.js");
if (!Math) {
  (tmNavbar + tmButton + tmIcon + tmSheet + tmApp)();
}
const tmApp = () => "../../../tmui/components/tm-app/tm-app.js";
const tmNavbar = () => "../../../tmui/components/tm-navbar/tm-navbar.js";
const tmSheet = () => "../../../tmui/components/tm-sheet/tm-sheet.js";
const tmButton = () => "../../../tmui/components/tm-button/tm-button.js";
const tmIcon = () => "../../../tmui/components/tm-icon/tm-icon.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    var _a;
    const userStore = store_user.useUserHook();
    const userInfo = userStore.getUserInfo;
    const phoneRef = common_vendor.ref((userInfo == null ? void 0 : userInfo.phone) || "");
    const nickNameRef = common_vendor.ref((userInfo == null ? void 0 : userInfo.nickname) || "");
    const loadingRef = common_vendor.ref(false);
    const _showSafe = common_vendor.ref(false);
    let sys = common_vendor.index.getSystemInfoSync();
    const win_bottom = ((_a = sys == null ? void 0 : sys.safeAreaInsets) == null ? void 0 : _a.bottom) ?? 0;
    if (win_bottom > 0) {
      _showSafe.value = true;
    }
    const _totalBarHeight = common_vendor.computed(() => {
      if (_showSafe.value)
        return 90;
      return 75;
    });
    const chooseavatar = (avatar) => {
      var _a2;
      const tempPath = (_a2 = avatar == null ? void 0 : avatar.detail) == null ? void 0 : _a2.avatarUrl;
      if (!tempPath) {
        utils_dialog.message({
          title: "头像选择失败",
          icon: "error"
        });
        return;
      }
      services_upload.upload(tempPath, {}, ({ code, data }) => {
        if (code === -1) {
          utils_dialog.message({
            title: data,
            icon: "error"
          });
          return;
        }
        userStore.setUserInfo({ ...userInfo, avatar: data });
      });
    };
    const onSave = () => {
      if (!phoneRef.value) {
        utils_dialog.message({
          title: "电话不能为空",
          icon: "error"
        });
        return;
      }
      if (!common_vendor.index.$tm.u.isPhone(phoneRef.value)) {
        utils_dialog.message({
          title: "手机格式错误",
          icon: "error"
        });
        return;
      }
      if (!nickNameRef.value) {
        utils_dialog.message({
          title: "昵称不能为空",
          icon: "error"
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
          title: "个人资料",
          color: "#70DB93",
          fontColor: "white"
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
          color: "red",
          label: "授权更新",
          ["open-type"]: "chooseAvatar"
        }),
        f: common_vendor.p({
          ["font-size"]: 50,
          name: "tmicon-playcircle-fill"
        }),
        g: nickNameRef.value,
        h: nickNameRef.value,
        i: common_vendor.o(onSave),
        j: common_vendor.p({
          block: true,
          color: "green",
          label: "保存"
        }),
        k: common_vendor.unref(_totalBarHeight) + "px"
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/pages/member/userinfo/index.nvue"]]);
wx.createPage(MiniProgramPage);
