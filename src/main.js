import { createApp } from 'vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'

import axios from 'axios'
import config from './config/index'

axios
  .get(config.mockApi + '/list')
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })

const app = createApp(App)
app.use(ElementPlus)
app.use(router)

app.mount('#app')
