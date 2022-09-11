<script setup lang="ts">
import { ref } from 'vue';
import SpeedDial from 'primevue/speeddial';
import TabMenu from 'primevue/tabmenu';
import { RouterView } from 'vue-router';
import Combo from '@/rec/Combo.vue';
import ComboJp from '@/rec/combo/ComboJp.vue';
import ComboGeo from '@/rec/combo/ComboGeo.vue'
import ComboMath2 from '../rec/combo/ComboMath2.vue'
import ComboMathB from '../rec/combo/ComboMathB.vue'
import ComboPhy from '../rec/combo/ComboPhy.vue'
import ComboCrature from '../rec/combo/ComboCrature.vue'
import ComboEn from '../rec/combo/ComboEn.vue'
import ComboInfoIndus from '../rec/combo/ComboInfoIndus.vue'
import ComboHealth from '../rec/combo/ComboHealth.vue'
import ComboAlgo from '../rec/combo/ComboAlgo.vue'

const radars = ref([
    {
        label: 'firstMid',
        to: '/rfm'
    },
    {
        label: 'firstFinal',
        to: '/rff'
    },
    {
        label: 'secondMid',
        to: '/rsm'
    },
    {
        label: 'secondFinal',
        to: '/rsf'
    },
    {
        label: 'thirdFinal',
        to: '/rtf'
    }
]);

const shares = ref([
    {
        label: 'link',
        icon: 'pi pi-link',
    },
    {
        label: 'twitter',
        icon: 'pi pi-twitter',
        command: () => {
            window.location.href = 'https://github.com/nasubi916'

        }
    },
    {
        label: 'photo',
        icon: 'pi pi-image',
    },
    {
        label: 'instagram',
        icon: 'pi pi-instagram',
    },
])

</script> 

<template>
    <!-- <SpeedDial :model="shares" class="bottom-right" type="quarter-circle" direction="up-left"
    :radius=95 @click=bbb() showIcon="pi pi-link" /> -->


    <div class="stage">
        <div>
            <TabMenu :model="radars" />
            <RouterView />
        </div>
        <div class="combo">
            <div>
                <ComboJp />
            </div>
            <div>
                <ComboGeo />
            </div>
            <div>
                <ComboMath2 />
            </div>
            <div>
                <ComboMathB />
            </div>
            <div>
                <ComboPhy />
            </div>
            <div>
                <ComboCrature />
            </div>
            <div>
                <ComboEn />
            </div>
            <div>
                <ComboInfoIndus />
            </div>
            <div>
                <ComboHealth />
            </div>
            <div>
                <ComboAlgo />
            </div>
        </div>
    </div>

</template>