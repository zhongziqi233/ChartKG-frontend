<template>
  <el-col :span="24" :style="{height: '100%'}">
    <el-row :style="{height: '50%', borderBottom: 'solid 1px var(--el-border-color)'}">
      <el-col :span="12" align="center" justify='center' :style="{margin: '10px auto'}">
        <el-upload ref="uploadFilesRef" action="#" :auto-upload="false">
          <template #trigger>
            <el-button class="ml-3" type="success" plain :style="{fontWeight: 'bold'}">选择文件</el-button>
          </template>
        </el-upload>
      </el-col>
      <el-col :span="12" align="center" justify='center' :style="{margin: '10px auto'}">
        <div class="el-upload el-upload--text">
          <el-button class="ml-3" type="primary" plain @click="submitUpload" :style="{fontWeight: 'bold'}">
            上传到服务器<el-icon class="el-icon--right"><Upload/></el-icon>
          </el-button>
        </div>
      </el-col>
    </el-row>
    <el-row :style="{height: '50%'}">
      <el-col :span="24" align="center" justify='center' :style="{margin: 'auto', fontWeight: 'bold', padding: '10px'}">
        处理进度
        <el-progress :percentage="preprocessPercentage" :text-inside="true" :stroke-width="16"></el-progress>
      </el-col>
    </el-row>
  </el-col>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import { ref } from 'vue';
import { Upload } from '@element-plus/icons-vue';

const preprocessPercentage = ref(0);
const uploadFilesRef = ref();

const submitUpload = () => {
  uploadFilesRef.value.submit();
}
</script>

<style>
.el-upload {
  width: 50%;
  margin: auto;
}
</style>

<style scoped>
</style>