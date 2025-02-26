<template>
  <!-- 这里需要一个模板，让用户通过自己的输入来得到一条比较不错的检索语句，类似下面这种 -->
  <el-col :span="24">
    <el-input v-model="input1" style="width: 100%" placeholder="Please input">
      <template #prepend>Http://</template>
    </el-input>
    <el-input v-model="input2" style="width: 100%" placeholder="Please input">
      <template #append>.com</template>
    </el-input>
    <el-input v-model="input3" style="width: 100%" placeholder="Please input" class="input-with-select">
      <template #prepend>
        <el-select v-model="select1" placeholder="Select" style="width: 115px">
          <el-option label="Restaurant" value="1" />
          <el-option label="Order No." value="2" />
          <el-option label="Tel" value="3" />
        </el-select>
      </template>
      <template #append>
        <el-button :icon="Search" />
      </template>
    </el-input>
    <el-input v-model="input4" style="width: 100%" placeholder="Please input" class="input-with-select">
      <template #prepend>
        <el-button :icon="Search" />
      </template>
      <template #append>
        <el-select v-model="select2" placeholder="Select" style="width: 115px">
          <el-option label="Restaurant" value="1" />
          <el-option label="Order No." value="2" />
          <el-option label="Tel" value="3" />
        </el-select>
      </template>
    </el-input>
    <el-button @click="test"></el-button>
  </el-col>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import { ref } from 'vue';

import { Search } from '@element-plus/icons-vue';

const input1 = ref("")
const input2 = ref("")
const input3 = ref("")
const input4 = ref("")
const select1 = ref("")
const select2 = ref("")
</script>

<style scoped>
.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}
</style>