"use strict";
const tmui_tool_router_index = require("../router/index.js");
const tmuiconfigdefault = {
  autoDark: true,
  theme: {},
  themeConfig: {
    theme: {},
    globalFontSizeRatio: 1,
    dark: {
      cardcolor: "#0A0A0B",
      inputcolor: "#111112",
      disablecolor: "rgba(30, 30, 30, 1.0)",
      bodycolor: "rgb(5, 5, 5)",
      textDisableColor: "rgba(100, 100, 100, 1.0)"
    },
    component: {}
  },
  router: { useTmRouterAfter: tmui_tool_router_index.useTmRouterAfter, useTmRouterBefore: tmui_tool_router_index.useTmRouterBefore },
  custom: {}
};
exports.tmuiconfigdefault = tmuiconfigdefault;