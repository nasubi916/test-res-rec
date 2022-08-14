import { defineStore } from "pinia";

export const colorStore = defineStore("color", () => {
  const Japanese = "#AD0900";
  const Geography = "#BB9006";
  const Math2 = "#0844A6";
  const MathB = "#0692AB";
  const Physics = "#BF5106";
  const Creature = "#1A9E4B";
  const English = "	#510798";
  const InfoIndus = "#505559";
  const Health = "	#9C1155";
  const Algo = "	#109385";
  
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
