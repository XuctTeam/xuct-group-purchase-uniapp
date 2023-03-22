"use strict";
const tmui_tool_theme_theme = require("../theme/theme.js");
const tmui_tool_lib_interface = require("./interface.js");
const custom_props = {
  _style: {
    type: [Array, String, Object],
    default: () => []
  },
  _class: {
    type: [Array, String],
    default: ""
  },
  color: {
    type: String,
    default: "primary"
  },
  followTheme: {
    type: [Boolean, String],
    default: false
  },
  dark: {
    type: [Boolean, String],
    default: false
  },
  followDark: {
    type: [Boolean, String],
    default: true
  },
  round: {
    type: [Number],
    default: 0
  },
  shadow: {
    type: [Number],
    default: 0
  },
  outlined: {
    type: [Boolean],
    default: false
  },
  border: {
    type: [Number],
    default: 0
  },
  borderStyle: {
    type: String,
    default: tmui_tool_lib_interface.borderStyle.solid
  },
  borderDirection: {
    type: String,
    default: tmui_tool_lib_interface.cssDirection.all
  },
  text: {
    type: [Boolean, String],
    default: false
  },
  transprent: {
    type: [Boolean, String],
    default: true
  },
  transparent: {
    type: [Boolean, String],
    default: true
  },
  linear: {
    type: String,
    default: ""
  },
  linearDeep: {
    type: String,
    default: "light"
  },
  linearColor: {
    type: [Array],
    default: () => []
  },
  isDisabledRoundAndriod: {
    type: [Boolean, String],
    default: false
  },
  blur: {
    type: Boolean,
    default: false
  },
  borderColor: {
    type: String,
    default: ""
  }
};
const computedDark = (props, tmcfg) => {
  const followDark = props.followDark;
  const dark = props.dark;
  const glboalDark = tmcfg.dark;
  if (followDark) {
    return glboalDark;
  }
  return dark;
};
const computedClass = (props) => {
  const _class = props._class;
  if (typeof _class == "string") {
    return _class;
  }
  if (Array.isArray(_class)) {
    return _class.join(" ");
  }
  return "";
};
const computedStyle = (props) => {
  const _style = props._style;
  if (typeof _style == "string") {
    let p = _style.split(";");
    let k = p.map((el) => {
      el = el.replace(";", "");
      let node = {};
      let idx = el.split(":");
      node[idx[0]] = idx[1];
      return node;
    });
    let kl = {};
    k.forEach((el) => {
      kl = { ...kl, ...el };
    });
    return kl;
  }
  if (typeof _style == "object" && !Array.isArray(_style)) {
    return _style;
  }
  if (typeof _style == "object" && Array.isArray(_style)) {
    let kl = {};
    _style.forEach((el) => {
      kl = { ...kl, ...el };
    });
    return kl;
  }
  return {};
};
const computedTheme = (props, dark, store) => {
  var _a;
  const color = props.color;
  const border = props.border;
  const shadow = props.shadow;
  const round = props.round;
  const outlined = props.outlined;
  const text = props.text;
  const borderStyle2 = props.borderStyle;
  const borderDirection = props.borderDirection;
  const linear = props.linear;
  const linearDeep2 = props.linearDeep;
  const blur = props.blur;
  var borderColor = (_a = props == null ? void 0 : props.borderColor) != null ? _a : "";
  var theme = new tmui_tool_theme_theme.theme.themeColors(store.colorList);
  if (tmui_tool_theme_theme.theme.isCssColor(color) && !theme.hasColors(color)) {
    theme = new tmui_tool_theme_theme.theme.themeColors(theme.add(color, color));
  }
  let defaultColorName = color || "primary";
  if ((props == null ? void 0 : props.followTheme) == true && store.color) {
    defaultColorName = store.color;
    borderColor = "";
  }
  let c = theme.getTheme({
    colorname: defaultColorName,
    dark,
    borderWidth: border,
    shadow: parseInt(String(shadow)),
    round: parseInt(String(round)),
    outlined: outlined ? true : false,
    text: text ? true : false,
    borderStyle: borderStyle2,
    borderDirection,
    linearDirection: linear,
    linearDeep: linearDeep2,
    blur,
    borderColor
  });
  return c;
};
exports.computedClass = computedClass;
exports.computedDark = computedDark;
exports.computedStyle = computedStyle;
exports.computedTheme = computedTheme;
exports.custom_props = custom_props;
