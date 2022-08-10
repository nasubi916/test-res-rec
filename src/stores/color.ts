import { defineStore } from "pinia";

export const colorStore = defineStore("color", () => {
  const Japanese = "red";
  const Geography = "yellow";
  const Math2 = "blue";
  const MathB = "cyan";
  const Physics = "orange";
  const Creature = "green";
  const English = "purple";
  const InfoIndus = "gray";
  const Health = "pink";
  const Algo = "teal";
  
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
