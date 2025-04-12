const { createApp, ref } = Vue;

createApp({
  data() {
    return {
      x: 0,
      y: 0,
    };
  },
  methods: {
    plus(count) {
      this.x = count;
      this.x++;
    },
    mines() {
      if (this.x == 0) return;
      this.x--;
    },
    getpos(event) {
      this.x = event.x;
      this.y = event.y;
    },
  },
}).mount("#app");
