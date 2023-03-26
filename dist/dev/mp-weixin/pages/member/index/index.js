"use strict";
const common_vendor = require("../../../common/vendor.js");
const store_user = require("../../../store/user.js");
require("../../../tmui/tool/function/util.js");
require("../../../tmui/tool/function/preview.js");
require("../../../constant/index.js");
if (!Math) {
  (tmNavbar + tmAvatar + tmText + tmButton + tmCell + tmIcon + tmGridItem + tmGrid + tmSheet + tmApp)();
}
const tmApp = () => "../../../tmui/components/tm-app/tm-app.js";
const tmCell = () => "../../../tmui/components/tm-cell/tm-cell.js";
const tmAvatar = () => "../../../tmui/components/tm-avatar/tm-avatar.js";
const tmNavbar = () => "../../../tmui/components/tm-navbar/tm-navbar.js";
const tmGridItem = () => "../../../tmui/components/tm-grid-item/tm-grid-item.js";
const tmGrid = () => "../../../tmui/components/tm-grid/tm-grid.js";
const tmText = () => "../../../tmui/components/tm-text/tm-text.js";
const tmIcon = () => "../../../tmui/components/tm-icon/tm-icon.js";
const tmSheet = () => "../../../tmui/components/tm-sheet/tm-sheet.js";
const tmButton = () => "../../../tmui/components/tm-button/tm-button.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const store = store_user.useUserHook();
    const { logged } = common_vendor.storeToRefs(store);
    const userInfo = store.getUserInfo;
    const orderItems = common_vendor.ref([
      {
        name: "待付款",
        icon: "/static/images/me-ic-obligation.png",
        nums: 0
      },
      {
        name: "待发货",
        icon: "/static/images/me-ic-sendout.png",
        nums: 0
      },
      {
        name: "待收货",
        icon: "/static/images/me-ic-receiving.png",
        nums: 0
      },
      {
        name: "待评价",
        icon: "/static/images/me-ic-evaluate.png",
        nums: 0
      }
    ]);
    const serviceItems = common_vendor.ref([
      {
        name: "地址管理",
        icon: "/static/images/me-ic-site.png",
        code: "address"
      },
      {
        name: "系统设置",
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
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "个人中心",
          color: "#70DB93",
          fontColor: "white"
        }),
        b: common_vendor.unref(logged)
      }, common_vendor.unref(logged) ? {
        c: common_vendor.p({
          trigger: true,
          img: common_vendor.unref(userInfo).avatar,
          round: 12
        }),
        d: common_vendor.p({
          ["font-size"]: 32,
          _class: "font-weight-b",
          label: common_vendor.unref(userInfo).nickname
        })
      } : {
        e: common_vendor.p({
          ["font-size"]: 32,
          _class: "font-weight-b",
          label: "登录参与团购"
        }),
        f: common_vendor.p({
          color: "red",
          icon: "tmicon-account",
          width: 60,
          round: 10,
          height: 60,
          fontSize: 28,
          margin: [50, 10],
          shadow: 0,
          text: true,
          size: "normal",
          url: "/pages/member/login/index"
        })
      }, {
        g: common_vendor.p({
          showAvatar: true,
          avatarSize: 40,
          avatar: "https://demo.jihainet.com/wap/static/image/userorder.png",
          margin: [0, 0],
          titleFontSize: 30,
          title: "我的服务"
        }),
        h: common_vendor.f(orderItems.value, (item, index, i0) => {
          return {
            a: "51623736-10-" + i0 + "," + ("51623736-9-" + i0),
            b: common_vendor.p({
              ["font-size"]: 40,
              name: item.icon
            }),
            c: "51623736-11-" + i0 + "," + ("51623736-9-" + i0),
            d: common_vendor.p({
              _class: "pt-16",
              ["font-size"]: 22,
              label: item.name
            }),
            e: index,
            f: common_vendor.o(($event) => orderItemClick(), index),
            g: "51623736-9-" + i0 + ",51623736-8"
          };
        }),
        i: common_vendor.p({
          dot: true,
          height: 140
        }),
        j: common_vendor.p({
          col: 4,
          width: 686
        }),
        k: common_vendor.p({
          round: 3,
          shadow: 2,
          margin: [20, 30, 20, 10]
        }),
        l: common_vendor.p({
          showAvatar: true,
          avatarSize: 40,
          avatar: "https://demo.jihainet.com/wap/static/image/userorder.png",
          margin: [0, 0],
          titleFontSize: 30,
          title: "我的服务"
        }),
        m: common_vendor.f(serviceItems.value, (item, index, i0) => {
          return {
            a: "51623736-16-" + i0 + "," + ("51623736-15-" + i0),
            b: common_vendor.p({
              ["font-size"]: 60,
              name: item.icon
            }),
            c: "51623736-17-" + i0 + "," + ("51623736-15-" + i0),
            d: common_vendor.p({
              _class: "pt-10",
              ["font-size"]: 22,
              label: item.name
            }),
            e: index,
            f: common_vendor.o(($event) => serviceItemClick(item.code), index),
            g: "51623736-15-" + i0 + ",51623736-14"
          };
        }),
        n: common_vendor.p({
          height: 140
        }),
        o: common_vendor.p({
          col: 4,
          width: 680
        }),
        p: common_vendor.p({
          round: 3,
          shadow: 2,
          margin: [20, 30, 20, 10]
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/pages/member/index/index.nvue"]]);
wx.createPage(MiniProgramPage);
