"use strict";
const services_request = require("../services/request.js");
const saveUserInfo = (phone, nickname) => {
  return services_request.instance.put("/api/v1/user", {
    phone,
    nickname
  });
};
const userAddressList = () => {
  return services_request.instance.get("/api/v1/address/list");
};
const saveUserAddress = (address) => {
  return services_request.instance.post("/api/v1/address", {
    ...address
  });
};
const getUserAddress = (id) => {
  return services_request.instance.get("/api/v1/address", { id });
};
const deleteUserAddress = (id) => {
  return services_request.instance.delete("/api/v1/address?id=" + id);
};
exports.deleteUserAddress = deleteUserAddress;
exports.getUserAddress = getUserAddress;
exports.saveUserAddress = saveUserAddress;
exports.saveUserInfo = saveUserInfo;
exports.userAddressList = userAddressList;
