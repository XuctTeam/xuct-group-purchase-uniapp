"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _component_tm_text = common_vendor.resolveComponent("tm-text");
  _component_tm_text();
}
if (!Math) {
  (tmNavbar + tmSheet + tmButton + tmMessage + tmApp)();
}
const tmApp = () => "../../../tmui/components/tm-app/tm-app.js";
const tmNavbar = () => "../../../tmui/components/tm-navbar/tm-navbar.js";
const tmButton = () => "../../../tmui/components/tm-button/tm-button.js";
const tmSheet = () => "../../../tmui/components/tm-sheet/tm-sheet.js";
const tmMessage = () => "../../../tmui/components/tm-message/tm-message.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "list",
  setup(__props) {
    var _a, _b;
    const _showSafe = common_vendor.ref(false);
    const msg = common_vendor.ref(null);
    let sys = common_vendor.index.getSystemInfoSync();
    const win_bottom = (_b = (_a = sys == null ? void 0 : sys.safeAreaInsets) == null ? void 0 : _a.bottom) != null ? _b : 0;
    if (win_bottom > 0) {
      _showSafe.value = true;
    }
    const _totalBarHeight = common_vendor.computed$1(() => {
      if (_showSafe.value)
        return 80;
      return 60;
    });
    const chooseaddress = (e) => {
      common_vendor.index.chooseAddress({
        success: (res) => {
          if (res.errMsg == "chooseAddress:ok")
            ;
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
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "\u6536\u8D27\u5730\u5740",
          color: "green",
          linear: "right",
          blur: true
        }),
        b: common_vendor.p({
          ["font-size"]: 24,
          _class: "font-weight-b",
          label: "\u4E0D\u540C\u7684\u65B9\u5411\uFF0C\u8FD8\u6709\u66F4\u591A\u4E30\u5BCC\u5C5E\u6027\u89C1\u6587\u6863,\u8FD9\u662F\u57FA\u7840\u7EC4\u4EF6,\u53EA\u8981\u5957\u5728\u5916\u9762\u7528\u6765\u81EA\u52A8\u914D\u8272\u4F7F\u7528,\u9002\u5E94\u6697\u9ED1\u6548\u679C,\u5207\u4E0D\u53EF\u65E0\u9650\u5957\u7684\u592A\u591A,\u5F71\u54CD\u6027\u80FD."
        }),
        c: common_vendor.p({
          margin: [32, 0, 32, 32],
          shadow: 4,
          round: 2,
          color: "pink",
          linear: "right"
        }),
        d: common_vendor.p({
          ["font-size"]: 24,
          _class: "font-weight-b",
          label: "\u4E0D\u540C\u7684\u65B9\u5411\uFF0C\u8FD8\u6709\u66F4\u591A\u4E30\u5BCC\u5C5E\u6027\u89C1\u6587\u6863,\u8FD9\u662F\u57FA\u7840\u7EC4\u4EF6,\u53EA\u8981\u5957\u5728\u5916\u9762\u7528\u6765\u81EA\u52A8\u914D\u8272\u4F7F\u7528,\u9002\u5E94\u6697\u9ED1\u6548\u679C,\u5207\u4E0D\u53EF\u65E0\u9650\u5957\u7684\u592A\u591A,\u5F71\u54CD\u6027\u80FD."
        }),
        e: common_vendor.p({
          margin: [32, 0, 32, 32],
          shadow: 4,
          round: 2,
          color: "pink",
          linear: "right"
        }),
        f: common_vendor.p({
          ["font-size"]: 24,
          _class: "font-weight-b",
          label: "\u4E0D\u540C\u7684\u65B9\u5411\uFF0C\u8FD8\u6709\u66F4\u591A\u4E30\u5BCC\u5C5E\u6027\u89C1\u6587\u6863,\u8FD9\u662F\u57FA\u7840\u7EC4\u4EF6,\u53EA\u8981\u5957\u5728\u5916\u9762\u7528\u6765\u81EA\u52A8\u914D\u8272\u4F7F\u7528,\u9002\u5E94\u6697\u9ED1\u6548\u679C,\u5207\u4E0D\u53EF\u65E0\u9650\u5957\u7684\u592A\u591A,\u5F71\u54CD\u6027\u80FD."
        }),
        g: common_vendor.p({
          margin: [32, 0, 32, 32],
          shadow: 4,
          round: 2,
          color: "pink",
          linear: "right"
        }),
        h: common_vendor.p({
          ["font-size"]: 24,
          _class: "font-weight-b",
          label: "\u4E0D\u540C\u7684\u65B9\u5411\uFF0C\u8FD8\u6709\u66F4\u591A\u4E30\u5BCC\u5C5E\u6027\u89C1\u6587\u6863,\u8FD9\u662F\u57FA\u7840\u7EC4\u4EF6,\u53EA\u8981\u5957\u5728\u5916\u9762\u7528\u6765\u81EA\u52A8\u914D\u8272\u4F7F\u7528,\u9002\u5E94\u6697\u9ED1\u6548\u679C,\u5207\u4E0D\u53EF\u65E0\u9650\u5957\u7684\u592A\u591A,\u5F71\u54CD\u6027\u80FD."
        }),
        i: common_vendor.p({
          margin: [32, 0, 32, 32],
          shadow: 4,
          round: 2,
          color: "pink",
          linear: "right"
        }),
        j: common_vendor.p({
          ["font-size"]: 24,
          _class: "font-weight-b",
          label: "\u4E0D\u540C\u7684\u65B9\u5411\uFF0C\u8FD8\u6709\u66F4\u591A\u4E30\u5BCC\u5C5E\u6027\u89C1\u6587\u6863,\u8FD9\u662F\u57FA\u7840\u7EC4\u4EF6,\u53EA\u8981\u5957\u5728\u5916\u9762\u7528\u6765\u81EA\u52A8\u914D\u8272\u4F7F\u7528,\u9002\u5E94\u6697\u9ED1\u6548\u679C,\u5207\u4E0D\u53EF\u65E0\u9650\u5957\u7684\u592A\u591A,\u5F71\u54CD\u6027\u80FD."
        }),
        k: common_vendor.p({
          margin: [32, 0, 32, 32],
          shadow: 4,
          round: 2,
          color: "pink",
          linear: "right"
        }),
        l: common_vendor.p({
          ["font-size"]: 24,
          _class: "font-weight-b",
          label: "\u4E0D\u540C\u7684\u65B9\u5411\uFF0C\u8FD8\u6709\u66F4\u591A\u4E30\u5BCC\u5C5E\u6027\u89C1\u6587\u6863,\u8FD9\u662F\u57FA\u7840\u7EC4\u4EF6,\u53EA\u8981\u5957\u5728\u5916\u9762\u7528\u6765\u81EA\u52A8\u914D\u8272\u4F7F\u7528,\u9002\u5E94\u6697\u9ED1\u6548\u679C,\u5207\u4E0D\u53EF\u65E0\u9650\u5957\u7684\u592A\u591A,\u5F71\u54CD\u6027\u80FD."
        }),
        m: common_vendor.p({
          margin: [32, 0, 32, 32],
          shadow: 4,
          round: 2,
          color: "pink",
          linear: "right"
        }),
        n: common_vendor.p({
          ["font-size"]: 24,
          _class: "font-weight-b",
          label: "\u4E0D\u540C\u7684\u65B9\u5411\uFF0C\u8FD8\u6709\u66F4\u591A\u4E30\u5BCC\u5C5E\u6027\u89C1\u6587\u6863,\u8FD9\u662F\u57FA\u7840\u7EC4\u4EF6,\u53EA\u8981\u5957\u5728\u5916\u9762\u7528\u6765\u81EA\u52A8\u914D\u8272\u4F7F\u7528,\u9002\u5E94\u6697\u9ED1\u6548\u679C,\u5207\u4E0D\u53EF\u65E0\u9650\u5957\u7684\u592A\u591A,\u5F71\u54CD\u6027\u80FD."
        }),
        o: common_vendor.p({
          margin: [32, 0, 32, 32],
          shadow: 4,
          round: 2,
          color: "pink",
          linear: "right"
        }),
        p: common_vendor.p({
          ["font-size"]: 24,
          _class: "font-weight-b",
          label: "\u4E0D\u540C\u7684\u65B9\u5411\uFF0C\u8FD8\u6709\u66F4\u591A\u4E30\u5BCC\u5C5E\u6027\u89C1\u6587\u6863,\u8FD9\u662F\u57FA\u7840\u7EC4\u4EF6,\u53EA\u8981\u5957\u5728\u5916\u9762\u7528\u6765\u81EA\u52A8\u914D\u8272\u4F7F\u7528,\u9002\u5E94\u6697\u9ED1\u6548\u679C,\u5207\u4E0D\u53EF\u65E0\u9650\u5957\u7684\u592A\u591A,\u5F71\u54CD\u6027\u80FD."
        }),
        q: common_vendor.p({
          margin: [32, 0, 32, 32],
          shadow: 4,
          round: 2,
          color: "pink",
          linear: "right"
        }),
        r: common_vendor.p({
          ["font-size"]: 24,
          _class: "font-weight-b",
          label: "\u4E0D\u540C\u7684\u65B9\u5411\uFF0C\u8FD8\u6709\u66F4\u591A\u4E30\u5BCC\u5C5E\u6027\u89C1\u6587\u6863,\u8FD9\u662F\u57FA\u7840\u7EC4\u4EF6,\u53EA\u8981\u5957\u5728\u5916\u9762\u7528\u6765\u81EA\u52A8\u914D\u8272\u4F7F\u7528,\u9002\u5E94\u6697\u9ED1\u6548\u679C,\u5207\u4E0D\u53EF\u65E0\u9650\u5957\u7684\u592A\u591A,\u5F71\u54CD\u6027\u80FD."
        }),
        s: common_vendor.p({
          margin: [32, 0, 32, 32],
          shadow: 4,
          round: 2,
          color: "pink",
          linear: "right"
        }),
        t: common_vendor.p({
          ["font-size"]: 24,
          _class: "font-weight-b",
          label: "\u4E0D\u540C\u7684\u65B9\u5411\uFF0C\u8FD8\u6709\u66F4\u591A\u4E30\u5BCC\u5C5E\u6027\u89C1\u6587\u6863,\u8FD9\u662F\u57FA\u7840\u7EC4\u4EF6,\u53EA\u8981\u5957\u5728\u5916\u9762\u7528\u6765\u81EA\u52A8\u914D\u8272\u4F7F\u7528,\u9002\u5E94\u6697\u9ED1\u6548\u679C,\u5207\u4E0D\u53EF\u65E0\u9650\u5957\u7684\u592A\u591A,\u5F71\u54CD\u6027\u80FD."
        }),
        v: common_vendor.p({
          margin: [32, 0, 32, 32],
          shadow: 4,
          round: 2,
          color: "pink",
          linear: "right"
        }),
        w: common_vendor.p({
          ["font-size"]: 24,
          _class: "font-weight-b",
          label: "\u4E0D\u540C\u7684\u65B9\u5411\uFF0C\u8FD8\u6709\u66F4\u591A\u4E30\u5BCC\u5C5E\u6027\u89C1\u6587\u6863,\u8FD9\u662F\u57FA\u7840\u7EC4\u4EF6,\u53EA\u8981\u5957\u5728\u5916\u9762\u7528\u6765\u81EA\u52A8\u914D\u8272\u4F7F\u7528,\u9002\u5E94\u6697\u9ED1\u6548\u679C,\u5207\u4E0D\u53EF\u65E0\u9650\u5957\u7684\u592A\u591A,\u5F71\u54CD\u6027\u80FD."
        }),
        x: common_vendor.p({
          margin: [32, 0, 32, 32],
          shadow: 4,
          round: 2,
          color: "pink",
          linear: "right"
        }),
        y: common_vendor.p({
          ["font-size"]: 24,
          _class: "font-weight-b",
          label: "\u4E0D\u540C\u7684\u65B9\u5411\uFF0C\u8FD8\u6709\u66F4\u591A\u4E30\u5BCC\u5C5E\u6027\u89C1\u6587\u6863,\u8FD9\u662F\u57FA\u7840\u7EC4\u4EF6,\u53EA\u8981\u5957\u5728\u5916\u9762\u7528\u6765\u81EA\u52A8\u914D\u8272\u4F7F\u7528,\u9002\u5E94\u6697\u9ED1\u6548\u679C,\u5207\u4E0D\u53EF\u65E0\u9650\u5957\u7684\u592A\u591A,\u5F71\u54CD\u6027\u80FD."
        }),
        z: common_vendor.p({
          margin: [32, 0, 32, 32],
          shadow: 4,
          round: 2,
          color: "pink",
          linear: "right"
        }),
        A: common_vendor.p({
          ["font-size"]: 24,
          _class: "font-weight-b",
          label: "\u4E0D\u540C\u7684\u65B9\u5411\uFF0C\u8FD8\u6709\u66F4\u591A\u4E30\u5BCC\u5C5E\u6027\u89C1\u6587\u6863,\u8FD9\u662F\u57FA\u7840\u7EC4\u4EF6,\u53EA\u8981\u5957\u5728\u5916\u9762\u7528\u6765\u81EA\u52A8\u914D\u8272\u4F7F\u7528,\u9002\u5E94\u6697\u9ED1\u6548\u679C,\u5207\u4E0D\u53EF\u65E0\u9650\u5957\u7684\u592A\u591A,\u5F71\u54CD\u6027\u80FD."
        }),
        B: common_vendor.p({
          margin: [32, 0, 32, 32],
          shadow: 4,
          round: 2,
          color: "pink",
          linear: "right"
        }),
        C: common_vendor.p({
          ["font-size"]: 24,
          _class: "font-weight-b",
          label: "\u4E0D\u540C\u7684\u65B9\u5411\uFF0C\u8FD8\u6709\u66F4\u591A\u4E30\u5BCC\u5C5E\u6027\u89C1\u6587\u6863,\u8FD9\u662F\u57FA\u7840\u7EC4\u4EF6,\u53EA\u8981\u5957\u5728\u5916\u9762\u7528\u6765\u81EA\u52A8\u914D\u8272\u4F7F\u7528,\u9002\u5E94\u6697\u9ED1\u6548\u679C,\u5207\u4E0D\u53EF\u65E0\u9650\u5957\u7684\u592A\u591A,\u5F71\u54CD\u6027\u80FD."
        }),
        D: common_vendor.p({
          margin: [32, 0, 32, 32],
          shadow: 4,
          round: 2,
          color: "pink",
          linear: "right"
        }),
        E: common_vendor.p({
          ["font-size"]: 24,
          _class: "font-weight-b",
          label: "\u4E0D\u540C\u7684\u65B9\u5411\uFF0C\u8FD8\u6709\u66F4\u591A\u4E30\u5BCC\u5C5E\u6027\u89C1\u6587\u6863,\u8FD9\u662F\u57FA\u7840\u7EC4\u4EF6,\u53EA\u8981\u5957\u5728\u5916\u9762\u7528\u6765\u81EA\u52A8\u914D\u8272\u4F7F\u7528,\u9002\u5E94\u6697\u9ED1\u6548\u679C,\u5207\u4E0D\u53EF\u65E0\u9650\u5957\u7684\u592A\u591A,\u5F71\u54CD\u6027\u80FD."
        }),
        F: common_vendor.p({
          margin: [32, 0, 32, 32],
          shadow: 4,
          round: 2,
          color: "pink",
          linear: "right"
        }),
        G: common_vendor.p({
          ["font-size"]: 24,
          _class: "font-weight-b",
          label: "\u4E0D\u540C\u7684\u65B9\u5411\uFF0C\u8FD8\u6709\u66F4\u591A\u4E30\u5BCC\u5C5E\u6027\u89C1\u6587\u6863,\u8FD9\u662F\u57FA\u7840\u7EC4\u4EF6,\u53EA\u8981\u5957\u5728\u5916\u9762\u7528\u6765\u81EA\u52A8\u914D\u8272\u4F7F\u7528,\u9002\u5E94\u6697\u9ED1\u6548\u679C,\u5207\u4E0D\u53EF\u65E0\u9650\u5957\u7684\u592A\u591A,\u5F71\u54CD\u6027\u80FD."
        }),
        H: common_vendor.p({
          margin: [32, 0, 32, 32],
          shadow: 4,
          round: 2,
          color: "pink",
          linear: "right"
        }),
        I: common_vendor.p({
          ["font-size"]: 24,
          _class: "font-weight-b",
          label: "\u4E0D\u540C\u7684\u65B9\u5411\uFF0C\u8FD8\u6709\u66F4\u591A\u4E30\u5BCC\u5C5E\u6027\u89C1\u6587\u6863,\u8FD9\u662F\u57FA\u7840\u7EC4\u4EF6,\u53EA\u8981\u5957\u5728\u5916\u9762\u7528\u6765\u81EA\u52A8\u914D\u8272\u4F7F\u7528,\u9002\u5E94\u6697\u9ED1\u6548\u679C,\u5207\u4E0D\u53EF\u65E0\u9650\u5957\u7684\u592A\u591A,\u5F71\u54CD\u6027\u80FD."
        }),
        J: common_vendor.p({
          margin: [32, 0, 32, 32],
          shadow: 4,
          round: 2,
          color: "pink",
          linear: "right"
        }),
        K: common_vendor.p({
          ["font-size"]: 24,
          _class: "font-weight-b",
          label: "\u4E0D\u540C\u7684\u65B9\u5411\uFF0C\u8FD8\u6709\u66F4\u591A\u4E30\u5BCC\u5C5E\u6027\u89C1\u6587\u6863,\u8FD9\u662F\u57FA\u7840\u7EC4\u4EF6,\u53EA\u8981\u5957\u5728\u5916\u9762\u7528\u6765\u81EA\u52A8\u914D\u8272\u4F7F\u7528,\u9002\u5E94\u6697\u9ED1\u6548\u679C,\u5207\u4E0D\u53EF\u65E0\u9650\u5957\u7684\u592A\u591A,\u5F71\u54CD\u6027\u80FD."
        }),
        L: common_vendor.p({
          margin: [32, 0, 32, 32],
          shadow: 4,
          round: 2,
          color: "pink",
          linear: "right"
        }),
        M: common_vendor.p({
          ["font-size"]: 24,
          _class: "font-weight-b",
          label: "\u4E0D\u540C\u7684\u65B9\u5411\uFF0C\u8FD8\u6709\u66F4\u591A\u4E30\u5BCC\u5C5E\u6027\u89C1\u6587\u6863,\u8FD9\u662F\u57FA\u7840\u7EC4\u4EF6,\u53EA\u8981\u5957\u5728\u5916\u9762\u7528\u6765\u81EA\u52A8\u914D\u8272\u4F7F\u7528,\u9002\u5E94\u6697\u9ED1\u6548\u679C,\u5207\u4E0D\u53EF\u65E0\u9650\u5957\u7684\u592A\u591A,\u5F71\u54CD\u6027\u80FD."
        }),
        N: common_vendor.p({
          margin: [32, 0, 32, 32],
          shadow: 4,
          round: 2,
          color: "pink",
          linear: "right"
        }),
        O: common_vendor.p({
          ["font-size"]: 24,
          _class: "font-weight-b",
          label: "\u4E0D\u540C\u7684\u65B9\u5411\uFF0C\u8FD8\u6709\u66F4\u591A\u4E30\u5BCC\u5C5E\u6027\u89C1\u6587\u6863,\u8FD9\u662F\u57FA\u7840\u7EC4\u4EF6,\u53EA\u8981\u5957\u5728\u5916\u9762\u7528\u6765\u81EA\u52A8\u914D\u8272\u4F7F\u7528,\u9002\u5E94\u6697\u9ED1\u6548\u679C,\u5207\u4E0D\u53EF\u65E0\u9650\u5957\u7684\u592A\u591A,\u5F71\u54CD\u6027\u80FD."
        }),
        P: common_vendor.p({
          margin: [32, 0, 32, 32],
          shadow: 4,
          round: 2,
          color: "pink",
          linear: "right"
        }),
        Q: common_vendor.p({
          ["font-size"]: 24,
          _class: "font-weight-b",
          label: "\u4E0D\u540C\u7684\u65B9\u5411\uFF0C\u8FD8\u6709\u66F4\u591A\u4E30\u5BCC\u5C5E\u6027\u89C1\u6587\u6863,\u8FD9\u662F\u57FA\u7840\u7EC4\u4EF6,\u53EA\u8981\u5957\u5728\u5916\u9762\u7528\u6765\u81EA\u52A8\u914D\u8272\u4F7F\u7528,\u9002\u5E94\u6697\u9ED1\u6548\u679C,\u5207\u4E0D\u53EF\u65E0\u9650\u5957\u7684\u592A\u591A,\u5F71\u54CD\u6027\u80FD."
        }),
        R: common_vendor.p({
          margin: [32, 0, 32, 32],
          shadow: 4,
          round: 2,
          color: "pink",
          linear: "right"
        }),
        S: common_vendor.p({
          ["font-size"]: 24,
          _class: "font-weight-b",
          label: "\u4E0D\u540C\u7684\u65B9\u5411\uFF0C\u8FD8\u6709\u66F4\u591A\u4E30\u5BCC\u5C5E\u6027\u89C1\u6587\u6863,\u8FD9\u662F\u57FA\u7840\u7EC4\u4EF6,\u53EA\u8981\u5957\u5728\u5916\u9762\u7528\u6765\u81EA\u52A8\u914D\u8272\u4F7F\u7528,\u9002\u5E94\u6697\u9ED1\u6548\u679C,\u5207\u4E0D\u53EF\u65E0\u9650\u5957\u7684\u592A\u591A,\u5F71\u54CD\u6027\u80FD."
        }),
        T: common_vendor.p({
          margin: [32, 0, 32, 32],
          shadow: 4,
          round: 2,
          color: "pink",
          linear: "right"
        }),
        U: common_vendor.p({
          ["font-size"]: 24,
          _class: "font-weight-b",
          label: "\u4E0D\u540C\u7684\u65B9\u5411\uFF0C\u8FD8\u6709\u66F4\u591A\u4E30\u5BCC\u5C5E\u6027\u89C1\u6587\u6863,\u8FD9\u662F\u57FA\u7840\u7EC4\u4EF6,\u53EA\u8981\u5957\u5728\u5916\u9762\u7528\u6765\u81EA\u52A8\u914D\u8272\u4F7F\u7528,\u9002\u5E94\u6697\u9ED1\u6548\u679C,\u5207\u4E0D\u53EF\u65E0\u9650\u5957\u7684\u592A\u591A,\u5F71\u54CD\u6027\u80FD."
        }),
        V: common_vendor.p({
          margin: [32, 0, 32, 32],
          shadow: 4,
          round: 2,
          color: "pink",
          linear: "right"
        }),
        W: common_vendor.p({
          ["font-size"]: 24,
          _class: "font-weight-b",
          label: "\u4E0D\u540C\u7684\u65B9\u5411\uFF0C\u8FD8\u6709\u66F4\u591A\u4E30\u5BCC\u5C5E\u6027\u89C1\u6587\u6863,\u8FD9\u662F\u57FA\u7840\u7EC4\u4EF6,\u53EA\u8981\u5957\u5728\u5916\u9762\u7528\u6765\u81EA\u52A8\u914D\u8272\u4F7F\u7528,\u9002\u5E94\u6697\u9ED1\u6548\u679C,\u5207\u4E0D\u53EF\u65E0\u9650\u5957\u7684\u592A\u591A,\u5F71\u54CD\u6027\u80FD."
        }),
        X: common_vendor.p({
          margin: [32, 0, 32, 32],
          shadow: 4,
          round: 2,
          color: "pink",
          linear: "right"
        }),
        Y: common_vendor.p({
          ["font-size"]: 24,
          _class: "font-weight-b",
          label: "\u4E0D\u540C\u7684\u65B9\u5411\uFF0C\u8FD8\u6709\u66F4\u591A\u4E30\u5BCC\u5C5E\u6027\u89C1\u6587\u6863,\u8FD9\u662F\u57FA\u7840\u7EC4\u4EF6,\u53EA\u8981\u5957\u5728\u5916\u9762\u7528\u6765\u81EA\u52A8\u914D\u8272\u4F7F\u7528,\u9002\u5E94\u6697\u9ED1\u6548\u679C,\u5207\u4E0D\u53EF\u65E0\u9650\u5957\u7684\u592A\u591A,\u5F71\u54CD\u6027\u80FD."
        }),
        Z: common_vendor.p({
          margin: [32, 0, 32, 32],
          shadow: 4,
          round: 2,
          color: "pink",
          linear: "right"
        }),
        aa: common_vendor.p({
          ["font-size"]: 24,
          _class: "font-weight-b",
          label: "\u4E0D\u540C\u7684\u65B9\u5411\uFF0C\u8FD8\u6709\u66F4\u591A\u4E30\u5BCC\u5C5E\u6027\u89C1\u6587\u6863,\u8FD9\u662F\u57FA\u7840\u7EC4\u4EF6,\u53EA\u8981\u5957\u5728\u5916\u9762\u7528\u6765\u81EA\u52A8\u914D\u8272\u4F7F\u7528,\u9002\u5E94\u6697\u9ED1\u6548\u679C,\u5207\u4E0D\u53EF\u65E0\u9650\u5957\u7684\u592A\u591A,\u5F71\u54CD\u6027\u80FD."
        }),
        ab: common_vendor.p({
          margin: [32, 0, 32, 32],
          shadow: 4,
          round: 2,
          color: "pink",
          linear: "right"
        }),
        ac: common_vendor.p({
          ["font-size"]: 24,
          _class: "font-weight-b",
          label: "\u4E0D\u540C\u7684\u65B9\u5411\uFF0C\u8FD8\u6709\u66F4\u591A\u4E30\u5BCC\u5C5E\u6027\u89C1\u6587\u6863,\u8FD9\u662F\u57FA\u7840\u7EC4\u4EF6,\u53EA\u8981\u5957\u5728\u5916\u9762\u7528\u6765\u81EA\u52A8\u914D\u8272\u4F7F\u7528,\u9002\u5E94\u6697\u9ED1\u6548\u679C,\u5207\u4E0D\u53EF\u65E0\u9650\u5957\u7684\u592A\u591A,\u5F71\u54CD\u6027\u80FD."
        }),
        ad: common_vendor.p({
          margin: [32, 0, 32, 32],
          shadow: 4,
          round: 2,
          color: "pink",
          linear: "right"
        }),
        ae: common_vendor.p({
          ["font-size"]: 24,
          _class: "font-weight-b",
          label: "\u4E0D\u540C\u7684\u65B9\u5411\uFF0C\u8FD8\u6709\u66F4\u591A\u4E30\u5BCC\u5C5E\u6027\u89C1\u6587\u6863,\u8FD9\u662F\u57FA\u7840\u7EC4\u4EF6,\u53EA\u8981\u5957\u5728\u5916\u9762\u7528\u6765\u81EA\u52A8\u914D\u8272\u4F7F\u7528,\u9002\u5E94\u6697\u9ED1\u6548\u679C,\u5207\u4E0D\u53EF\u65E0\u9650\u5957\u7684\u592A\u591A,\u5F71\u54CD\u6027\u80FD."
        }),
        af: common_vendor.p({
          margin: [32, 0, 32, 32],
          shadow: 4,
          round: 2,
          color: "pink",
          linear: "right"
        }),
        ag: common_vendor.p({
          ["font-size"]: 24,
          _class: "font-weight-b",
          label: "\u4E0D\u540C\u7684\u65B9\u5411\uFF0C\u8FD8\u6709\u66F4\u591A\u4E30\u5BCC\u5C5E\u6027\u89C1\u6587\u6863,\u8FD9\u662F\u57FA\u7840\u7EC4\u4EF6,\u53EA\u8981\u5957\u5728\u5916\u9762\u7528\u6765\u81EA\u52A8\u914D\u8272\u4F7F\u7528,\u9002\u5E94\u6697\u9ED1\u6548\u679C,\u5207\u4E0D\u53EF\u65E0\u9650\u5957\u7684\u592A\u591A,\u5F71\u54CD\u6027\u80FD."
        }),
        ah: common_vendor.p({
          margin: [32, 0, 32, 32],
          shadow: 4,
          round: 2,
          color: "pink",
          linear: "right"
        }),
        ai: common_vendor.p({
          ["font-size"]: 24,
          _class: "font-weight-b",
          label: "\u4E0D\u540C\u7684\u65B9\u5411\uFF0C\u8FD8\u6709\u66F4\u591A\u4E30\u5BCC\u5C5E\u6027\u89C1\u6587\u6863,\u8FD9\u662F\u57FA\u7840\u7EC4\u4EF6,\u53EA\u8981\u5957\u5728\u5916\u9762\u7528\u6765\u81EA\u52A8\u914D\u8272\u4F7F\u7528,\u9002\u5E94\u6697\u9ED1\u6548\u679C,\u5207\u4E0D\u53EF\u65E0\u9650\u5957\u7684\u592A\u591A,\u5F71\u54CD\u6027\u80FD."
        }),
        aj: common_vendor.p({
          margin: [32, 0, 32, 32],
          shadow: 4,
          round: 2,
          color: "pink",
          linear: "right"
        }),
        ak: common_vendor.p({
          ["font-size"]: 24,
          _class: "font-weight-b",
          label: "\u4E0D\u540C\u7684\u65B9\u5411\uFF0C\u8FD8\u6709\u66F4\u591A\u4E30\u5BCC\u5C5E\u6027\u89C1\u6587\u6863,\u8FD9\u662F\u57FA\u7840\u7EC4\u4EF6,\u53EA\u8981\u5957\u5728\u5916\u9762\u7528\u6765\u81EA\u52A8\u914D\u8272\u4F7F\u7528,\u9002\u5E94\u6697\u9ED1\u6548\u679C,\u5207\u4E0D\u53EF\u65E0\u9650\u5957\u7684\u592A\u591A,\u5F71\u54CD\u6027\u80FD."
        }),
        al: common_vendor.p({
          margin: [32, 0, 32, 32],
          shadow: 4,
          round: 2,
          color: "pink",
          linear: "right"
        }),
        am: common_vendor.o(chooseaddress),
        an: common_vendor.p({
          block: true,
          color: "red",
          padding: [0, 10],
          label: "\u5FAE\u4FE1\u5BFC\u5165"
        }),
        ao: common_vendor.p({
          block: true,
          color: "green",
          padding: [0, 10],
          label: "\u65B0\u589E"
        }),
        ap: common_vendor.unref(_totalBarHeight) + "px",
        aq: common_vendor.sr(msg, "2596ba8e-66,2596ba8e-0", {
          "k": "msg"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/pages/member/address/list.nvue"]]);
wx.createPage(MiniProgramPage);
