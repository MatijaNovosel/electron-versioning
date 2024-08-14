import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("app", () => {
  const currentLocation = ref<any>({
    lat: 0,
    lng: 0
  });

  return {
    currentLocation
  };
});
