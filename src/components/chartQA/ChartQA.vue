<template>
  <el-col :span="24" :style="{height: '100%'}">
    <el-tabs v-model="QAType" type="border-card" class="QA-tabs" stretch="true">
      <!-- data comparison -->
      <el-tab-pane class="tab-content" label="数据比较" name="DC">
        <el-tag class="phrase-item phrase-item-tag" v-bind="tagType" :size="'large'" :effect="'light'">Question</el-tag>
        <el-input class="phrase-item" v-model="DCPhrase[1]" placeholder="">
          <template #prepend>{{ DCPhrase[0] }}</template>
          <template #append> {{ DCPhrase[2] }}</template>
        </el-input>
        <el-input class="phrase-item input-with-select" v-model="DCPhrase[3]" placeholder="">
          <template #append>
            <el-select v-model="DCPhrase[4]" :style="{width: '120px'}" placeholder="">
              <el-option v-for="DCOption in DCOptions" :key="DCOption" :label="DCOption" :value="DCOption" />
            </el-select>
          </template>
        </el-input>
        <el-input class="phrase-item" v-model="DCPhrase[6]" placeholder="">
          <template #prepend>{{ DCPhrase[5] }}</template>
          <template #append>{{ DCPhrase[7] }}</template>
        </el-input>
        <el-input class="phrase-item" v-model="DCPhrase[8]" placeholder="">
          <template #append>{{ DCPhrase[9] }}</template>
        </el-input>
        <el-button class="phrase-item" color="#626aef" plain @click="QAStart" :style="{width: '75%', marginTop: auto, margin: '30px 12.5% auto 12.5%'}">提问</el-button>
        <el-divider />
        <el-tag class="phrase-item phrase-item-tag" v-bind="tagType" :size="'large'" :effect="'light'">Answer</el-tag>
        <el-input class="phrase-item" v-model="DCAnswer" disabled :style="{cursor: 'default'}"></el-input>
      </el-tab-pane>
      <!-- visual encoding -->
      <el-tab-pane class="tab-content" label="视觉编码" name="VE">  
        <el-tag class="phrase-item phrase-item-tag" v-bind="tagType" :size="'large'" :effect="'light'" :style="{fontWeight: 'bolder'}">Question</el-tag>
        <el-input class="phrase-item" v-model="VEPhrase[1]" placeholder="">
          <template #prepend>{{ VEPhrase[0] }}</template>
          <template #append>{{ VEPhrase[2] }}</template>
        </el-input>
        <el-input class="phrase-item input-with-select" v-model="VEPhrase[3]" placeholder="">
          <template #append>
            <el-select v-model="VEPhrase[4]" :style="{width: '120px'}" placeholder="">
              <el-option v-for="VEOption in VEOptions" :key="VEOption" :label="VEOption" :value="VEOption" />
            </el-select>
          </template>
        </el-input>
        <el-button class="phrase-item" color="#626aef" plain @click="QAStart" :style="{width: '75%', marginTop: auto, margin: '104px 12.5% auto 12.5%'}">提问</el-button>
        <el-divider />
        <el-tag class="phrase-item phrase-item-tag" v-bind="tagType" :size="'large'" :effect="'light'">Answer</el-tag>
        <el-input class="phrase-item" v-model="VEAnswer" disabled :style="{cursor: 'default'}"></el-input>
      </el-tab-pane>
      <!-- visual insight -->
      <el-tab-pane class="tab-content" label="视觉见解" name="VI">
        <el-tag class="phrase-item phrase-item-tag" v-bind="tagType" :size="'large'" :effect="'light'" :style="{fontWeight: 'bolder'}">Question</el-tag>
        <div v-if="VIPhrase[0]=='Which'">
          <el-input class="phrase-item input-with-select" v-model="VIPhrase[1]" placeholder="">
            <template #prepend>
              <el-select v-model="VIPhrase[0]" :style="{width: '130px'}" placeholder="" @change="templateChange1">
                <el-option v-for="VIOption0 in VIOptions[0]" :key="VIOption0" :label="VIOption0" :value="VIOption0" />
              </el-select>
            </template>
            <template #append>
              {{ VIPhrase[2] }}
            </template>
          </el-input>
          <el-input class="phrase-item input-with-select" placeholder="" disabled>
            <template #prepend>
              <el-select v-model="VIPhrase[3]" :style="{width: '280px'}" placeholder="">
                <el-option v-for="VIOption3 in VIOptions[3]" :key="VIOption3" :label="VIOption3" :value="VIOption3" />
              </el-select>
            </template>
            <template #append>
              {{ VIPhrase[4] }}
            </template>
          </el-input>
        </div>
        <div v-else>
          <el-input class="phrase-item input-with-select" placeholder="" disabled>
            <template #prepend>
              <el-select v-model="VIPhrase[0]" :style="{width: '130px'}" placeholder="" @change="templateChange1">
                <el-option v-for="VIOption0 in VIOptions[0]" :key="VIOption0" :label="VIOption0" :value="VIOption0" />
              </el-select>
            </template>
            <template #append>
              <el-select v-model="VIPhrase[1]" :style="{width: '200px'}" placeholder="" @change="templateChange2">
                <el-option v-for="VIOption1 in VIOptions[1]" :key="VIOption1" :label="VIOption1" :value="VIOption1" />
              </el-select>
            </template>
          </el-input>
          <el-input class="phrase-item input-with-select" v-model="VIPhrase[3]" placeholder="">
            <template #prepend>
              {{ VIPhrase[2] }}
            </template>
            <template #append>
              {{ VIPhrase[4] }}
            </template>
          </el-input>
        </div>
        <el-button class="phrase-item" color="#626aef" plain @click="QAStart" :style="{width: '75%', margin: '104px 12.5% auto 12.5%'}">提问</el-button>
        <el-divider />
        <el-tag class="phrase-item phrase-item-tag" v-bind="tagType" :size="'large'" :effect="'light'">Answer</el-tag>
        <el-input class="phrase-item" v-model="VIAnswer" disabled :style="{cursor: 'default'}"></el-input>
      </el-tab-pane>

    </el-tabs>
  </el-col>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import { ref, computed } from 'vue';

