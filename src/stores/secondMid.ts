import { defineStore } from "pinia";
import { ref } from "vue";

export const secondMidStore = defineStore("secondMid", () => {
  const Japanese = ref(Math.floor(Math.random()*101));
  const JapaneseAv = ref(Math.floor(Math.random()*101));

  const Geography = ref(Math.floor(Math.random()*101));
  const GeographyAv = ref(Math.floor(Math.random()*101));

  const Math2 = ref(Math.floor(Math.random()*101));
  const Math2Av = ref(Math.floor(Math.random()*101));

  const MathB = ref(Math.floor(Math.random()*101));
  const MathBAv = ref(Math.floor(Math.random()*101));

  const Physics = ref(Math.floor(Math.random()*101));
  const PhysicsAv = ref(Math.floor(Math.random()*101));

  const Creature = ref(Math.floor(Math.random()*101));
  const CreatureAv = ref(Math.floor(Math.random()*101));

  const English = ref(Math.floor(Math.random()*101));
  const EnglishAv = ref(Math.floor(Math.random()*101));

  const InfoIndus = ref(Math.floor(Math.random()*101));
  const InfoIndusAv = ref(Math.floor(Math.random()*101));

  const Health = ref(Math.floor(Math.random()*101));
  const HealthAv = ref(Math.floor(Math.random()*101));

  const Algo = ref(Math.floor(Math.random()*101));
  const AlgoAv = ref(Math.floor(Math.random()*101));

  return {
    Japanese,
    JapaneseAv,

    Geography,
    GeographyAv,

    Math2,
    Math2Av,

    MathB,
    MathBAv,

    Physics,
    PhysicsAv,

    Creature,
    CreatureAv,

    English,
    EnglishAv,

    InfoIndus,
    InfoIndusAv,

    Health,
    HealthAv,

    Algo,
    AlgoAv,
  };
});
