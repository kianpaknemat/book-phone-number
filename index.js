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
      searchName: "",
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
  computed: {
    filterByName() {
      if (this.searchName == "") return [];
      else
        return this.contacts.filter(
          (f) =>
            f.name.includes(this.searchName) ||
            f.phoneNumber.includes(this.searchName)
        );
    },
  },
}).mount("#app");
