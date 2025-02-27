<template>
  <el-watermark :font="waterMarkConfig.font" :content="waterMarkConfig.content" :z-index="waterMarkConfig.zIndex" :gap="waterMarkConfig.gap">
    <el-row id="viewport">
      <el-col class="outer-col" :span="5">
        <el-row :style="{height: '15%'}">
          <el-col class="components-slot" :span="24">
            <SimpleCard title="文件上传">
              <ChartUpload/>
            </SimpleCard>
          </el-col>
        </el-row>
        <el-row  :style="{height: '35%'}">
          <el-col class="components-slot" :span="24">
            <SimpleCard title="图表检索">
              <ChartSearch/>
            </SimpleCard>
          </el-col>
        </el-row>
        <el-row :style="{height: '50%'}">
          <el-col class="components-slot" :span="24">
            <SimpleCard title="图表问答">
              <ChartQA/>
            </SimpleCard>
          </el-col>
        </el-row>
      </el-col>
      <el-col class="components-slot" :span="6">
        <el-row :style="{height: '100%'}">
          <el-col class="components-slot" :span="24" :style="{height: '100%'}">
            <SimpleCard title="检索结果">
              <SearchResult/>
            </SimpleCard>
          </el-col>
        </el-row>
      </el-col>
      <el-col class="components-slot" :span="13">
        <SimpleCard title="图谱展示">
          <ChartKG/>
        </SimpleCard>
      </el-col>
    </el-row>
  </el-watermark>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import { reactive } from 'vue';

import SimpleCard from "./components/SimpleCard.vue";
import ChartSearch from "./components/chartRetrieval/ChartRetrieval.vue";
import ChartUpload from "./components/chartUpload/ChartUpload.vue";
import SearchResult from "./components/retrievalResult/RetrievalResult.vue";
import ChartQA from "./components/chartQA/ChartQA.vue";
import ChartKG from "./components/chartKG/ChartKG.vue";

const waterMarkConfig = reactive({
  content: ['', '赵正卿', ''],
  font: {
    color: 'rgba(0, 0, 0, .1)',
    fontSize: 30,
  },
  zIndex: -1,
  gap: [250, 250]
})

</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
  font-family: '微软雅黑';
  font-weight: bolder;
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
.components-slot {
  height: 100%;
}
.outer-col {
  height: 100%;
}
</style>