const QAType = ref('DC')

const tagType = computed(() => {
  switch(QAType.value) {
    case 'DC':
      return { type: 'success' };
    case 'VE':
      return { type: 'warning' };
    case 'VI':
      return { type: 'primary' };
    default:
      return { type: 'info' };
  }
})

const DCOptions = ['more than', 'less than', 'equals'];
const DCPhrase = ref({
  0: 'Is the', 1: '', 2: 'of',
  3: '', 4: '',
  5: 'the', 6: '', 7: 'of',
  8: '', 9: '?',
})
const DCQuestion = ref('');
const DCAnswer = ref('');

const VEOptions = ['encode?', 'indicate?', 'represent?'];
const VEPhrase = ref({
  0: 'What does the', 1: '', 2: 'of the',
  3: '', 4: ''
});
const VEQuestion = ref('');
const VEAnswer = ref('');

const VIOptions = {
  0: ['Which', 'What is the'],
  1: ['trend', 'obvious visual insight'],
  2: ['of the', 'about'],
  3: ['Outstanding First', 'Outstanding Second', 'Outstanding Last'],
}

const VIPhrase = ref({
  0: 'Which',
  1: '',
  2: 'is',
  3: '',
  4: '?'
})

const templateChange1 = () => {
  if (VIPhrase.value[0] == "Which") { 
    VIPhrase.value = { 
      0: 'Which', 1: '', 2: 'is', 
      3: '', 4: '?'
    }
  } else {
    VIPhrase.value = {
      0: 'What is the', 1: '',
      2: '', 3: '', 4: '?'
    }
  }
}
const templateChange2 = () => {
  if (VIPhrase.value[1] == 'trend') {
    VIPhrase.value[2] = 'of the';
  } else {
    VIPhrase.value[2] = 'about';
  }
}

const QAStart = () => {

}
</script>

<style scoped>
.QA-tabs {
  height: 100%;
}
.QA-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  height: 100%;
}
.QA-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.QA-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}
.phrase-item {
  margin: 2.5px;
}
.phrase-item-tag {
  font-weight: bolder;
  margin-bottom: 10px;
}

.el-button {
  font-size: 18px;
  font-weight: bolder;
}

.el-divider {
  margin: 12px auto;
}
</style>