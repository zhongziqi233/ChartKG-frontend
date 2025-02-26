import { createApp } from 'vue';
import App from './App.vue';
// element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// vuex
import store from './store';
// axios
import api from './api/request.js';

const app = createApp(App);
app.use(ElementPlus);
app.provide("$axios", api);
app.use(store);
app.mount('#app');
