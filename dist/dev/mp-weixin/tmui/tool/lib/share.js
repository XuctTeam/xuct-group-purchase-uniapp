"use strict";
const common_vendor = require("../../../common/vendor.js");
const share = function(args = {}) {
  let defaultWxshareConfig = {
    ...args
  };
  const sapp = (args2 = {}) => {
    common_vendor.onShareAppMessage(() => {
      return { ...defaultWxshareConfig, ...args2 };
    });
  };
  const sTimeline = (args2 = {}) => {
    common_vendor.onShareTimeline((args3 = {}) => {
      return { ...defaultWxshareConfig, ...args3 };
    });
  };
  return {
    onShareAppMessage: sapp,
    onShareTimeline: sTimeline
  };
};
exports.share = share;
