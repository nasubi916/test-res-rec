import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Result from "../views/Result.vue";
import Record from "../views/Record.vue";


const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path: "/about",
			name: "about",
			component: About,
		},
		{
			path: "/result",
			name: "result",
			component: Result,
		},
		{
			path: "/record",
			name: "record",
			component: Record,
		},
	],
});

export default router;
