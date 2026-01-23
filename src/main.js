import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'
import { appear } from './directives/appear'

const head = createHead()

const app = createApp(App)
app.directive('appear', appear)
app.use(router).use(head).mount('#app')

