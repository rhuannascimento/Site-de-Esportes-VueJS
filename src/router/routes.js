import {createRouter, createWebHistory} from 'vue-router';
import home from '../components/NascSectionBanner';
import news from '../components/NascSectionNews'

const router = createRouter({
    history: createWebHistory(),
    routes:[{
        path: '/',
        component: home
    },
    {
        path:'/news',
        component: news
    }
    ]
});

export default router;