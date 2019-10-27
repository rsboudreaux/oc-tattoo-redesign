import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import App from './App.vue'

import Router from 'vue-router'
import {
    routes
} from './router-config'

Vue.use(Router)

const router = new Router({
    routes: routes,
    mode: 'history',
})

Vue.use(VueAnalytics, {
    id: 'UA-96857336-1',
    router
})

const app = new Vue({
    router,
    render: h => h(App),
}).$mount('#app')



// WEBPACK FOOTER //
// ./src/main.js