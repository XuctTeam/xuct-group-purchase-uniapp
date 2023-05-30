<!-- eslint-disable @typescript-eslint/no-this-alias -->
<template>
  <view class="ldsy-waterfall-flow">
    <view class="waterfall-flow-item-left">
      <view class="waterfall-flow-item" v-for="item in columnLeft" :key="item.id">
        <view class="item-card">
          <ldsy-index-good-card
            :item="item"
            :columnType="'left'"
            :pathType="pathType"
            @imgLoad="imgLoad"
            @imgError="imgError"
            @imageClick="clickItem"
          ></ldsy-index-good-card>
        </view>
      </view>
    </view>
    <view class="waterfall-flow-item-right">
      <view class="waterfall-flow-item" v-for="item in columnRight" :key="item.id">
        <view class="item-card">
          <ldsy-index-good-card
            :item="item"
            :columnType="'right'"
            :pathType="pathType"
            @imgLoad="imgLoad"
            @imgError="imgError"
            @imageClick="clickItem"
          ></ldsy-index-good-card>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import ldsyIndexGoodCard from '@/components/uv-waterfall-flow/ldsy-index-good-card/ldsy-index-good-card.vue'
import { mathRound, getScreenWidth } from '../common/filters/index.js'

export default {
  name: 'ldsy-waterfall-flow',
  props: {
    productList: {
      type: Array,
      default: [],
      required: true
    },
    pathType: {
      //TODO不同页面用不同卡片，这个组件只做分发，
      type: String,
      default: 'index',
      required: false
    }
  },
  data() {
    return {
      //分为左右两列，这样就可以同时渲染两列
      columnLeft: [],
      columnRight: [],
      leftHight: 0,
      rightHight: 0
    }
  },
  watch: {
    productList: {
      deep: true,
      immediate: true,
      handler(newValue, oldValue) {
        let that = this
        that.distributeItem(newValue)
      }
    }
  },
  methods: {
    //TODO第三版 根据长度做循环 减少操作
    distributeItem(newValue) {
      let that = this
      const allLength = newValue.length
      const currentLength = that.columnLeft.length + that.columnRight.length
      const diffLength = allLength - currentLength
      for (let i = 0; i < diffLength; i++) {
        const itemLength = that.columnLeft.length + that.columnRight.length
        const item = newValue[itemLength]
        const itemHeight = mathRound((mathRound(item.height, 0) * getScreenWidth() * 0.44) / 750, 0)
        const pushItem = that.handleItem(item, itemLength, itemHeight)
        that.calcItem(pushItem, itemHeight + 8 + 32 + 30) //TODO这个是关键的，根据自己的业务去设置，图片的高度（itemHeight）+头部的高度（32）+底部的高度（30）+每一个卡片的margin-bottom（8）
      }
      that.calcHeight()
    },
    //TODO处理每一条数据，可以在这里里面做oss图片的大小样式裁剪等等，这个是和页面卡片有关，也可以放到卡片中做
    handleItem(item, itemLength, itemHeight) {
      return {
        id: item.id,
        width: item.width,
        height: itemHeight,
        defaultImage: item.defaultImage,
        imgUrl: item.imgUrl,
        showImg: false,
        showError: false,
        index: itemLength,
        merchantName: item.merchantName,
        name: item.name,
        price: item.price
      }
    },
    //TODO判断是左列还是右列
    calcItem(pushItem, calcHeight) {
      let that = this
      const calcVal = that.leftHight > that.rightHight
      if (calcVal) {
        that.rightHight = mathRound(that.rightHight + calcHeight, 0)
        that.columnRight.push(pushItem)
        return
      }
      that.leftHight = mathRound(that.leftHight + calcHeight, 0)
      that.columnLeft.push(pushItem)
    },
    //TODO计算高度
    calcHeight() {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      let that = this
      const temLeft = mathRound(that.leftHight, 0)
      const temRight = mathRound(that.rightHight, 0)
      if (temLeft === temRight) {
        that.leftHight = 0
        that.rightHight = 0
        return
      }
      that.leftHight = temLeft > temRight ? mathRound(temLeft - temRight, 0) : 0
      that.rightHight = temRight > temLeft ? mathRound(temRight - temLeft, 0) : 0
    },
    //TODO点击回调事件
    clickItem(item) {
      this.$emit('clickItem', item)
    },
    //TODO处理图片加载成功
    imgLoad(data) {
      debugger
      let that = this
      if (data.columnType === 'left') {
        const index = that.columnLeft.findIndex((p) => p.id === data.item.id)
        if (index > -1) {
          that.columnLeft[index].showImg = true
        }
      }
      if (data.columnType === 'right') {
        const index = that.columnRight.findIndex((p) => p.id === data.item.id)
        if (index > -1) {
          that.columnRight[index].showImg = true
        }
      }
    },
    //TODO处理图片加载失败
    imgError(data) {
      let that = this
      if (data.columnType === 'left') {
        const index = that.columnLeft.findIndex((p) => p.id === data.item.id)
        if (index > -1) {
          that.columnLeft[index].showError = true
        }
      }
      if (data.columnType === 'right') {
        const index = that.columnRight.findIndex((p) => p.id === data.item.id)
        if (index > -1) {
          that.columnRight[index].showError = true
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ldsy-waterfall-flow {
  display: flex;
  justify-content: space-between;
  width: 100%;
  .waterfall-flow-item-left {
    width: calc(50% - 8rpx);
    .waterfall-flow-item {
      width: 100%;
      .item-card {
        width: 100%;
      }
    }
  }
  .waterfall-flow-item-right {
    width: calc(50% - 8rpx);
    .waterfall-flow-item {
      width: 100%;
      .item-card {
        width: 100%;
      }
    }
  }
}
</style>
