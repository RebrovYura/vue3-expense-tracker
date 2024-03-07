import { createApp } from 'vue'
import components from './components/index.js'
import App from './App.vue'

import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import './assets/style.css'


const app = createApp(App)
app.use(Toast)

components.forEach(component => {
    app.component(component.name, component)
})

app.mount('#app')
