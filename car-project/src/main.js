/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
import axios from 'axios'
axios.defaults.url = "http://localhost:8000"
axios.defaults.baseURL = axios.defaults.url + "/api/v1/"


// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
