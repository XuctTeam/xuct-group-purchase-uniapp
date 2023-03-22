"use strict";
const common_vendor = require("../common/vendor.js");
const router_interceptLogin = require("./interceptLogin.js");
function setupRouter(app) {
  app.use(common_vendor.Ct);
  router_interceptLogin.bindInterceptLogin();
  common_vendor.Et(async (to, from, next) => {
    next();
  });
  common_vendor.St((to, from) => {
  });
  common_vendor.It((to, from) => {
    common_vendor.index.showToast({
      title: `${to.url} \u4E0D\u5B58\u57281111`,
      icon: "none"
    });
  });
}
exports.setupRouter = setupRouter;
