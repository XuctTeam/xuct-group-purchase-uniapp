"use strict";
const services_request = require("../services/request.js");
const bannerList = () => {
  return services_request.instance.get("/api/v1/banner/list");
};
exports.bannerList = bannerList;
