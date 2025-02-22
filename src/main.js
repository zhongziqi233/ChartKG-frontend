import { createApp } from 'vue';
import App from './App.vue';
// element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// vuex
import store from './store';

const app = createApp(App);
app.use(ElementPlus);
app.use(store);
app.mount('#app');
