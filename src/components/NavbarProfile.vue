<template>
  <div class="w-screen flex justify-end items-center fixed z-10">
    <div
      class="min-w-max h-14 bg-primary bg-opacity-90 rounded-b-[30px] shadow-black shadow-sm"
    >
      <div class="h-full min-w-[700px]">
        <ul class="text-white flex flex-row justify-around items-center h-full">
          <RouterLink
            class="text-xl font-semibold m-4 tracking-widest font-sans rounded-full px-5 py-1 hover:bg-white duration-150 hover:text-primary hover:cursor-pointer"
            :to="{ name: 'Write Thought' }"
          >
            Write Your Thoughts
          </RouterLink>

          <Button
            @click="handleLogout"
            class="text-xl font-semibold m-4 tracking-widest font-sans rounded-full px-5 py-1 hover:bg-white duration-150 hover:text-primary hover:cursor-pointer"
          >
            Logout
          </Button>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    async handleLogout() {
      localStorage.removeItem("token");
      this.$store.dispatch("user", null);
      this.$router.push("/login");
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
