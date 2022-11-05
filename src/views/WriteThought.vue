<template>
  <NavbarThought />

  <div class="grid grid-cols-2 w-screen h-screen">
    <div class="w-full">
      <div
        class="flex flex-col justify-center items-center w-full h-full p-10 px-20"
      >
        <div class="w-[600px] max-h-[500px]">
          <label class="inline-block mb-2 text-gray-500"
            >Upload Cover Image</label
          >
          <div class="flex items-center justify-center w-full">
            <label
              class="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300"
            >
              <div class="flex flex-col items-center justify-center pt-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p
                  class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600"
                >
                  Select a photo
                </p>
              </div>
              <input type="file" class="opacity-0" />
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full">
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
import NavbarThought from "../components/NavbarThought.vue";
</script>
