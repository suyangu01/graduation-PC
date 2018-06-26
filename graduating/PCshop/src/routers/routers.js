import Vue from 'vue'
import Router from 'vue-router'

import main from '../views/main.vue'

import publish from '../views/publish.vue'
import home from  '../views/home.vue'
import login from  '../views/login.vue'
import register from  '../views/register.vue'

import categroy from '../views/categroy.vue'
import detail from '../views/detail.vue'

import notFount from '../views/404.vue'

Vue.use(Router)

const routes = [
    {
        path: '/',
        component: main,
        name: '导航一',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            {path: '/home', name: 'home', component: home},
            {path: '/categroy_list/:id', name: 'categroy', component: categroy},
            {path: '/detail/:id', name: 'detail', component: detail},
        ]
    },
    {path: '/publish', name: 'publish', component: publish},
    {path: '/login', name: 'login', component: login},
    {path: '/register', name: 'register', component: register},
    {path: '/*', name: '404', component: notFount}
]
export default routes
