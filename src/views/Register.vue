<template>
  <Navbar />
  <main>
    <div class="w-36 h-14 absolute left-24 top-6">
      <img src="../assets/syots.png" alt="" />
    </div>
    <div class="h-screen flex">
      <div
        class="hidden lg:flex w-full lg:w-1/2 login_img_section justify-around items-center"
      >
        <div class="bg-black opacity-20 inset-0 z-0"></div>
        <div class="w-full mx-auto flex-col items-center space-y-6">
          <img class="" src="https://source.unsplash.com/L5HG3CH_pgc" alt="" />
        </div>
      </div>
      <div
        class="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8"
      >
        <div class="w-full px-8 md:px-32 lg:px-24">
          <form
            @submit.prevent="handleSubmit"
            class="bg-white rounded-md shadow-2xl p-5"
          >
            <h1 class="text-gray-800 font-bold text-2xl mb-1">Register</h1>
            <p class="text-sm font-normal text-gray-600 mb-8">
              Please Signup and Write Your Stories!
            </p>
            <div class="flex items-center gap-4">
              <div class="w-1/2 border-2 mb-4 py-2 rounded-2xl">
                <input
                  v-model="firstname"
                  id="firstname"
                  class="pl-2 w-full outline-none border-none"
                  type="firstname"
                  name="firstname"
                  placeholder="Firstname"
                />
              </div>
              <div class="w-1/2 border-2 mb-4 py-2 rounded-2xl">
                <input
                  v-model="lastname"
                  id="lastname"
                  class="pl-2 w-full outline-none border-none"
                  type="lastname"
                  name="lastname"
                  placeholder="Lastname"
                />
              </div>
            </div>
            <div class="flex items-center border-2 mb-4 py-2 px-3 rounded-2xl">
              <input
                v-model="username"
                id="username"
                class="pl-2 w-full outline-none border-none"
                type="username"
                name="username"
                placeholder="Username"
              />
            </div>
            <div class="flex items-center border-2 mb-4 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                v-model="email"
                id="email"
                class="pl-2 w-full outline-none border-none"
                type="email"
                name="email"
                placeholder="Email Address"
              />
            </div>
            <div class="flex items-center border-2 mb-4 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                v-model="password"
                class="pl-2 w-full outline-none border-none"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                v-model="confirmPassword"
                class="pl-2 w-full outline-none border-none"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>
            <button
              @click="submit"
              class="block w-full bg-primary mt-5 py-2 rounded-2xl hover:bg-indigo-800 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
            >
              Register
            </button>
            <div class="flex justify-between mt-4">
              <RouterLink
                href="/login"
                class="text-sm ml-2 hover:text-primary cursor-pointer hover:-translate-y-1 duration-500 transition-all"
                :to="{ name: 'Login' }"
                >Already have an account?</RouterLink
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
</script>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: "",
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post("/register", {
        firstname: this.firstname,
        lastname: this.lastname,
        username: this.username,
        email: this.email,
        password: this.password,
      });
      if (this.password == this.confirmPassword) {
        this.$router.push("/login");
      } else {
        console.log("password didn't match");
      }
    },
  },
};
</script>
