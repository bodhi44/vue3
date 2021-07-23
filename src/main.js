import { createApp } from 'vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'

import request from './utils/request'

const app = createApp(App)
app.config.globalProperties.$request = request

app.use(ElementPlus)
app.use(router)

app.mount('#app')
