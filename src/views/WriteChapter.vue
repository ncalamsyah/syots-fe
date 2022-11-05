<template>
  <NavbarChapter />

  <div class="flex w-screen h-screen">
    <div class="w-full justify-center">
      <div
        class="flex flex-col justify-center items-start w-full h-full p-10 px-20"
      >
        <h1 class="text-lg mb-1 font-medium">Thought Title</h1>
        <div class="w-full py-2 mb-5">
          <input type="text" class="bg-gray-200 rounded-md px-2 py-2 w-full" />
        </div>
        <h1 class="text-lg mb-1 font-medium">Description</h1>
        <div class="w-full">
          <textarea
            class="bg-gray-200 rounded-md px-2 py-2 w-full"
            name="description"
            id="description"
            cols="50"
            rows="10"
          ></textarea>
        </div>

        <div class="w-full flex flex-col justify-around items-center mt-4">
          <RouterLink
            :to="{ name: 'Write Chapter' }"
            class="w-content text-white bg-primary text-sm font-semibold rounded-lg hover:bg-gray-100 hover:border hover:border-primary hover:text-primary p-3 duration-200"
          >
            Write Chapters
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavbarChapter from "../components/NavbarChapter.vue";
</script>
