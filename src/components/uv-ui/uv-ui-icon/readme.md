---
outline: false
---

# 将 woff2 的字体下载下来工具可用自己进行文件 iconfont 的资源

-   https://gitee.com/yll10243/iconfont-to-svg-download.git

# Icon 图标

ayi-icon 提供了一套常用的图标集合，继续更新中

# 参数

| 参数       | 说明           | 类型            | 可选值 | 默认值 |
| :--------- | :------------- | :-------------- | :----- | :----- |
| name       | 图标类名       | string          |        |        |
| class-name | 完整图标类名   | string          |        |        |
| size       | 尺寸           | string / number |        | 30     |
| color      | 颜色,如#ffffff | string          |        |        |

# 示例

## 基础用法

右侧的 icon 复制名称赋值给 name 即可

```
<ayi-icon name="search"></ayi-icon>
```

## 大小

```
<ayi-icon name="search" :size="40"></ayi-icon>
```

## 颜色

设置 color="primary" 为主色

```
<ayi-icon name="search" color="red"></ayi-icon>
```
