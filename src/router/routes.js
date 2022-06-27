import {createRouter, createWebHistory} from 'vue-router';
import home from '../components/NascSectionBanner';
import news from '../components/NascSectionNews';
import notice from '../components/NascSectionNewsNotice';
import notfound from '../components/NascNotFound';

const router = createRouter({
    history: createWebHistory(),
    routes:[{
        path: '/',
        component: home
    },
    {
        path:'/news',
        alias: '/notices',
        component: news
    },
    {
        path: '/news/:idnotice',
        name: 'notices',
        component: notice
    },
    {
        path: '/:catchAll(.*)',
        component: notfound
    }
    ]
});

export default router;