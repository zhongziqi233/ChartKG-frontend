<template>
  <el-col id="retrieval-container" :span="24">
    <el-row class="item" :style="{height: '16.25%'}">
      <el-col class="item-text" :span="6" >图表类型</el-col>
      <el-col class="item-content" :span="18">
        <el-checkbox v-model="barChecked" label="柱形图" />
        <el-checkbox v-model="lineChecked" label="折线图" />
        <el-checkbox v-model="pieChecked" label="饼状图" />
        <el-checkbox v-model="scatterChecked" label="散点图" />
      </el-col>
    </el-row>
    <el-row class="item" :style="{height: '16.25%'}">
      <el-col class="item-text" :span="6">关键字</el-col>
      <el-col class="item-content" :span="18">
        <el-input v-model="keywords" placeholder="输入关键字 使用空格分隔"/>
      </el-col>
    </el-row>
    <el-row class="item" :style="{height: '51.25%'}">
      <el-col class="item-text" :span="6">视觉见解</el-col>
      <el-col class="item-content" :span="18">
        <el-checkbox v-model="insightsCheckAll" :indeterminate="insightsChecked" @change="handleCheckAllChange" label="视觉见解" />
        <el-checkbox-group v-model="checkedInsights" @change="handleCheckedInsightsChange">
          <el-checkbox v-for="insight in insights" :key="insight.value" :label="insight.label" :value="insight.value"/>
        </el-checkbox-group>
      </el-col>
    </el-row>
    <el-row class="item" :style="{height: '16.25%'}">
      <el-col class="item-content" :span="24">
        <el-button color="#626aef" plain @click="retrievalStart" :style="{width: '75%', margin: '0 12.5%'}">检索</el-button>
      </el-col>
    </el-row>
  </el-col>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import { ref } from "vue";
import { toRaw } from '@vue/reactivity'
import axios from "axios";
import { useStore } from "vuex";
const store = useStore();

const barChecked = ref(true);
const lineChecked = ref(true);
const pieChecked = ref(true);
const scatterChecked = ref(true);

const keywords = ref("");

const insightsCheckAll = ref(false);
const insightsChecked = ref(false);
const checkedInsights = ref([]);

const insights = [
  { label: "OutstandingFirst", value: 'outstandingno1' },
  { label: "OutstandingSecond", value: 'outstandingno2' },
  { label: "OutstandingLast", value: 'outstandinglast' },
  { label: "上升趋势", value: 'trend increase' },
  { label: "下降趋势", value: 'trend decrease' },
  { label: "持平", value: 'evenness' },
  { label: "正相关", value: 'positiveCorrelation' },
  { label: "负相关", value: 'negativeCorrelation' },
  { label: "数据特征", value: 'attribution' },
  { label: "转折点", value: 'changePoint'},
  { label: "离群点", value: 'outlier'}
];

const handleCheckAllChange = (value) => {
  const insightsValues = insights.map(e => e.value);
  checkedInsights.value = value ? insightsValues : []
  console.log(value, checkedInsights.value)
  insightsChecked.value = false
}
const handleCheckedInsightsChange = (value) => {
  const checkedCount = value.length
  insightsCheckAll.value = checkedCount === insights.length
  insightsChecked.value = checkedCount > 0 && checkedCount < insights.length
}

const retrievalStart = () => {
  // 处理传参
  const data = {
    type: [],
    entity: keywords.value.split(" ").filter(word => word !== ""),
    encode: [],
    insight: toRaw(checkedInsights.value)
  }
  if (barChecked.value) { data.type.push("bar") }
  if (lineChecked.value) { data.type.push("line") }
  if (pieChecked.value) { data.type.push("pie") }
  if (scatterChecked.value) { data.type.push("scatter") }
  console.log(data)
  axios.post("api/chart_retrieval", data).then(response => {
    store.dispatch('searchResult/updateSearchResult', response.data.data);
  })
}
</script>

<style scoped>
#retrieval-container {
  height: 100%;
}
.item {
  border-bottom: 1px solid var(--el-border-color);
  justify-content: center;
  align-content: center;
  padding: auto;
  box-sizing: border-box;
  padding: 10px;
}
.el-checkbox {
  margin-right: 10px;
}
.el-checkbox ::v-deep .el-checkbox__label {
  padding-left: 5px;
}
.item-text, .item-content {
  justify-content: center;
  align-content: center;
  padding: auto;
}
.el-button {
  font-size: 18px;
  font-weight: bolder;
}
</style>