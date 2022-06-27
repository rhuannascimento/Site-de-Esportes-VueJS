import {createRouter, createWebHistory} from 'vue-router';
import home from '../components/NascSectionBanner';
import news from '../components/NascSectionNews'
import notice from '../components/NascSectionNewsNotice'

const router = createRouter({
    history: createWebHistory(),
    routes:[{
        path: '/',
        component: home
    },
    {
        path:'/news',
        component: news
    },
    {
        path: '/news/:idnotice',
        component: notice
    }
    ]
});

export default router;