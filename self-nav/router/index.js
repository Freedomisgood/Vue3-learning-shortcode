import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../components/Home.vue"


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "Index",
            redirect: "/dashboard/index"
        },
        {
            path: "/dashboard",
            name: "Dashboard",
            // redirect: "/dashboard/index",
            component: Home,
            children: [
                {
                    path: "/dashboard/index",
                    name: "SubIndex",
                    component: ()=> import("../views/Hello.vue")
                },
                {
                    path: "/dashboard/statics",
                    name: "Statics",
                    component: () => import( /* webpackChunkName: "login" */'../views/Statics.vue'),
                },
                {
                    path: "/dashboard/logs",
                    name: "Logs",
                    component: () => import( /* webpackChunkName: "login" */'../views/Logs.vue'),
                },
            ]
        }
        
    ]
})

export default router