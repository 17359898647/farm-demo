import dayjs from 'dayjs'
import { App } from 'vue'
import { createRouter, createWebHistory, Router } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

function setupRouterGuard(router: Router) {
  let startTime: dayjs.Dayjs
  router.beforeEach((to, from, next) => {
    startTime = dayjs()
    next();
  });

  router.beforeResolve((to, from, next) => {
    next();
  });

  router.afterEach((to, from) => {
    const endTime = dayjs()
    console.debug(`导航耗时: ${endTime.diff(startTime, 'ms')}ms`);
  });
}

export async function installRouter(app: App) {
  app.use(router)
  setupRouterGuard(router)
  await router.isReady()
  console.debug('router装载完成')
}
