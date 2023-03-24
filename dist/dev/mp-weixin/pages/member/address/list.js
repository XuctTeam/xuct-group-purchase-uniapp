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
  (tmNavbar + tmInput + tmSheet + tmResult + tmTag + tmText + tmIcon + tmButton + tmMessage + tmApp)();
}
const tmApp = () => "../../../tmui/components/tm-app/tm-app.js";
const tmNavbar = () => "../../../tmui/components/tm-navbar/tm-navbar.js";
const tmButton = () => "../../../tmui/components/tm-button/tm-button.js";
const tmResult = () => "../../../tmui/components/tm-result/tm-result.js";
const tmSheet = () => "../../../tmui/components/tm-sheet/tm-sheet.js";
const tmMessage = () => "../../../tmui/components/tm-message/tm-message.js";
const tmIcon = () => "../../../tmui/components/tm-icon/tm-icon.js";
const tmInput = () => "../../../tmui/components/tm-input/tm-input.js";
const tmText = () => "../../../tmui/components/tm-text/tm-text.js";
const tmTag = () => "../../../tmui/components/tm-tag/tm-tag.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "list",
  setup(__props) {
    var _a, _b;
    const _showSafe = common_vendor.ref(false);
    const msg = common_vendor.ref(null);
    const load = common_vendor.ref(true);
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
      _load();
    });
    const _load = () => {
      addressList.length = 0;
      load.value = true;
      utils_dialog.loading();
      api_user.userAddressList().then((res) => {
        addressList.push(...res.data);
        load.value = false;
        utils_dialog.hideLoading();
      }).catch((err) => {
        console.log(err);
        load.value = false;
        utils_dialog.hideLoading();
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
    const onEdit = (id) => {
      common_vendor.index.navigateTo({
        url: "./index?id=" + id,
        success: () => {
          common_vendor.index.$once("address:add::success", (data) => {
            _load();
            console.log("\u65B0\u589E\u6210\u529F\u8FD4\u56DE");
          });
        }
      });
    };
    const toAdd = () => {
      common_vendor.index.navigateTo({
        url: "./index",
        success: () => {
          common_vendor.index.$once("address:add::success", (data) => {
            _load();
            console.log("\u65B0\u589E\u6210\u529F\u8FD4\u56DE");
          });
        }
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "\u6536\u8D27\u5730\u5740",
          color: "#70DB93",
          fontColor: "white"
        }),
        b: common_vendor.p({
          prefix: "tmicon-search",
          searchLabel: "\u641C\u7D22",
          placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u8BCD"
        }),
        c: common_vendor.p({
          margin: [20, 20],
          round: 3,
          shadow: 2
        }),
        d: addressList.length === 0 && !load.value
      }, addressList.length === 0 && !load.value ? {
        e: common_vendor.p({
          showBtn: false,
          status: "empty",
          title: "\u6682\u65E0\u6570\u636E"
        })
      } : {
        f: common_vendor.f(addressList, (item, index, i0) => {
          return common_vendor.e({
            a: item.firstChoose === 1
          }, item.firstChoose === 1 ? {
            b: "2596ba8e-6-" + i0 + "," + ("2596ba8e-5-" + i0),
            c: common_vendor.p({
              color: "red",
              size: "s",
              label: "\u9ED8\u8BA4"
            })
          } : {}, {
            d: "2596ba8e-7-" + i0 + "," + ("2596ba8e-5-" + i0),
            e: common_vendor.p({
              ["font-size"]: 30,
              label: `${item.provinceName}${item.cityName}${item.countyName}`
            }),
            f: "2596ba8e-8-" + i0 + "," + ("2596ba8e-5-" + i0),
            g: common_vendor.p({
              ["font-size"]: 28,
              label: item.detailInfo
            }),
            h: "2596ba8e-9-" + i0 + "," + ("2596ba8e-5-" + i0),
            i: common_vendor.p({
              ["font-size"]: 28,
              label: `${item.telNumber}${item.userName}`
            }),
            j: common_vendor.o(($event) => onEdit(item.id), index),
            k: "2596ba8e-10-" + i0 + "," + ("2596ba8e-5-" + i0),
            l: index,
            m: "2596ba8e-5-" + i0 + ",2596ba8e-0"
          });
        }),
        g: common_vendor.p({
          name: "tmicon-edit"
        }),
        h: common_vendor.p({
          round: 3,
          shadow: 2,
          margin: [20, 20]
        })
      }, {
        i: common_vendor.o(chooseaddress),
        j: common_vendor.p({
          block: true,
          color: "red",
          padding: [0, 10],
          label: "\u5FAE\u4FE1\u5BFC\u5165"
        }),
        k: common_vendor.o(toAdd),
        l: common_vendor.p({
          block: true,
          color: "green",
          padding: [0, 10],
          label: "\u65B0\u589E"
        }),
        m: common_vendor.unref(_totalBarHeight) + "px",
        n: common_vendor.sr(msg, "2596ba8e-13,2596ba8e-0", {
          "k": "msg"
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/pages/member/address/list.nvue"]]);
wx.createPage(MiniProgramPage);
