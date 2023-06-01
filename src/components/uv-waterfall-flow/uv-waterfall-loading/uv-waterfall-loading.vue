<!--
 * @Author: Derek Xu
 * @Date: 2023-06-01 13:23:18
 * @LastEditors: Derek Xu
 * @LastEditTime: 2023-06-01 15:40:48
 * @FilePath: \xuct-group-purchase-uniapp\src\components\uv-waterfall-flow\uv-waterfall-loading\uv-waterfall-loading.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by 楚恬商行, All Rights Reserved. 
-->
<template>
  <view class="uv-waterfall-loading">
    <slot>
      <view class="uv-waterfall-loading-content" v-if="loading">
        <image :src="loadingIcon" class="uv-waterfall-loading-indicator"></image>
        <text class="uv-waterfall-loading-text">{{ props.loadingText }}</text>
      </view>
      <uv-waterfall-divider v-if="!loading && finished">{{ props.finishedText }}</uv-waterfall-divider>
    </slot>
  </view>
</template>

<script lang="ts" setup name="uv-waterfall-loading">
import { loadingIcon } from '../common/filters/index'
import uvWaterfallDivider from '../uv-waterfall-divider/uv-waterfall-divider.vue'

// const emit = defineEmits(['loading'])
const props = defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  loadingText: {
    type: String,
    default: ''
  },

  finished: {
    type: Boolean,
    default: () => false
  },

  finishedText: {
    type: String,
    default: ''
  }
})

// function onLoading(e) {
//   emit('loading', e)
// }
</script>

<style scoped>
.uv-waterfall-loading {
  width: 750rpx;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.uv-waterfall-loading-content {
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.uv-waterfall-loading-indicator {
  width: 20px;
  height: 20px;
  /* #ifndef APP-NVUE */
  animation: loading-H5 1s 0s step-end infinite;
  /* #endif */
}
.uv-waterfall-loading-text {
  margin-left: 8px;
  color: grey;
  font-size: 28rpx;
}

.uv-waterfall-loading-divider {
  position: relative;
  text-align: center;
}
.uv-waterfall-loading-divider:before,
.uv-waterfall-loading-divider:after {
  content: '';
  width: 40%;
  height: 1px;
  position: absolute;
  top: 50%;
}
.uv-waterfall-loading-divider:before {
  background: -webkit-linear-gradient(right, #666, #eee);
  background: -o-linear-gradient(left, #666, #eee);
  background: -moz-linear-gradient(left, #666, #eee);
  background: linear-gradient(to left, #666, #eee);
  left: 2px;
}
.uv-waterfall-loading-divider:after {
  background: -webkit-linear-gradient(left, #666, #eee);
  background: -o-linear-gradient(right, #666, #eee);
  background: -moz-linear-gradient(right, #666, #eee);
  background: linear-gradient(to right, #666, #eee);
  right: 2px;
}

/* #ifndef APP-NVUE */
@keyframes loading-H5 {
  0% {
    transform: rotate(0deg);
  }
  8% {
    transform: rotate(30deg);
  }
  16% {
    transform: rotate(60deg);
  }
  24% {
    transform: rotate(90deg);
  }
  32% {
    transform: rotate(120deg);
  }
  40% {
    transform: rotate(150deg);
  }
  48% {
    transform: rotate(180deg);
  }
  56% {
    transform: rotate(210deg);
  }
  64% {
    transform: rotate(240deg);
  }
  73% {
    transform: rotate(270deg);
  }
  82% {
    transform: rotate(300deg);
  }
  91% {
    transform: rotate(330deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/* #endif */
</style>
