import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () =>
            import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: () =>
            import(
                /* webpackChunkName: "SignUpPage" */ '../views/SignUpPage.vue'
            ),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
