import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Ripple from 'primevue/ripple';
import ToastService from 'primevue/toastservice';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/lara-light-teal/theme.css';

// primevue/resources/themes/md-light-indigo/theme.css

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ToastService);
app.use(PrimeVue, {
    ripple: true,
    zIndex: {
        modal: 1100,        //dialog, sidebar
        overlay: 1000,      //dropdown, overlaypanel
        menu: 1000,         //overlay menus
        tooltip: 1100       //tooltip
    }});
app.directive('ripple', Ripple);
//ユーザビリティてやつ
app.mount("#app");
