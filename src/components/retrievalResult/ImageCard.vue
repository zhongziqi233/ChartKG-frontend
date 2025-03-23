<template>
  <el-card v-if="selected" class="card-container" @click="HandleClick">
    <template #header>{{ title }}</template>
    <img :src="img" style="width: 100%" />
  </el-card>
  <el-card v-else class="card-container" style="background-color: aqua;">
    <template #header>{{ title }}</template>
    <img :src="img" style="width: 100%" />
  </el-card>
</template>

<script setup>
/* eslint-disable no-unused-vars, no-undef */
import { useStore } from 'vuex';
import { ref, watch } from 'vue';
const store = useStore();
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
const selected = ref(props.title != store.getters.selectedChart.data)
const HandleClick = () => {
  store.dispatch("selectedChart/updateSelectedChart", props.title)
}

watch(
  () => store.state.selectedChart,
  (newVal) => {
    selected.value = props.title != newVal.data
  },
  { deep: true }
)

</script>

<style scoped>
.card-container {
  margin: 2.5px;
  width: calc(50% - 7px);
  height: 240px;
  float: left;
}

.el-card ::v-deep .el-card__header {
  padding: 5px 20px;
}
.el-card ::v-deep .el-card__body {
  padding: 7.5px;
}
</style>