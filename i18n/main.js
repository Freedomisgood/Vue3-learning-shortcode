import { createApp } from 'vue'
import App from './App.vue'
// import VueI18n from "vue-i18n"
import "./assets/style.scss"
import i18n from "./i18n/index.js"


createApp(App)
    .use(i18n)
    .mount('#app')
