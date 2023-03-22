"use strict";
const services_request = require("../services/request.js");
const saveUserInfo = (phone, nickname) => {
  return services_request.instance.put("/api/v1/user", {
    phone,
    nickname
  });
};
exports.saveUserInfo = saveUserInfo;
