import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import axios from 'axios'

import VueRouter from 'vue-router'
import routes from './routers/routers'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.prototype.$axios = axios;

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    if(to.path == '/login' && from.path == '/home') {
        sessionStorage.removeItem('user');
    }
    let user = JSON.parse(sessionStorage.getItem('user'));
    if(!user && to.path != '/login') {
        next({path: '/login'});
    }
    else {
        next();
    }
})
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
.$mount('#app')
