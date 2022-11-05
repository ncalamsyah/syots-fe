<template>
  <NavbarProfile />
  <main v-if="user">
    <div class="w-36 h-14 absolute left-24 top-6 z-10">
      <img src="../assets/syots.png" alt="" />
    </div>
    <div class="">
      <!-- End of Navbar -->

      <div class="container mx-auto p-5 pt-20">
        <div class="md:flex no-wrap md:-mx-2">
          <!-- Left Side -->
          <div class="w-full h-full md:w-3/12 md:mx-2">
            <!-- Profile Card -->
            <div class="bg-white p-3 border-t-4 border-primary">
              <div class="image overflow-hidden">
                <img
                  class="h-full w-full mx-auto"
                  :src="`${user.photo}`"
                  alt=""
                />
              </div>
              <h1
                class="text-gray-900 font-bold text-xl text-center leading-8 my-1"
              >
                {{ user.firstname }} {{ user.lastname }}
              </h1>

              <ul
                class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm"
              >
                <li class="flex items-center py-3">
                  <span>Member since</span>
                  <span class="ml-auto">{{ date }}</span>
                </li>
              </ul>
            </div>
            <!-- End of profile card -->
            <div class="my-4"></div>
          </div>
          <!-- Right Side -->
          <div class="w-full md:w-9/12 mx-2 h-64">
            <!-- Profile tab -->
            <!-- About Section -->
            <div class="bg-white p-3 shadow-sm rounded-sm">
              <div
                class="flex items-center space-x-2 font-semibold text-gray-900 leading-8"
              >
                <span clas="text-green-500">
                  <svg
                    class="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span class="tracking-wide">About</span>
              </div>
              <form @submit.prevent="handleUpdate">
                <div class="text-gray-700">
                  <div class="grid md:grid-cols-2 text-sm">
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">First Name</div>
                      <div class="px-4 py-2">
                        <input
                          v-model="firstname"
                          name="firstname"
                          id="firstname"
                          type="text"
                          :placeholder="`${user.firstname}`"
                          class="bg-gray-200 rounded-md px-2"
                        />
                      </div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Last Name</div>
                      <div class="px-4 py-2">
                        <input
                          v-model="lastname"
                          name="lastname"
                          id="lastname"
                          type="text"
                          :placeholder="`${user.lastname}`"
                          class="bg-gray-200 rounded-md px-2"
                        />
                      </div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Gender</div>
                      <div class="px-4 py-2">
                        <input
                          name="gender"
                          id="gender"
                          type="text"
                          :value="user.gender"
                          class="bg-gray-200 rounded-md px-2"
                        />
                      </div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Contact No.</div>
                      <div class="px-4 py-2">
                        <input
                          v-model="phone"
                          name="phone_no"
                          id="phone_no"
                          type="text"
                          :placeholder="`${user.phone_no}`"
                          class="bg-gray-200 rounded-md px-2"
                        />
                      </div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Username</div>
                      <div class="px-4 py-2">
                        <input
                          v-model="username"
                          name="username"
                          id="username"
                          type="text"
                          :placeholder="`${user.username}`"
                          class="bg-gray-200 rounded-md px-2"
                        />
                      </div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Place oF Birth</div>
                      <div class="px-4 py-2">
                        <input
                          v-model="birthplace"
                          name="place_of_birth"
                          id="place_of_birth"
                          type="text"
                          :placeholder="`${user.place_of_birth}`"
                          class="bg-gray-200 rounded-md px-2"
                        />
                      </div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Email.</div>
                      <div class="px-4 py-2">
                        <input
                          v-model="email"
                          name="email"
                          id="email"
                          type="email"
                          :placeholder="`${user.email}`"
                          class="bg-gray-200 rounded-md px-2"
                        />
                      </div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Birthday</div>
                      <div class="px-4 py-2">
                        <input
                          v-model="date_of_birth"
                          name="date_of_birth"
                          id="date_of_birth"
                          type="text"
                          :placeholder="`${user.date_of_birth}`"
                          class="bg-gray-200 rounded-md px-2"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-end mr-8">
                    <button
                      @click="submit"
                      class="w-content text-white bg-primary text-sm font-semibold rounded-lg hover:bg-gray-100 hover:border hover:border-primary hover:text-primary p-3 my-4 duration-200"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <!-- End of about section -->

            <div class="my-4"></div>

            <!-- Experience and education -->
            <div class="bg-white p-3 shadow-sm rounded-sm">
              <h1 class="font-courgette text-black mb-6 text-3xl text-center">
                Your Thoughts
              </h1>
              <div class="grid grid-cols-3 gap-10">
                <div
                  v-if="thought"
                  v-for="t in thought"
                  class="h-full w-52 duration-150"
                >
                  <div class="w-full h-4/5">
                    <img
                      class="w-full h-full object-cover shadow-black shadow-md hover:scale-110 hover:cursor-pointer duration-150"
                      :src="`${t.cover}`"
                      alt=""
                    />
                  </div>
                  <p
                    class="text-center pt-5 mb-2 text-sm font-sans tracking-widest font-semibold"
                  >
                    {{ t.title }}
                  </p>
                  <!-- badge -->
                  <div class="flex justify-center">
                    <span
                      class="inline-flex items-center rounded-full p-1 bg-primary text-white text-xs transition-all duration-500"
                      role="alert"
                      tabindex="0"
                    >
                      <span
                        class="whitespace-nowrap inline-block max-w-screen-2xl scale-100 transition-all duration-500 px-1"
                        >chapters: 5</span
                      >
                    </span>
                  </div>
                </div>
              </div>
              <!-- End of Experience and education grid -->
            </div>
            <!-- End of profile tab -->
          </div>
        </div>
      </div>
    </div>
  </main>

  <div class="w-screen h-screen flex justify-center items-center" v-if="!user">
    <div>
      <h1 class="text-3xl">Please Sign in</h1>
    </div>
  </div>
</template>

<script setup>
import NavbarProfile from "../components/NavbarProfile.vue";
</script>

<script>
import axios from "axios";
import "../http-common.js";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      user: null,
      thought: [],
      date: "",

      firstname: "",
      lastname: "",
      username: "",
      email: "",
      phone: "",
      gender: "",
      birthplace: "",
      birthday: "",
    };
  },
  async created() {
    const response = await axios.get(
      `/user/${localStorage.getItem("user_id")}`
      // // HEADERS defined at http-common
      // {
      //   headers: {
      //     Authorization: localStorage.getItem("token"),
      //   },
      // }
    );
    this.user = response.data.data;

    let myDate = new Date(response.data.data.created_at).getFullYear();

    this.date = myDate;

    const responseThought = await axios.get(
      `/thought/${localStorage.getItem("user_id")}`
      // {
      //   headers: {
      //     Authorization: localStorage.getItem("token"),
      //   },
      // }
    );

    const thoughttt = (this.thought = responseThought.data.data);
    console.log(thoughttt);

    const userinfo = (this.user = response.data.data);
    console.log(userinfo);
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    async handleUpdate() {
      const response = await axios.patch(
        `/user/${localStorage.getItem("user_id")}`,
        {
          firstname: this.firstname,
          lastname: this.lastname,
          username: this.username,
          email: this.email,
          phone: this.phone,
          gender: this.gender,
          birthplace: this.birthplace,
          birthday: this.birthday,
        }
      );
      if (response.status == "200") {
        console.log(response.data);
      } else {
        console.log("update failed");
      }
    },
  },
};
</script>
