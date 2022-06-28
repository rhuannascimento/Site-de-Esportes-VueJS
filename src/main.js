import { createApp } from 'vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store.js';
import routes from './router/routes'
import App from './App.vue';
    
const app = createApp(App);


/* Gobal guards -> realiza um verificação em todas as rotas da aplicação
routes.beforeEach((to, from, next) => {

    console.log(to, from);

    next();

})

routes.afterEach(() => {

    console.log('Render OK');


})
*/

app.use(store);
app.use(routes);
app.mount('#app');
