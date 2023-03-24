"use strict";
const propsdetail = {
  width: {
    type: Number,
    default: 0
  },
  height: {
    type: Number,
    default: 600
  },
  loadingTexts: {
    type: Array,
    default: () => ["\u4E0B\u62C9\u5237\u65B0", "\u677E\u624B\u5237\u65B0", "\u6B63\u5728\u5237\u65B0", "\u5237\u65B0\u5B8C\u6210"]
  },
  maxBarHeight: {
    type: Number,
    default: 120
  },
  refreshTimeout: {
    type: Number,
    default: 1e3 * 5
  },
  modelValue: {
    type: [Boolean],
    default: null
  },
  defaultValue: {
    type: Boolean,
    default: false
  },
  loadBarHeight: {
    type: Number,
    default: 120
  },
  bottomValue: {
    type: [Boolean],
    default: null
  }
};
exports.propsdetail = propsdetail;
