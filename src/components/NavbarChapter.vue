<template>
  <div class="w-screen flex justify-center items-center fixed z-10">
    <div
      class="w-full h-14 bg-primary bg-opacity-90 rounded-b-[30px] shadow-black shadow-sm"
    >
      <div class="h-full px-10">
        <ul
          class="text-white flex flex-row justify-between items-center h-full"
        >
          <RouterLink
            class="text-xl font-semibold m-4 tracking-widest font-sans rounded-full px-5 py-1 hover:bg-white duration-150 hover:text-primary hover:cursor-pointer"
            :to="{ name: 'Write Thought' }"
          >
            Back
          </RouterLink>
          <div class="flex justify-center items-center w-96 h-full">
            <div class="w-10 h-full">
              <img
                class="w-full h-full object-cover"
                src="https://source.unsplash.com/B5PNmw5XSpk"
                alt=""
              />
            </div>
            <span
              class="text-xl font-semibold m-4 tracking-widest font-sans rounded-full px-5 py-1"
            >
              Thought Title
            </span>
          </div>
          <div>
            <RouterLink
              class="text-xl font-semibold m-4 tracking-widest font-sans rounded-full px-5 py-1 hover:bg-white duration-150 hover:text-primary hover:cursor-pointer"
              :to="{ name: 'Login' }"
            >
              Preview
            </RouterLink>
            <RouterLink
              class="text-xl font-semibold m-4 tracking-widest font-sans rounded-full px-5 py-1 hover:bg-white duration-150 hover:text-primary hover:cursor-pointer"
              :to="{ name: 'Login' }"
            >
              Save
            </RouterLink>
            <RouterLink
              class="text-xl text-primary font-semibold m-4 bg-secondary-variant tracking-widest font-sans rounded-full px-5 py-2 hover:bg-white duration-150 hover:text-primary hover:cursor-pointer"
              :to="{ name: 'Login' }"
            >
              Publish
            </RouterLink>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>
