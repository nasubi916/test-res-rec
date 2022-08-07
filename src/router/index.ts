import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Result from "../views/Result.vue";
import Record from "../views/Record.vue";
import AboutUs from "@/views/AboutUs.vue";


const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "Home",
			component: Home,
		},
		{
			path: "/about",
			name: "About",
			component: About,
		},
		{
			path: "/result",
			name: "Result",
			component: Result,
		},
		{
			path: "/record",
			name: "Record",
			component: Record,
		},
		{
			path: '/us',
			name: 'AboutUs',
			component: AboutUs,
		},
	],
});

export default router;
