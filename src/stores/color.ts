import { defineStore } from "pinia";
import { ref } from "vue";

export const colorStore = defineStore("color", () => {
  const JapaneseCo = "";
  const GeographyCo = "";
  const Math2Co = "";
  const MathBCo = "";
  const PhysicsCo = "";
  const CreatureCo = "";
  const EnglishCo = "";
  const InfoIndusCo = "";
  const HealthCo = "";
  const AlgoCo = "";
  
  return {
    JapaneseCo,
    GeographyCo,
    Math2Co,
    MathBCo,
    PhysicsCo,
    CreatureCo,
    EnglishCo,
    InfoIndusCo,
    HealthCo,
    AlgoCo,
  };
});
