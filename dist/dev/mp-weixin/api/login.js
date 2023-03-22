"use strict";
const services_request = require("../services/request.js");
const loginByCode = (code) => {
  return services_request.instance.post("/api/v1/login", {
    code
  });
};
exports.loginByCode = loginByCode;
