const { createApp, ref } = Vue;

createApp({
  data() {
    return {
      activeDisplay: "all",
      contacts: [], // ✅ corrected from "contats"
      contact: {
        name: "",
        phoneNumber: "", // ✅ keep key consistent
        email: "",
      },
    };
  },
  methods: {
    changeDisplay(display) {
      this.activeDisplay = display;
    },
    addContact() {
      this.contacts.push({ ...this.contact });
      this.contact = {
        name: "",
        phoneNumber: "", // ✅ consistent key
        email: "",
      };
      this.activeDisplay = "all";
    },
    deleteContact(index) {
      this.contacts.splice(index, 1);
    },
  },
}).mount("#app");
