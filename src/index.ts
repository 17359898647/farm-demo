import { createApp } from 'vue';

import './style.css';
import App from './App.vue';
import { installRouter } from './router';

async function setupApp() {
  const app = createApp(App)
  const meta = document.createElement('meta')
  meta.name = 'naive-ui-style'
  document.head.appendChild(meta)
  await installRouter(app)
  app.mount('#app')
}

setupApp()
