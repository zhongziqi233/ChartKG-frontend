<template>
  <el-col id="chartDom" :span="24" :style="{height: '100%'}"></el-col>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

import * as echarts from 'echarts';

let chartInstance = null;

const graph = ref();
graph.value = {
    "nodes": [
        {"id": "0","name": "Myriel","symbolSize": 5,"x": -266.82776,"y": 299.6904,"value": 28.685715,"category": 0},
        {"id": "1","name": "Napoleon","symbolSize": 5,"x": -418.08344,"y": 446.8853,"value": 4,"category": 1},
        {"id": "2","name": "MlleBaptistine","symbolSize": 5,"x": -212.76357,"y": 245.29176,"value": 9.485714,"category": 2}
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

onMounted(async () => {
  await nextTick();
  chartInstance = echarts.init(document.getElementById('chartDom'));
  const option = {
    title: {
      text: 'Test title',
      top: 'bottom',
      left: 'right'
    },
    tooltip: {},
    legend: [
      {
        data: graph.value.categories.map(function (a) {
          return a.name;
        })
      }
    ],
    series: [
      {
        type: 'graph',
        layout: 'force',
        data: graph.value.nodes,
        links: graph.value.links,
        categories: graph.value.categories,
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