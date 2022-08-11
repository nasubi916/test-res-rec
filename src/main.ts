import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Ripple from 'primevue/ripple';
import ToastService from 'primevue/toastservice';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/lara-light-blue/theme.css';

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ToastService);
app.use(PrimeVue, {ripple: true});
app.directive('ripple', Ripple);
//ユーザビリティてやつ
app.mount("#app");
