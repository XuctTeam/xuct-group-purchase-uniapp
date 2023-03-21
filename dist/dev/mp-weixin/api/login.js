"use strict";
const services_request = require("../services/request.js");
const loginByCode = (code) => {
  return services_request.instance.post("/login/code", {
    code
  });
};
exports.loginByCode = loginByCode;
