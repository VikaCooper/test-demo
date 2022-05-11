import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
    path: '/',
    name: 'index',
    component: () => import('@/views/Collector')
}, {
    path: '/result',
    component: () => import('@/views/Result')
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
