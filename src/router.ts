import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home.vue';
import MasterPage from '@/components/master-page.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: MasterPage,
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: Home
                },
                {
                    path: 'services',
                    name: 'services',
                    component: () => import('@/views/services.vue')
                },
                {
                    path: 'location',
                    name: 'location',
                    component: () => import('@/views/location.vue')
                },
                {
                    path: 'contact',
                    name: 'contact',
                    component: () => import('@/views/contact.vue')
                }
            ]
        }
    ]
});
