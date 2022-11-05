<template>
  <div id="thoughts" class="w-screen h-full px-14 flex absolute">
    <div class="flex flex-col w-full h-full items-center pt-20">
      <p class="font-courgette text-black text-3xl mb-3">Published Thoughts</p>
      <div
        class="w-full h-96 flex justify-evenly pt-3 gap-10 relative flex-wrap"
      >
        <div v-for="thought in thoughts" class="h-full w-52 duration-150">
          <div class="w-full h-4/5">
            <img
              class="w-full h-full object-cover shadow-black shadow-md hover:scale-110 hover:cursor-pointer duration-150"
              :src="`${thought.cover}`"
              alt=""
            />
          </div>
          <p
            class="text-center pt-5 text-lg font-sans tracking-widest font-semibold"
          >
            {{ thought.title }}
          </p>
          <!-- badge -->
          <div class="flex justify-center">
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
                >chapters:
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Thoughts from "../services/Thoughts";
import Chapters from "../services/Chapters";

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

    retrieveChapters() {
      this.retrieveChapters;
      Chapters.getAll()
        .then((response) => {
          this.chapter = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveThoughts();
    this.retrieveChapters();
  },
};
</script>
