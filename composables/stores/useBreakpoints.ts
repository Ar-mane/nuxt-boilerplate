import { defineStore } from 'pinia';

export const useBreakpoints = defineStore('breakpoints', {
  state: () => ({
    isMobile: false
  }),
  actions: {
    setIsMobile(isMobile: boolean) {
      this.isMobile = isMobile;
    }
  }
});
