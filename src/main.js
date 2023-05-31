import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Carousel3d, Slide } from 'vue-carousel-3d';
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(Carousel3d)
app.mount('#app')


