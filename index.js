const { createApp, ref } = Vue;

createApp({
  data() {
    return {
      activeDisplay: "all",
    };
  },
  methods: {
    changeDisplay(display) {
      this.activeDisplay = display;
    },
  },
}).mount("#app");
