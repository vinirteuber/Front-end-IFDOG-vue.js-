import { defineStore } from "pinia";
import axios from "axios";
export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    access: "",
    username: "",
    id: 0,
    email: "",
  }),
  actions: {
    async login(user) {
      const { data } = await axios.post(
        "http://localhost:8000/token/",
        user
      );
      this.access = data.access;
      this.username = data.username;
      this.id = data.id;
      this.email = data.email;
    },
  },
});
