import { createApp } from 'vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store.js';
import App from './App.vue';
    
const app = createApp(App);

app.use(store);
app.mount('#app');
