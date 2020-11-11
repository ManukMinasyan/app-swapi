import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router' // <---
import api from './plugins/api'


let app = createApp(App).use(router);

app.use(api, {
    default: 'v1',
    resources: [
        {
            name: 'v1',
            baseUrl: '/api',
        },
    ],
})

app.mount('#app')
