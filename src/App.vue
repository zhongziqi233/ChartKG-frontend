<template>
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
</template>

<script setup>
/* eslint-disable no-unused-vars */
import SimpleCard from "./components/SimpleCard.vue";
import ChartSearch from "./components/chartRetrieval/ChartRetrieval.vue";
import ChartUpload from "./components/chartUpload/ChartUpload.vue";
import SearchResult from "./components/retrievalResult/RetrievalResult.vue";
import ChartQA from "./components/chartQA/ChartQA.vue";
import ChartKG from "./components/chartKG/ChartKG.vue";
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
.components-slot {
  height: 100%;
}
</style>
