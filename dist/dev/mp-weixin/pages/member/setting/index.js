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
          title: "\u8BBE\u7F6E",
          color: "green",
          linear: "right",
          blur: true
        }),
        b: common_vendor.p({
          titleFontSize: 30,
          bottomBorder: true,
          title: "\u4E2A\u4EBA\u8D44\u6599",
          url: "/pages/member/userinfo/index"
        }),
        c: common_vendor.p({
          margin: [30, 10],
          shadow: 4,
          round: 2,
          color: "green",
          linear: "right"
        }),
        d: common_vendor.p({
          titleFontSize: 30,
          bottomBorder: true,
          title: "\u610F\u89C1\u53CD\u9988"
        }),
        e: common_vendor.p({
          margin: [30, 30],
          shadow: 4,
          round: 2,
          color: "green",
          linear: "right"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/pages/member/setting/index.nvue"]]);
wx.createPage(MiniProgramPage);
