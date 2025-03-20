<template>
  <el-col id="search-result-container" :span="24" :style="{height: '100%'}">
    <ImageCard v-for="item in searchResult.data" :key="item" :title="item" :img="`/api/get_chart_image/${item.split(' ')[0]}/${item.split(' ')[1]}`" />
  </el-col>
</template>

<script setup>
/* eslint-disable no-unused-vars, no-undef */
import { ref, watch } from "vue";
import { useStore } from 'vuex';

import ImageCard from "./ImageCard.vue";

const store = useStore();

const searchResult = ref(store.getters.searchResult);

watch(
  () => store.state.searchResult,
  (newVal) => {
    searchResult.value = newVal;
    console.log('状态更新:', newVal);
    console.log()
  },
  { deep: true }
)
</script>

<style scoped>
#search-result-container {
  height: 100%;
  overflow: auto;
}
#search-result-container::-webkit-scrollbar{
    width: 8px;
    height: 4px;
}
#search-result-container::-webkit-scrollbar-thumb{
    border-radius: 3px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #c7c4c4;
}
#search-result-container::-webkit-scrollbar-track {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2) inset;
 
}
#search-result-container::-webkit-scrollbar-corner {
    background: transparent;
}
</style>
