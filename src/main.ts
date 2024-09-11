import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import App from './App.vue'
import router from './router'
import { definePreset } from '@primevue/themes'
import ToastService from 'primevue/toastservice'

const app = createApp(App)

const AtlasPreset = definePreset(Aura, {
  cssLayer: {
    name: 'primevue',
    order: 'tailwind-base, primevue, tailwind-utilities'
  },
  semantic: {
    primary: {
      50: '{blue.50}',
      100: '{blue.100}',
      200: '{blue.200}',
      300: '{blue.300}',
      400: '{blue.400}',
      500: '{blue.500}',
      600: '{blue.600}',
      700: '{blue.700}',
      800: '{blue.800}',
      900: '{blue.900}',
      950: '{blue.950}'
    }
  }
})

app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: AtlasPreset
  }
})
app.use(ToastService)

app.mount('#app')
