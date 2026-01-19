import { createRouter, createWebHistory } from 'vue-router'
import TodoListView from '../views/TodoListView.vue'
import About from '../views/About.vue'
const routes = [
    { path: '/', name: 'TodoList', component: TodoListView },{path: '/about',name: 'About',component: About,}
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router