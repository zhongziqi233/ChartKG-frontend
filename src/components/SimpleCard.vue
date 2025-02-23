<template>
  <el-col class="card-container">
    <el-row class="card-title" :style="{height: '30px'}">
      <el-col class="card-title-text" :span="24" align='center' justify='center'>{{ title }}</el-col>
    </el-row>
    <el-row style="height: calc(100% - 30px)">
      <el-col class="slot-content" :span="24">
        <slot></slot>
      </el-col>
    </el-row>
  </el-col>
</template>
<script setup>
/* eslint-disable no-unused-vars,no-undef */

const props = defineProps({
    title: {
        type: String,
        default: "",
    },
})
</script>
<style scoped>
.card-title {
  background-color: aliceblue;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
.card-title-text {
  font-weight: bolder;
  font-size: 20px;
  margin: auto;
}
.card-container {
  width: calc(100% - 5px);
  height: calc(100% - 5px);
  margin: 2.5px;
  border-radius: 2.5px;
  border: 1px aliceblue solid;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
.slot-content {
  height: 100%;
}
</style>