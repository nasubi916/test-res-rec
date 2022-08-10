import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Result from "@/views/Result.vue";
import Record from "@/views/Record.vue";
import AboutUs from "@/views/AboutUs.vue";
import TestField from "@/views/TestField.vue";

import FirstMid from "@/res/FirstMid.vue";
import FirstFinal from "@/res/FirstFinal.vue";
import SecondMid from "@/res/SecondMid.vue";
import SecondFinal from "@/res/SecondFinal.vue";
import ThirdFinal from "@/res/ThirdFinal.vue";

import RadarFM from "@/rec/radar/RadarFM.vue";
import RadarFF from "@/rec/radar/RadarFF.vue";
import RadarSM from "@/rec/radar/RadarSM.vue";
import RadarSF from "@/rec/radar/RadarSF.vue";
import RadarTF from "@/rec/radar/RadarTF.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/result/:aa",
      name: "Result",
      component: Result,
      children: [
        {
          path: "",
          component: FirstMid,
        },
        {
          path: "/fm",
          component: FirstMid,
        },
        {
          path: "/ff",
          component: FirstFinal,
        },
        {
          path: "/sm",
          component: SecondMid,
        },
        {
          path: "/sf",
          component: SecondFinal,
        },
        {
          path: "/tf",
          component: ThirdFinal,
        },
      ],
    },
    {
      path: "/record/:id",
      name: "Record",
      component: Record,
      children: [
        {
          path: "",
          component: RadarFM,
        },
        {
          path: "/rff",
          component: RadarFF,
        },
        {
          path: "/sm",
          component: RadarSM,
        },
        {
          path: "/rsf",
          component: RadarSF,
        },
        {
          path: "/rtf",
          component: RadarTF,
        },
      ],
    },
    {
      path: "/us",
      name: "AboutUs",
      component: AboutUs,
    },
    {
      path: "/test",
      name: "Test",
      component: TestField,
    },
  ],
});

export default router;
