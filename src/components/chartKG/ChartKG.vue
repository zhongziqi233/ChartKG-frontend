<template>
  <el-col id="chartDom" :span="24" :style="{height: '100%'}"></el-col>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';
const store = useStore();

import * as echarts from 'echarts';

let chartInstance = null;

const graph = ref();
graph.value = {
    "nodes": [
        {"id": "0","name": "Myriel","symbolSize": 5,"x": -266.82776,"y": 299.6904,"value": 28.685715,"category": "A"},
        {"id": "1","name": "Napoleon","symbolSize": 5,"x": -418.08344,"y": 446.8853,"value": 4,"category": "B"},
        {"id": "2","name": "MlleBaptistine","symbolSize": 5,"x": -212.76357,"y": 245.29176,"value": 9.485714,"category": "C"}
    ],
    "links": [
        {"source": "1","target": "0"},
        {"source": "2","target": "0"}
    ],
    "categories": [
        {"name": "A"},
        {"name": "B"},
        {"name": "C"}
    ]
}

graph.value.nodes.forEach(function (node) {
  node.symbolSize = 5;
});

watch(
  () => store.state.selectedChart,
  (newVal) => {
    axios.get(`/api/get_chart_KG/${newVal.data.split(" ")[0]}/${newVal.data.split(" ")[1]}`).then(response => {
      const nodes = []
      const links = []
      const categories = []
      for (let n of response.data.nodes) {
        nodes.push({"id": `${n.id}`, "name": `${n.name}`, "category": `${n.type}`})
        if (!categories.find((value) => { return value.name == n.type})) {
          categories.push({"name": `${n.type}`})
        }
      }
      for (let e of response.data.edges) {
        links.push({"source": `${e.source}`, "target": `${e.target}`, "category": `${e.type}`})
      }
      graph.value = { "nodes": nodes, "links": links, "categories": categories }
    })
  },
  { deep: true },
  () => graph,
)

watch(graph, (newVal) => {
  console.log(newVal)
  chartInstance = echarts.init(document.getElementById('chartDom'));
  const option = {
    title: {
      text: store.getters.selectedChart.data,
      top: 'bottom',
      left: 'right'
    },
    tooltip: {},
    legend: [
      { data: newVal.categories.map(function (a) { return a.name }) }
    ],
    series: [
      {
        type: 'graph',
        layout: 'force',
        data: newVal.nodes,
        links: newVal.links,
        categories: newVal.categories,
        roam: true,
        label: {
          position: 'right'
        },
        force: {
          repulsion: 100
        }
      }
    ]
  };
  chartInstance.setOption(option);
});

onUnmounted(() => {
  if (chartInstance != null && chartInstance.dispose) {
    chartInstance.dispose();
  }
});

</script>

<style scoped>
</style>