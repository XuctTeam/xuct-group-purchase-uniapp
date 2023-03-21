"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (tmIcon + tmNavbar + tmCarousel + tmImage + tmText + tmGridItem + tmGrid + tmSheet + tmWaterfallItem + tmWaterfall + tmFloatButton + tmApp)();
}
const tmApp = () => "../../tmui/components/tm-app/tm-app.js";
const tmText = () => "../../tmui/components/tm-text/tm-text.js";
const tmWaterfall = () => "../../tmui/components/tm-waterfall/tm-waterfall.js";
const tmFloatButton = () => "../../tmui/components/tm-float-button/tm-float-button.js";
const tmWaterfallItem = () => "../../tmui/components/tm-waterfall-item/tm-waterfall-item.js";
const tmNavbar = () => "../../tmui/components/tm-navbar/tm-navbar.js";
const tmCarousel = () => "../../tmui/components/tm-carousel/tm-carousel.js";
const tmSheet = () => "../../tmui/components/tm-sheet/tm-sheet.js";
const tmGrid = () => "../../tmui/components/tm-grid/tm-grid.js";
const tmGridItem = () => "../../tmui/components/tm-grid-item/tm-grid-item.js";
const tmIcon = () => "../../tmui/components/tm-icon/tm-icon.js";
const tmImage = () => "../../tmui/components/tm-image/tm-image.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const wall = common_vendor.ref(null);
    const imglist = common_vendor.ref([]);
    const fabActions = [
      { icon: "tmicon-shopping-cart-fill", color: "red", linear: "top", label: "\u8D2D\u7269\u8F66" },
      { icon: "tmicon-user-fill", color: "blue", label: "\u6211\u7684" }
    ];
    common_vendor.ref([
      {
        path: "https://gw.alicdn.com/imgextra/i4/O1CN01XCiY1B1px9ivHkDGm_!!6000000005426-2-tps-183-144.png_q90.jpg",
        title: "\u5929\u732B\u65B0\u54C1",
        count: "\u70ED\u9500"
      },
      {
        path: "https://gw.alicdn.com/imgextra/i3/O1CN01FgQFp81spmBXqQMtA_!!6000000005816-2-tps-183-144.png_q90.jpg",
        title: "\u4ECA\u65E5\u7206\u6B3E\u4ECA\u65E5\u7206\u6B3E\u4ECA\u65E5\u7206\u6B3E",
        count: 0
      },
      {
        path: "https://gw.alicdn.com/imgextra/i1/O1CN01tsk5OY1q0MUo5PJga_!!6000000005433-2-tps-183-144.png_q90.jpg",
        title: "\u5929\u732B\u56FD\u9645",
        count: 0
      },
      {
        path: "https://gw.alicdn.com/imgextra/i2/O1CN01yK3Cxn1sTnAx1fOjq_!!6000000005768-2-tps-183-144.png_q90.jpg",
        title: "\u98DE\u732A\u65C5\u884C",
        count: 0
      },
      {
        path: "https://gw.alicdn.com/imgextra/i1/O1CN01iZIGkz1URSOUdRHqS_!!6000000002514-2-tps-183-144.png_q90.jpg",
        title: "\u5929\u732B\u8D85\u5E02",
        count: 0
      },
      {
        path: "https://gw.alicdn.com/imgextra/i4/O1CN01VuRfwH1muSbsJFxoM_!!6000000005014-2-tps-183-144.png_q90.jpg_.webp",
        title: "\u51AC\u5965\u516C\u76CA",
        count: 0
      },
      {
        path: "https://gw.alicdn.com/imgextra/i2/O1CN01yK3Cxn1sTnAx1fOjq_!!6000000005768-2-tps-183-144.png_q90.jpg",
        title: "\u98DE\u732A\u65C5\u884C",
        count: 99
      },
      {
        path: "https://gw.alicdn.com/imgextra/i1/O1CN01iZIGkz1URSOUdRHqS_!!6000000002514-2-tps-183-144.png_q90.jpg",
        title: "\u5929\u732B\u8D85\u5E02",
        count: 0
      },
      {
        path: "https://gw.alicdn.com/imgextra/i4/O1CN01VuRfwH1muSbsJFxoM_!!6000000005014-2-tps-183-144.png_q90.jpg_.webp",
        title: "\u51AC\u5965\u516C\u76CA",
        count: 0
      },
      {
        path: "https://gw.alicdn.com/imgextra/i4/O1CN01XCiY1B1px9ivHkDGm_!!6000000005426-2-tps-183-144.png_q90.jpg",
        title: "\u5929\u732B\u65B0\u54C1",
        count: 6
      },
      {
        path: "https://gw.alicdn.com/imgextra/i3/O1CN01FgQFp81spmBXqQMtA_!!6000000005816-2-tps-183-144.png_q90.jpg",
        title: "\u4ECA\u65E5\u7206\u6B3E",
        count: 0
      },
      {
        path: "https://gw.alicdn.com/imgextra/i1/O1CN01tsk5OY1q0MUo5PJga_!!6000000005433-2-tps-183-144.png_q90.jpg",
        title: "\u5929\u732B\u56FD\u9645",
        count: 0
      },
      {
        path: "https://gw.alicdn.com/imgextra/i2/O1CN01yK3Cxn1sTnAx1fOjq_!!6000000005768-2-tps-183-144.png_q90.jpg",
        title: "\u98DE\u732A\u65C5\u884C",
        count: 0
      },
      {
        path: "https://gw.alicdn.com/imgextra/i1/O1CN01iZIGkz1URSOUdRHqS_!!6000000002514-2-tps-183-144.png_q90.jpg",
        title: "\u5929\u732B\u8D85\u5E02",
        count: 0
      }
    ]);
    const listimg = [
      "https://picsum.photos/200/300?id=43335",
      "https://picsum.photos/200/300?id=433",
      "https://picsum.photos/200/300?id=439",
      "https://picsum.photos/200/300?id=459"
    ];
    common_vendor.onLoad(() => {
      imglist.value = [
        {
          id: "123",
          img: "https://gw.alicdn.com/bao/uploaded/i2/1848622920/O1CN018zBHJ91XRPJ4bHW78_!!0-item_pic.jpg_320x320q90.jpg",
          text: "\u6768\u5927\u7237\u9EBB\u8FA3\u9999\u80A0\u814A\u80A0500\u514B\u56DB\u5DDD\u7279\u4EA7\u70DF\u718F\u8089\u519C\u5BB6\u81EA\u5236\u5DDD\u5473\u70E4\u814A\u8089\u8FA3\u80A0",
          price: "49",
          num: "3000+\u4EBA\u8D2D\u4E70"
        },
        {
          id: "222",
          img: "https://gw.alicdn.com/imgextra/i4/2207613550143/O1CN01hPpOvy1CvXQdlZLeC_!!2207613550143-0-alimamacc.jpg_q90.jpg",
          text: "",
          price: "200",
          num: "3000+\u4EBA\u8D2D\u4E70"
        },
        {
          id: "333",
          img: "https://gw.alicdn.com/bao/uploaded/i4/14498052/O1CN01pa6ScB29LrgfkRp8V_!!14498052.jpg_320x320q90.jpg",
          text: "\u5E26\u76D6 \u9178\u5976\u676F\u4E00\u6B21\u6027\u5851\u6599\u5E03\u4E01\u676F\u80D6\u80D6pp\u679C\u51BB\u676F\u6155\u65AF\u751C\u54C1\u676F\u53CC\u76AE\u5976100\u5957",
          price: "12.8",
          num: "1500+\u4EBA\u8D2D\u4E70"
        },
        {
          id: "444",
          img: "https://gw.alicdn.com/bao/uploaded/i4/14498052/O1CN01pa6ScB29LrgfkRp8V_!!14498052.jpg_320x320q90.jpg",
          text: "\u5E26\u76D6 \u9178\u5976\u676F\u4E00\u6B21\u6027\u5851\u6599\u5E03\u4E01\u676F\u80D6\u80D6pp\u679C\u51BB\u676F\u6155\u65AF\u751C\u54C1\u676F\u53CC\u76AE\u5976100\u5957",
          price: "12.8",
          num: "1500+\u4EBA\u8D2D\u4E70"
        },
        {
          id: "555",
          img: "https://gw.alicdn.com/bao/uploaded/i4/1026973813/O1CN014Kirba1e2OrHg7gwN_!!1026973813.jpg_320x320q90.jpg",
          text: "\u5E26\u76D6 \u9178\u5976\u676F\u4E00\u6B21\u6027\u5851\u6599\u5E03\u4E01\u676F\u80D6\u80D6pp\u679C\u51BB\u676F\u6155\u65AF\u751C\u54C1\u676F\u53CC\u76AE\u5976100\u5957",
          price: "12.8",
          num: "1500+\u4EBA\u8D2D\u4E70"
        },
        {
          id: "666",
          img: "https://gw.alicdn.com/imgextra/i3/23844911/O1CN01N1UxMS1m9Hs6gGu6E_!!23844911-0-alimamacc.jpg",
          text: "",
          price: "200",
          num: "3000+\u4EBA\u8D2D\u4E70"
        },
        {
          id: "777",
          img: "https://gw.alicdn.com/bao/uploaded/i4/2418392409/O1CN01zT4JbA1TfMoU30Uub_!!2418392409.jpg_320x320q90.jpg",
          text: "50\u679A\u6302\u8033\u5496\u5561\u6EE4\u888B\u65E5\u672C\u6750\u8D28\u624B\u51B2\u5496\u5561\u6EE4\u7EB8\u5496\u5561\u7C89\u6EE4\u888B\u6302\u8033\u5496\u5561\u888B\u5305\u90AE",
          price: "12.8",
          num: "1500+\u4EBA\u8D2D\u4E70"
        },
        {
          id: "888",
          img: "https://gw.alicdn.com/bao/uploaded/i2/6000000001207/O1CN016TztFg1Kmqqrtarb0_!!6000000001207-0-picassoopen.jpg_320x320q90.jpg",
          text: "\u5E26\u76D6 \u9178\u5976\u676F\u4E00\u6B21\u6027\u5851\u6599\u5E03\u4E01\u676F\u80D6\u80D6pp\u679C\u51BB\u676F\u6155\u65AF\u751C\u54C1\u676F\u53CC\u76AE\u5976100\u5957",
          price: "12.8",
          num: "1500+\u4EBA\u8D2D\u4E70"
        },
        {
          id: "999",
          img: "https://gw.alicdn.com/bao/uploaded/i3/2200531292142/O1CN01gFUdOw1Rh4vjN44sB_!!0-item_pic.jpg_320x320q90.jpg",
          text: "\u5E26\u76D6 \u9178\u5976\u676F\u4E00\u6B21\u6027\u5851\u6599\u5E03\u4E01\u676F\u80D6\u80D6pp\u679C\u51BB\u676F\u6155\u65AF\u751C\u54C1\u676F\u53CC\u76AE\u5976100\u5957",
          price: "12.8",
          num: "1500+\u4EBA\u8D2D\u4E70"
        }
      ];
    });
    function click(e) {
      debugger;
    }
    function floatClick(e) {
      common_vendor.index.navigateTo({
        url: "/pages/member/index/index"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          _class: "px-32",
          name: "tmicon-plus"
        }),
        b: common_vendor.p({
          title: "\u56E2\u5230\u5BB6",
          color: "pink",
          linear: "right",
          hideHome: true,
          blur: true
        }),
        c: common_vendor.p({
          autoplay: true,
          margin: [0, 16],
          align: _ctx.right,
          round: 3,
          width: 700,
          height: 300,
          list: listimg
        }),
        d: common_vendor.p({
          width: 90,
          height: 90,
          src: "http://wdl.jianbaizhan.com//dl-mall-shopping/static/images/index/nav-ico01.png"
        }),
        e: common_vendor.p({
          _class: "text-overflow-1",
          ["font-size"]: 24,
          label: "\u9650\u65F6\u62A2\u8D2D"
        }),
        f: common_vendor.p({
          height: 140
        }),
        g: common_vendor.p({
          width: 90,
          height: 90,
          src: "http://wdl.jianbaizhan.com//dl-mall-shopping/static/images/index/nav-ico02.png"
        }),
        h: common_vendor.p({
          _class: "text-overflow-1",
          ["font-size"]: 24,
          label: "\u9650\u65F6\u62A2\u8D2D"
        }),
        i: common_vendor.p({
          color: "orange",
          height: 140
        }),
        j: common_vendor.p({
          width: 90,
          height: 90,
          src: "http://wdl.jianbaizhan.com//dl-mall-shopping/static/images/index/nav-ico03.png"
        }),
        k: common_vendor.p({
          _class: "text-overflow-1",
          ["font-size"]: 24,
          label: "\u9650\u65F6\u62A2\u8D2D"
        }),
        l: common_vendor.p({
          color: "green",
          height: 140
        }),
        m: common_vendor.p({
          width: 680,
          col: 4
        }),
        n: common_vendor.p({
          margin: [16, 16],
          shadow: 4,
          round: 4
        }),
        o: common_vendor.f(imglist.value, (item, index, i0) => {
          return {
            a: "d9ab5c1c-17-" + i0 + "," + ("d9ab5c1c-16-" + i0),
            b: common_vendor.p({
              label: item.text,
              _class: "text-overflow-2"
            }),
            c: "d9ab5c1c-18-" + i0 + "," + ("d9ab5c1c-16-" + i0),
            d: "d9ab5c1c-19-" + i0 + "," + ("d9ab5c1c-16-" + i0),
            e: common_vendor.p({
              color: "orange",
              _class: "px-10",
              ["font-size"]: 36,
              label: item.price
            }),
            f: "d9ab5c1c-20-" + i0 + "," + ("d9ab5c1c-16-" + i0),
            g: common_vendor.p({
              color: "grey",
              ["font-size"]: 24,
              label: item.num
            }),
            h: item.id,
            i: "d9ab5c1c-16-" + i0 + ",d9ab5c1c-15",
            j: common_vendor.p({
              img: item.img,
              id: item.id
            })
          };
        }),
        p: common_vendor.p({
          color: "orange",
          ["font-size"]: 24,
          label: "\xA5"
        }),
        q: common_vendor.o(($event) => click),
        r: common_vendor.o(click),
        s: common_vendor.sr(wall, "d9ab5c1c-15,d9ab5c1c-0", {
          "k": "wall"
        }),
        t: common_vendor.p({
          width: 718
        }),
        v: common_vendor.o(floatClick),
        w: common_vendor.p({
          actions: fabActions,
          actionsPos: "top",
          position: "br",
          btn: {
            icon: "tmicon-plus",
            linear: "bottom",
            color: "pink"
          }
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/workspace_xuct/xuct-group-purchase/xuct-group-purchase-uniapp/src/pages/index/index.nvue"]]);
wx.createPage(MiniProgramPage);
