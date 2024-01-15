<template>
  <!-- 总盒子 -->
  <div class="box1">
    <!-- 包含左右两部分，与底部分割 -->
    <div class="box2">
      <!-- 左半部分，切换界面 -->
      <div class="left">
        <div class="left-item">
          <!-- 实际内容 -->
        </div>
        <div class="left-item">

        </div>
        <div class="left-item">

        </div>
        <div class="left-item">

        </div>
      </div>
      <!-- 右半部分 -->
      <div class="right">
        <div class="right-item">
          <!-- 实际内容 -->
        </div>
        <div class="right-item">

        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="bottom">
      <div class="bottom-item time">
      </div>
      <div class="bottom-item">
      </div>
    </div>
    <!-- 视频 -->
    <video class="video" autoplay loop muted>
      <!-- 换成自己的地址 -->
      <source src="../../public/Red Dead Redemption 2 2023-12-28 13-21-08.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0);
</script>

<style scoped>
.box1 {
  margin: 0;
  display: flex;
  /* 纵向布局 */
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}

.box2 {
  margin: 0;
  display: flex;
  justify-content: space-between;
  opacity: 0.5;
  z-index: 1;
  height: 80%;
  width: 100%;
}

.left {
  text-align: left;
  display: flex;
  flex-direction: column;
  margin: 0;
  background-color: aqua;
  width: 7%;
  height: 100%;

}

.left-item {
  width: 100%;
  height: 18%;
  background-color: bisque;
  border: 1px solid black;
}

.right {
  text-align: left;
  margin: 0;
  display: flex;
  flex-direction: column;
  background-color: aqua;
  width: 15%;
  height: 100%;
}

.right-item {
  width: 100%;
  height: 50%;
  background-color: bisque;
  border: 1px solid black;
}

.bottom {
  text-align: left;
  opacity: 0.5;
  margin: 0;
  display: flex;
  /* 横向布局，调节元素分布 */
  justify-content: space-between;
  background-color: aqua;
  width: 100%;
  height: 20%;
}

.bottom-item {
  height: 100%;
  /* 底部调节大小 */
  width: 50%;
  background-color: bisque;
  border: 1px solid black;
}

.time {
  /* 底部调节大小 */
  width: 30%;
}

/* 取消控件，放在其他元素下层 */
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
}
</style>