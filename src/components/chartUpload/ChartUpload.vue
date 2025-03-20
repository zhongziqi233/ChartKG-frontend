<template>
  <el-row :style="{height: '100%', borderBottom: 'solid 1px var(--el-border-color)'}">
    <el-col :span="12" align="center" justify='center' :style="{margin: '10px auto'}">
      <el-upload ref="uploadFilesRef" :auto-upload="false" :show-file-list="false" :http-request="uploadFile" :accept="'.png, .jpeg, .jpg, .gif, .bmg'" :before-upload="checkFileType">
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
</template>

<script setup>
/* eslint-disable no-unused-vars */
import { ref } from 'vue';
import { Upload } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus'
import axios from 'axios';

const preprocessPercentage = ref(0);
const uploadFilesRef = ref();

const submitUpload = () => {
  uploadFilesRef.value.submit();
}
const uploadFile = (param) => {
  let fileObj = param.file
  let form = new FormData()
  form.append("fileToUpload", fileObj)
  console.log(form)
  console.log(form.get("fileToUpload"))

  axios.post("/api/chart_upload", form, { headers: {'content-type': 'multipart/form-data'} })
    .then(response => {
      ElMessage({
        message: '图片上传成功',
        type: 'success',
      })
    })
    .finally(()=>{
      uploadFilesRef.value.clearFiles();
    })
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