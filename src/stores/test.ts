import { defineStore } from "pinia";
import { ref } from "vue";

export const testStore = defineStore("test", () => {

  //とりあえず情報科のテストで考える
  const Japanese = ref(0);
  const Geography = ref(0);
  const Math2 = ref(0);
  const MathB = ref(0);
  const Physics = ref(0);
  const Creature = ref(0);
  const English = ref(0);
  const InfoIndus = ref(0);
  
  const Health = ref(0);
  const Algo = ref(0);

  return {
    Japanese,
    Geography,
    Math2,
    MathB,
    Physics,
    Creature,
    English,
    InfoIndus,
    Health,
    Algo,
  };
});
