import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Menu from './components/Memu.vue'
import Admin from './components/Admin.vue'
import About from './components/about/About.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

// 二级路由
import History from './components/about/History'
import Contact from './components/about/Contact'
import OrderingGuide from './components/about/OrderingGuide'
import Delivery from './components/about/Delivery'

// 三级路由
import Person from './components/about/contact/Person'
import Phone from './components/about/contact/Phone'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'homeLink',
            components: {
                default: Home,
                history: History,
                orderingGuide: OrderingGuide,
                delivery: Delivery,
            }
        },
        {path: '/menu', name: 'menuLink', component: Menu},
        {path: '/admin', name: 'adminLink', component: Admin},
        {
            path: '/about',
            name: 'aboutLink',
            redirect: '/contact',
            component: About,
            children: [ // url不会自动嵌套,设置redirect属性可以默认跳转
                {path: '/about/history', name: 'historyLink', component: History}, // url='/about/history'
                {
                    path: '/contact',
                    name: 'contactLink',
                    redirect: '/phone',
                    component: Contact,
                    children: [
                        {path: '/phone', name: 'phoneLink', component: Phone},
                        {path: '/person', name: 'personLink', component: Person},
                    ]
                }, // url='/contact'
                {path: '/orderingGuide', name: 'orderingGuideLink', component: OrderingGuide},
                {path: '/delivery', name: 'deliveryLink', component: Delivery}
            ]
        },
        {path: '/login', name: 'loginLink', component: Login},
        {path: '/register', name: 'registerLink', component: Register},
        {path: '*', redirect: '/'},
    ]
})
