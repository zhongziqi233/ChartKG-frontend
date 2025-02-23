<template>
  <el-card class="card-container">
    <template #header>{{ title }}</template>
    <img :src="img" style="width: 100%" />
  </el-card>
</template>

<script setup>
/* eslint-disable no-unused-vars, no-undef */
const props = defineProps({
    title: {
        type: String,
        default: "",
    },
    img: {
      type: String,
      default: "../assets/image_fail.png",
    }
})
</script>

<style scoped>
.card-container {
  margin: 2.5px;
  width: calc(25% - 7px);
  height: 150;
  float: left;
}

.el-card ::v-deep .el-card__header {
  padding: 5px 20px;
}
.el-card ::v-deep .el-card__body {
  padding: 7.5px;
}
</style>