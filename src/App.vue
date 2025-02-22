<template>
  <el-row id="viewport">
    <el-col :span="5">
      <el-row :style="{height: '15%'}">
        <el-col :span="24">
          <SimpleCard title="文件上传">
            <ImageUpload/>
          </SimpleCard>
        </el-col>
      </el-row>
      <el-row  :style="{height: '85%'}">
        <el-col :span="24">
          <SimpleCard title="图表检索">

          </SimpleCard>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="10">
      <el-row :style="{height: '60%'}">
        <el-col :span="24">
          <SimpleCard title="检索结果">

          </SimpleCard>
        </el-col>
      </el-row>
      <el-row :style="{height: '40%'}">
        <el-col :span="24">
          <SimpleCard title="图表问答">

          </SimpleCard>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="9">
      <SimpleCard title="图谱展示">

      </SimpleCard>
    </el-col>
  </el-row>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import SimpleCard from "./components/SimpleCard.vue";
import ImageUpload from "./components/ImageUpload.vue";
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}
</style>

<style scoped>
#viewport {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
