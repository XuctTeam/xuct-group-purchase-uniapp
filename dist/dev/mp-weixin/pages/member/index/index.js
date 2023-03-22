"use strict";
const common_vendor = require("../../../common/vendor.js");
const store_user = require("../../../store/user.js");
require("../../../tmui/tool/function/util.js");
require("../../../tmui/tool/function/preview.js");
require("../../../constant/index.js");
if (!Math) {
  (tmNavbar + tmButton + tmCell + tmIcon + tmText + tmGridItem + tmGrid + tmApp)();
}
const tmApp = () => "../../../tmui/components/tm-app/tm-app.js";
const tmButton = () => "../../../tmui/components/tm-button/tm-button.js";
const tmCell = () => "../../../tmui/components/tm-cell/tm-cell.js";
const tmNavbar = () => "../../../tmui/components/tm-navbar/tm-navbar.js";
const tmGridItem = () => "../../../tmui/components/tm-grid-item/tm-grid-item.js";
const tmGrid = () => "../../../tmui/components/tm-grid/tm-grid.js";
const tmText = () => "../../../tmui/components/tm-text/tm-text.js";
const tmIcon = () => "../../../tmui/components/tm-icon/tm-icon.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const store = store_user.useUserHook();
    const { logged } = common_vendor.storeToRefs(store);
    const userInfo = store.getUserInfo;
    const orderItems = common_vendor.ref([
      {
        name: "\u5F85\u4ED8\u6B3E",
        icon: "/static/images/me-ic-obligation.png",
        nums: 0
      },
      {
        name: "\u5F85\u53D1\u8D27",
        icon: "/static/images/me-ic-sendout.png",
        nums: 0
      },
      {
        name: "\u5F85\u6536\u8D27",
        icon: "/static/images/me-ic-receiving.png",
        nums: 0
      },
      {
        name: "\u5F85\u8BC4\u4EF7",
        icon: "/static/images/me-ic-evaluate.png",
        nums: 0
      }
    ]);
    const serviceItems = common_vendor.ref([
      {
        name: "\u5730\u5740\u7BA1\u7406",
        icon: "/static/images/me-ic-site.png",
        code: "address"
      },
      {
        name: "\u7CFB\u7EDF\u8BBE\u7F6E",
        icon: "/static/images/me-ic-set.png",
        code: "setting"
      }
    ]);
    const orderItemClick = (index) => {
      debugger;
    };
    const serviceItemClick = (code) => {
      if (code === "setting") {
        common_vendor.index.$tm.u.routerTo("/pages/member/setting/index", "navigate");
        return;
      }
      common_vendor.index.$tm.u.routerTo("/pages/member/address/list", "navigate");
    };
    function goToLogin() {
      common_vendor.index.navigateTo({
        url: "/pages/member/login/index"
      });
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "\u4E2A\u4EBA\u4E2D\u5FC3",
          color: "green",
          linear: "right",
          blur: true
        }),
        b: common_vendor.unref(logged)
      }, common_vendor.unref(logged) ? {
        c: common_vendor.unref(userInfo).avatar,
        d: common_vendor.t(common_vendor.unref(userInfo).nickname)
      } : {
        e: common_vendor.o(goToLogin),
        f: common_vendor.p({
          size: "small",
          ["linear-color"]: ["#ea3c2d", "#ff9d14"],
          color: "orange",
          ["font-color"]: "white",
          round: 10,
          linear: "left",
          label: "\u6388\u6743\u767B\u5F55",
          width: 200
        })
      }, {
        g: common_vendor.p({
          showAvatar: true,
          avatarSize: 40,
          avatar: "https://demo.jihainet.com/wap/static/image/userorder.png",
          margin: [0, 0],
          titleFontSize: 30,
          title: "\u6211\u7684\u8BA2\u5355"
        }),
        h: common_vendor.f(orderItems.value, (item, index, i0) => {
          return {
            a: "51623736-6-" + i0 + "," + ("51623736-5-" + i0),
            b: common_vendor.p({
              ["font-size"]: 60,
              name: item.icon
            }),
            c: "51623736-7-" + i0 + "," + ("51623736-5-" + i0),
            d: common_vendor.p({
              _class: "pt-16",
              ["font-size"]: 22,
              label: item.name
            }),
            e: index,
            f: common_vendor.o(($event) => orderItemClick(), index),
            g: "51623736-5-" + i0 + ",51623736-4"
          };
        }),
        i: common_vendor.p({
          dot: true,
          height: 140
        }),
        j: common_vendor.p({
          col: 4
        }),
        k: common_vendor.p({
          showAvatar: true,
          avatarSize: 40,
          avatar: "https://demo.jihainet.com/wap/static/image/userorder.png",
          margin: [0, 0],
          titleFontSize: 30,
          title: "\u6211\u7684\u670D\u52A1"
        }),
        l: common_vendor.f(serviceItems.value, (item, index, i0) => {
          return {
            a: "51623736-11-" + i0 + "," + ("51623736-10-" + i0),
            b: common_vendor.p({
              ["font-size"]: 60,
              name: item.icon
            }),
            c: "51623736-12-" + i0 + "," + ("51623736-10-" + i0),
            d: common_vendor.p({
              _class: "pt-10",
              ["font-size"]: 22,
              label: item.name
            }),
            e: index,
            f: common_vendor.o(($event) => serviceItemClick(item.code), index),
            g: "51623736-10-" + i0 + ",51623736-9"
          };
        }),
        m: common_vendor.p({
          height: 140
        }),
        n: common_vendor.p({
          col: 4
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/pages/member/index/index.nvue"]]);
wx.createPage(MiniProgramPage);
