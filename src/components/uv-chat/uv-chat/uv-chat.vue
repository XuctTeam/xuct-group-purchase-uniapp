<template>
  <view class="uv-chat" :style="chatStyle" :id="props.id">
    <view @click="onAvatarClick" class="avatar-view" :style="avatarStyle">
      <image :src="avatar" mode="aspectFill"></image>
    </view>
    <view class="msg">
      <view v-if="showNick" class="nick" :style="nickStyle"
        ><text>{{ nick }}</text></view
      >
      <slot name="content" :other="props.other" :content="props.content"></slot>
    </view>
  </view>
</template>
<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  id: {
    type: String,
    default: () => 'item-1'
  },
  me: {
    type: Boolean,
    default: () => false
  },
  avatar: {
    type: String,
    default: () => 'https://img2.baidu.com/it/u=2833484760,1116678162&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1668704400&t=f1a5caae1807a6c83625a8a28991e829'
  },
  nick: {
    type: String,
    default: () => '小辣椒'
  },
  nickColor: {
    type: String,
    default: () => '#aaa'
  },
  content: {
    type: String,
    default: () => '这是一条消息'
  },
  other: {
    type: Object,
    default: () => {
      return {}
    }
  },
  showNick: {
    type: Boolean,
    default: () => true
  }
})
const emits = defineEmits(['avatarClick', 'avatarClickDb'])
let avatarStyle = computed(() => {
  if (props.me) {
    return {
      order: 1
    }
  }
  return {
    order: 0
  }
})
let chatStyle = computed(() => {
  if (props.me) {
    return {
      'justify-content': 'flex-end'
    }
  }
  return {}
})
let nickStyle = computed(() => {
  let style = {
    color: props.nickColor
  }
  if (props.me) {
    style = {
      ...style,
      'text-align': 'end'
    }
  }

  return style
})

let lastAvatarClickTime = 0
const onAvatarClick = () => {
  lastAvatarClickTime += 1
  setTimeout(() => {
    if (lastAvatarClickTime == 1) {
      emits('avatarClick', props.other)
    }
    if (lastAvatarClickTime >= 2) {
      emits('avatarClickDb', props.other)
    }
    lastAvatarClickTime = 0
  }, 200)
}
</script>
<style scoped>
.uv-chat {
  display: flex;
  margin-bottom: 35rpx;
  flex-direction: row;
}

.uv-chat .avatar-view {
  font-size: 0px;
  order: 0;
}

.uv-chat .avatar-view image {
  width: 76rpx;
  height: 76rpx;
  border-radius: 14rpx;
}

.uv-chat .msg {
  display: flex;
  flex-direction: column;
  margin: 0px 10rpx;
}

.uv-chat .msg .nick {
  margin-bottom: 12rpx;
  font-size: 21rpx;
  color: #aaa;
}

.left {
  justify-content: flex-end;
}
</style>
