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
  (tmNavbar + tmInput + tmSheet + tmResult + tmTag + tmText + tmIcon + tmButton + tmApp)();
}
const tmApp = () => "../../../tmui/components/tm-app/tm-app.js";
const tmNavbar = () => "../../../tmui/components/tm-navbar/tm-navbar.js";
const tmButton = () => "../../../tmui/components/tm-button/tm-button.js";
const tmResult = () => "../../../tmui/components/tm-result/tm-result.js";
const tmSheet = () => "../../../tmui/components/tm-sheet/tm-sheet.js";
const tmIcon = () => "../../../tmui/components/tm-icon/tm-icon.js";
const tmInput = () => "../../../tmui/components/tm-input/tm-input.js";
const tmText = () => "../../../tmui/components/tm-text/tm-text.js";
const tmTag = () => "../../../tmui/components/tm-tag/tm-tag.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "list",
  setup(__props) {
    var _a;
    const _showSafe = common_vendor.ref(false);
    const load = common_vendor.ref(true);
    const addressList = common_vendor.reactive([]);
    const searchValue = common_vendor.ref("");
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
    common_vendor.onLoad(() => {
      _load("");
    });
    const _load = (_search) => {
      addressList.length = 0;
      load.value = true;
      utils_dialog.loading();
      api_user.userAddressList(_search).then((res) => {
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
              _load("");
            }).catch((err) => {
              console.log(err);
            });
          }
        },
        fail: (e2) => {
          console.log(e2);
        }
      });
    };
    const onEdit = (id) => {
      common_vendor.index.navigateTo({
        url: "./index?id=" + id,
        success: () => {
          common_vendor.index.$once("address:add::success", (data) => {
            _load("");
            console.log("新增成功返回");
          });
        }
      });
    };
    const toAdd = () => {
      common_vendor.index.navigateTo({
        url: "./index",
        success: () => {
          common_vendor.index.$once("address:add::success", (data) => {
            _load("");
            console.log("新增成功返回");
          });
        }
      });
    };
    const onSearch = (e) => {
      _load(e);
    };
    const onClear = () => {
      searchValue.value = "";
      _load("");
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "收货地址",
          color: "#70DB93",
          fontColor: "white"
        }),
        b: common_vendor.o(onSearch),
        c: common_vendor.o(onClear),
        d: common_vendor.o(common_vendor.m(($event) => searchValue.value = $event, {
          lazy: true
        }, true)),
        e: common_vendor.p({
          prefix: "tmicon-search",
          searchLabel: "搜索",
          placeholder: "请输入关键词",
          showClear: true,
          modelValue: searchValue.value
        }),
        f: common_vendor.p({
          margin: [20, 20],
          round: 3,
          shadow: 2
        }),
        g: addressList.length === 0 && !load.value
      }, addressList.length === 0 && !load.value ? {
        h: common_vendor.p({
          showBtn: false,
          status: "empty",
          title: "暂无数据"
        })
      } : {
        i: common_vendor.f(addressList, (item, index, i0) => {
          return common_vendor.e({
            a: item.firstChoose === 1
          }, item.firstChoose === 1 ? {
            b: "2596ba8e-6-" + i0 + "," + ("2596ba8e-5-" + i0),
            c: common_vendor.p({
              color: "red",
              size: "s",
              label: "默认"
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
            j: common_vendor.o(($event) => onEdit(item.id ?? ""), index),
            k: "2596ba8e-10-" + i0 + "," + ("2596ba8e-5-" + i0),
            l: index,
            m: "2596ba8e-5-" + i0 + ",2596ba8e-0"
          });
        }),
        j: common_vendor.p({
          name: "tmicon-edit"
        }),
        k: common_vendor.p({
          round: 3,
          shadow: 2,
          margin: [20, 20]
        })
      }, {
        l: common_vendor.o(chooseaddress),
        m: common_vendor.p({
          block: true,
          color: "red",
          padding: [0, 10],
          label: "微信导入"
        }),
        n: common_vendor.o(toAdd),
        o: common_vendor.p({
          block: true,
          color: "green",
          padding: [0, 10],
          label: "新增"
        }),
        p: common_vendor.unref(_totalBarHeight) + "px"
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/pages/member/address/list.nvue"]]);
wx.createPage(MiniProgramPage);
