import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const name = ref("User");
  const score = ref(0);

  return { name, score };
});
