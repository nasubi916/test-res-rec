import { defineStore } from "pinia";
import { ref } from "vue";

export const secondMidStore = defineStore("secondMid", () => {
  const Japanese = ref(33);
  const JapaneseAv = ref(78);

  const Geography = ref(90);
  const GeographyAv = ref(78);

  const Math2 = ref(93);
  const Math2Av = ref(78);

  const MathB = ref(70);
  const MathBAv = ref(78);

  const Physics = ref(72);
  const PhysicsAv = ref(52);

  const Creature = ref(88);
  const CreatureAv = ref(80);

  const English = ref(82);
  const EnglishAv = ref(71);

  const InfoIndus = ref(92);
  const InfoIndusAv = ref(82);

  const Health = ref(0);
  const HealthAv = ref(0);

  const Algo = ref(0);
  const AlgoAv = ref(0);

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
