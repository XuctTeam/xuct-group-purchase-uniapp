"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  (tmNavbar + tmButton + tmApp)();
}
const tmApp = () => "../../../tmui/components/tm-app/tm-app.js";
const tmNavbar = () => "../../../tmui/components/tm-navbar/tm-navbar.js";
const tmButton = () => "../../../tmui/components/tm-button/tm-button.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "list",
  setup(__props) {
    const doesHaveBangs = common_vendor.ref(false);
    common_vendor.onLoad(() => {
      common_vendor.index.getSystemInfo({
        success: (res) => {
          const iphoneX = "iPhone X";
          if (res.model.indexOf(iphoneX) > -1) {
            doesHaveBangs.value = true;
          }
        }
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "\u6536\u8D27\u5730\u5740",
          color: "green",
          linear: "right",
          blur: true
        }),
        b: common_vendor.p({
          ["linear-color"]: ["#ea3c2d", "#ff9d14"],
          color: "orange",
          ["font-color"]: "white",
          linear: "left",
          block: true,
          label: "\u81EA\u5B9A\u4E49\u6E10\u53D8\u80CC\u666F"
        }),
        c: common_vendor.p({
          ["linear-color"]: ["#ea3c2d", "#ff9d14"],
          color: "orange",
          ["font-color"]: "white",
          linear: "left",
          block: true,
          label: "\u81EA\u5B9A\u4E49\u6E10\u53D8\u80CC\u666F"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/pages/member/address/list.nvue"]]);
wx.createPage(MiniProgramPage);
