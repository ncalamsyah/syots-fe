<script>
import axios from "axios";
import Navbar from "./components/Navbar.vue";
import Home from "./views/Home.vue";
// import Thoughts from "./services/Thoughts";
// import Admin from "./services/Admin";
// import "./http-common";

export default {
  name: "App",
  components: { Navbar, Home },

  // mounted() {
  //   let externalScript = document.createElement("script");
  //   externalScript.setAttribute({
  //     src: "https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js",
  //   });
  //   document.head.appendChild(externalScript.setAttribute);
  // },
  data() {
    return {
      thoughts: [],
      user: null,
    };
  },

  async created() {
    const response = await axios.get(
      `/user/${localStorage.getItem("user_id")}`
    );
    this.$store.dispatch("user", response.data);
  },
  // methods: {
  //   retrieveThoughts() {
  //     Thoughts.getAll()
  //       .then((response) => {
  //         this.thoughts = response.data.data;
  //         console.log(this.thoughts);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   },

  //   retrieveAdmins() {
  //     this.retrieveAdmins;
  //     Admin.getAll()
  //       .then((response) => {
  //         this.admin = response.data;
  //         console.log(response.data);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   },
  // },
  // mounted() {
  //   this.retrieveThoughts();
  //   this.retrieveAdmins();
  // },
};
</script>

<template>
  <RouterView />
</template>

<style src="./input.css" />
