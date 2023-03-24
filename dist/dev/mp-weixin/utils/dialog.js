"use strict";
const common_vendor = require("../common/vendor.js");
const confirm = ({ title, success, fail }) => {
  common_vendor.index.showModal({
    title: "\u786E\u8BA4\u4FE1\u606F",
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
    title: "\u52A0\u8F7D\u4E2D",
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
