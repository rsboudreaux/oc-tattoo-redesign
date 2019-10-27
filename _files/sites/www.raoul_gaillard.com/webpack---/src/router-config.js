import Home from './spa/Home/Home.vue'
import NotFound from './spa/NotFound/NotFound.vue'
import Work from './spa/Work/Work.vue'
import About from './spa/About/About.vue'
import CaseStudy from './spa/CaseStudy/CaseStudy.vue'

export const routes = [{
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/work',
        name: 'work',
        component: Work,
        children: [{
            path: ':id',
            name: 'case-study',
            component: CaseStudy
        }]
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '*',
        name: 'all',
        component: NotFound
    }
]



// WEBPACK FOOTER //
// ./src/router-config.js