<template>
  <main>
    <Navbar />
    <div class="py-16">
      <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div class="mb-12 space-y-2 text-center mt-6">
          <h1 class="font-courgette text-black mb-3 text-3xl">
            Published Thoughts
          </h1>
          <p class="lg:w-6/12 lg:mx-auto">
            Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt,
            debitis dolorum officia aliquid explicabo? Excepturi, voluptate?
          </p>
        </div>

        <div class="grid gap-6 lg:grid-cols-3">
          <div
            v-for="thought in thoughts"
            class="max-h-80 p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-lg hover:rounded-2xl"
          >
            <img
              :src="`${thought.cover}`"
              alt="art cover"
              loading="lazy"
              width="1000"
              height="667"
              class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-300 group-hover:rounded-xl group-hover:scale-110"
            />

            <div class="sm:w-7/12 pl-0 p-5">
              <div class="space-y-2">
                <div class="space-y-4 overflow-y-hidden">
                  <h4 class="text-xl font-semibold text-cyan-900">
                    {{ thought.title }}
                  </h4>
                  <span
                    class="inline-flex items-center rounded-full p-1 mx-1 bg-primary text-white text-xs transition-all duration-500"
                    role="alert"
                    tabindex="0"
                  >
                    <span
                      class="whitespace-nowrap inline-block max-w-screen-2xl scale-100 transition-all duration-500 px-1"
                      >by @{{ thought.username }}</span
                    >
                  </span>

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

                  <div class="h-full w-full overflow-hidden">
                    <p class="text-gray-600 text-sm">
                      {{ thought.description }}
                    </p>
                  </div>
                </div>
                <RouterLink :to="{ name: 'Thought Details' }">
                  <a href="" class="block w-max text-cyan-600">Read more</a>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import Thoughts from "../services/Thoughts";
</script>
<script>
export default {
  data() {
    return {
      thoughts: [],
    };
  },
  methods: {
    retrieveThoughts() {
      Thoughts.getAll()
        .then((response) => {
          this.thoughts = response.data.data;
          console.log(this.thoughts);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveThoughts();
  },
};
</script>
