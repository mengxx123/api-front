import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/Home'], resolve)
const About = resolve => require(['@/views/About'], resolve)

const Api = resolve => require(['@/views/Api'], resolve)
const ApiDetail = resolve => require(['@/views/ApiDetail'], resolve)

const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

const APP_NAME = '云设'

let routes = [
    {
        path: '/',
        component: Home,
        meta: {
            // title: '云设 API 首页'
            title: '首页'
        }
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: '关于'
        }
    },
    {
        path: '/apis',
        component: Api,
        meta: {
            title: '接口大全'
        }
    },
    {
        path: '/apis/:id',
        component: ApiDetail,
        meta: {
            title: '接口详情'
        }
    },
    {
        path: '/404',
        component: Error404,
        meta: {
            title: '页面找不到了'
        }
    },
    {
        path: '*',
        redirect: '/404'
    }
]

function getTitle(title) {
    if (title) {
        return title
    } else {
        return APP_NAME
    }
}

let router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.title) {
        document.title = getTitle(to.meta.title)
    } else {
        document.title = getTitle()
    }
    next()
})

export default router
