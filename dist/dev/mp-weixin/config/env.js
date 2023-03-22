"use strict";
const config__env_dev = require("./.env.dev.js");
let ENV_VAR = {
  BASE_API_URL: ""
};
{
  ENV_VAR = config__env_dev.dev;
}
const ENV_CONFIG = ENV_VAR;
exports.ENV_CONFIG = ENV_CONFIG;
