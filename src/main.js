import { createApp } from 'vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store.js';
import routes from './router/routes'
import App from './App.vue';
    
const app = createApp(App);

app.use(store);
app.use(routes);
app.mount('#app');
