<template>
  <view class="ldsy-index-good-card-area">
    <view class="card-area-background" @click.stop="imageClick(item)">
      <!-- <view class="card-top flex-row-between bs-border-box">
        <view class="card-top-logo-merchant-name flex-row-left bs-border-box">
          <view class="merchant-name">{{ item.merchantName }}</view>
        </view>
      </view> -->
      <view class="card-back-img-box">
        <view class="card-back-img" :style="{ height: `${item.height}px` }" @click.stop="imageClick(item)">
          <image
            class="img"
            :class="!item.showImg ? 'img-hide' : ''"
            :src="imgErrorNum > 0 ? imgUrl : item.imgUrl"
            mode="aspectFill"
            @load="imgLoad(item)"
            @error="imgError(item)"
            v-show="item.showImg"
          ></image>
          <image class="default-img" :src="item.defaultImage" mode="aspectFill" v-if="!item.showImg && !item.showError"></image>
          <image class="error-img" :src="item.errorImage" mode="aspectFill" v-if="item.showError"></image>
        </view>
      </view>
      <view class="card-bottom flex-row-between">
        <!-- <view class="bottom-product-describe">{{ item.name }} </view>
        <view class="bottom-price">
          <view>￥{{ item.price }}</view>
        </view> -->
        <slot></slot>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup name="uv-waterfall-flow-item">
import { ref } from 'vue'
import { WaterfallItem } from '../common/interface/type'

const props = defineProps({
  item: {
    type: Object,
    default: () => {},
    required: false
  },
  columnType: {
    type: String,
    default: 'left',
    required: false
  },
  pathType: {
    type: String,
    default: 'index',
    required: false
  }
})

const emits = defineEmits<{
  (event: 'imgLoad', params: { columnType: string; item: WaterfallItem }): void
  (event: 'imgError', params: { columnType: string; item: WaterfallItem }): void
  (event: 'imageClick', params: { columnType: string; item: WaterfallItem }): void
}>()

const imgErrorNum = ref<number>(0)
const imgUrl = ref<string>('')

function imgLoad(item: any) {
  emits('imgLoad', { columnType: props.columnType, item })
}

function imgError(item: any) {
  //TODO因为是一条数据一个卡片，所以卡片内自定义临时路径存储没问题，自定义重试几次
  if (imgErrorNum.value < 5) {
    const temImgUrl = item.imgUrl
    imgUrl.value = ''
    imgErrorNum.value++
    //慎用异步，非常不友好，业务需求重试五次，后续找更好的解决方案吧
    setTimeout(() => {
      imgUrl.value = temImgUrl
    }, 50)
    return
  }
  emits('imgError', { columnType: props.columnType, item })
}

function imageClick(item: any) {
  emits('imageClick', { columnType: props.columnType, item })
}
</script>

<style lang="scss" scoped>
.ldsy-index-good-card-area {
  margin-bottom: 8px;
  .card-area-background {
    position: relative;
    padding: 0;
    margin: 0;
    background-color: #ffffff;
    border-radius: 16rpx;
    .card-top {
      height: 32px;
      line-height: 32px;
      overflow: hidden;
      width: 100%;
      padding: 16rpx;
      .card-top-logo-merchant-name {
        .merchant-name {
          width: 156rpx;
          padding-left: 8rpx;
          font-size: 22rpx;
          font-weight: 400;
          color: #999999;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
        }
      }
    }
    .card-back-img-box {
      position: relative;
      padding: 0;
      margin: 0;
      .card-back-img {
        position: relative;
        width: 100%;
        padding: 0;
        margin: 0;
        .img {
          width: 100%;
          height: 100%;
          border-radius: 4rpx;
          display: block;
          &-hide {
            display: none;
          }
        }
        .default-img {
          width: 100%;
          height: 100%;
          border-radius: 4rpx;
        }
        .error-img {
          width: 100%;
          height: 100%;
          border-radius: 4rpx;
          background: #f2f2f2
            url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAiAQMAAAAatXkPAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAAIZJREFUCNdlzjEKwkAUBNAfEGyCuYBkLyLuxRYW2SKlV1JSeA2tUiZg4YrLjv9PGsHqNTPMSAQuyAJgRDHSyvBPwtZoSJXakeJI9iuRLGDygdl6V0yKDtyMAeMPZySj8yfD+UapvRPj2JOwkyAooSV5IwdDjPdCPspe8LyTl9IKJvDETKKRv6vnlUasgg0fAAAAAElFTkSuQmCC)
            no-repeat center center;
        }
      }
    }

    .card-bottom {
      height: auto;
      min-height: 50rpx;
      width: 100%;
      padding: 16rpx;
      overflow: hidden;
      box-sizing: border-box;
      line-height: 30rpx;
      .bottom-product-describe {
        height: 34rpx;
        font-size: 28rpx;
        font-weight: 500;
        color: #333333;
        line-height: 34rpx;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
      }
      .bottom-price {
      }
    }
  }
}
</style>
