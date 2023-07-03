import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'

import App from './App.vue'
import router from './router'
import { markRaw } from 'vue'
import './assets/style.css'
import ToastPlugin from 'vue-toast-notification'
// Import one of the available themes
import 'vue-toast-notification/dist/theme-default.css'
import VueGapi from 'vue-gapi'

const app = createApp(App)
const pinia = createPinia()
// adapt this based on where your router is

app.use(VueGapi, {
  apiKey: 'AIzaSyDh2DOxmfQspNMbRRwP3nIhZgLlIe0XrN8',
  clientId: '578680759656-5d3ttdnask83oodkca7pv6qs99snc2p7.apps.googleusercontent.com',
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
  scope: 'https://www.googleapis.com/auth/calendar'
})

app.use(pinia)
app.use(router)

pinia.use(({ store }) => {
  store.router = markRaw(router)
  store.$toast = app.config.globalProperties.$toast
})

app.use(ToastPlugin, {
  // One of the options
  position: 'top'
})

app.use(vue3GoogleLogin, {
  clientId: '578680759656-5d3ttdnask83oodkca7pv6qs99snc2p7.apps.googleusercontent.com'
})

app.mount('#app')
