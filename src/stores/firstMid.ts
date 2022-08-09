import { defineStore } from "pinia";
import { ref } from "vue";

export const firstMidStore = defineStore("firstMid", () => {
  //とりあえず情報科のテストで考える
  const Japanese = ref(87);
  const JapaneseAv = ref(78);
  const JapaneseCo = "";

  const Geography = ref(90);
  const GeographyAv = ref(78);
  const GeographyCo = "";

  const Math2 = ref(93);
  const Math2Av = ref(78);
  const Math2Co = "";

  const MathB = ref(70);
  const MathBAv = ref(78);
  const MathBCo = "";

  const Physics = ref(72);
  const PhysicsAv = ref(52);
  const PhysicsCo = "";

  const Creature = ref(88);
  const CreatureAv = ref(80);
  const CreatureCo = "";

  const English = ref(82);
  const EnglishAv = ref(71);
  const EnglishCo = "";

  const InfoIndus = ref(92);
  const InfoIndusAv = ref(82);
  const InfoIndusCo = "";

  
  const Health = ref(0);
  const HealthAv = ref(0);
  const HealthCo = "";

  const Algo = ref(0);
  const AlgoAv = ref(0);
  const AlgoCo = "";

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
