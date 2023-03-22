"use strict";
const common_vendor = require("../common/vendor.js");
const store_user = require("../store/user.js");
const config_env = require("../config/env.js");
const { BASE_API_URL } = config_env.ENV_CONFIG;
const upload = (filePath, formData, callback) => {
  const store = store_user.useUserHook();
  const token = store.getToken;
  common_vendor.index.uploadFile({
    url: BASE_API_URL + "/api/v1/user/avatar/upload",
    filePath,
    name: "file",
    formData,
    header: {
      satoken: "Bearer " + token
    },
    success: (uploadFileRes) => {
      console.log(uploadFileRes.data);
      if (callback instanceof Function) {
        callback({
          code: 0,
          data: JSON.parse(uploadFileRes.data).data
        });
      }
    },
    fail: (message) => {
      callback({
        code: -1,
        data: message
      });
    }
  });
};
exports.upload = upload;
