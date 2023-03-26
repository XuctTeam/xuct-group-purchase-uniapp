"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  (tmNavbar + tmCell + tmSheet + tmApp)();
}
const tmApp = () => "../../../tmui/components/tm-app/tm-app.js";
const tmNavbar = () => "../../../tmui/components/tm-navbar/tm-navbar.js";
const tmSheet = () => "../../../tmui/components/tm-sheet/tm-sheet.js";
const tmCell = () => "../../../tmui/components/tm-cell/tm-cell.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "系统设置",
          color: "#70DB93",
          fontColor: "white"
        }),
        b: common_vendor.p({
          titleFontSize: 30,
          bottomBorder: true,
          title: "个人资料",
          url: "/pages/member/userinfo/index"
        }),
        c: common_vendor.p({
          titleFontSize: 30,
          bottomBorder: true,
          title: "意见反馈"
        }),
        d: common_vendor.p({
          margin: [10, 10],
          shadow: 4,
          round: 2
        }),
        e: common_vendor.p({
          titleFontSize: 30,
          bottomBorder: true,
          title: "意见反馈"
        }),
        f: common_vendor.p({
          margin: [10, 10],
          shadow: 4,
          round: 2
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/pages/member/setting/index.nvue"]]);
wx.createPage(MiniProgramPage);
