import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export async function installRouter(app: App) {
  app.use(router)
  await router.isReady()
  console.log('router装载完成')
}
