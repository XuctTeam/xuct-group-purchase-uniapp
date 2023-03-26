"use strict";
const common_vendor = require("../common/vendor.js");
const confirm = ({ title, success, fail }) => {
  common_vendor.index.showModal({
    title: "确认信息",
    content: title,
    success: function(res) {
      if (res.confirm) {
        success();
      } else if (res.cancel) {
        fail();
      }
    }
  });
};
const loading = () => {
  common_vendor.index.showLoading({
    title: "加载中",
    mask: true
  });
};
const hideLoading = () => {
  common_vendor.index.hideLoading();
};
const message = ({ title, icon }) => {
  common_vendor.index.showToast({
    title,
    icon
  });
};
exports.confirm = confirm;
exports.hideLoading = hideLoading;
exports.loading = loading;
exports.message = message;
