import loadingIconSrc from '/static/images/loading.gif'
export const loadingIcon = loadingIconSrc

/**
 * 处理数字
 */
// 四舍五入取整  Math.round
export const mathRound = (val, point = 0) => {
  const num = +val
  const conversionNum = Math.round(num * Math.pow(10, point))
  return conversionNum / Math.pow(10, point) || 0
}

/**
 * 获取屏幕宽度
 */
export function getScreenWidth() {
  return uni.getSystemInfoSync().screenWidth
}

export function isArray(value: any) {
  return Array.isArray(value)
}
