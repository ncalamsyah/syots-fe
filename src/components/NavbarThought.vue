<template>
  <div class="w-screen flex justify-center items-center fixed z-10">
    <div
      class="w-full h-14 bg-primary bg-opacity-90 rounded-b-[30px] shadow-black shadow-sm"
    >
      <div class="h-full">
        <ul class="text-white flex flex-row justify-around items-center h-full">
          <RouterLink
            class="text-xl font-semibold m-4 tracking-widest font-sans rounded-full px-5 py-1 hover:bg-white duration-150 hover:text-primary hover:cursor-pointer"
            :to="{}"
          >
            Back
          </RouterLink>
          <div class="flex justify-center items-center w-96 h-full">
            <span
              class="text-xl font-semibold m-4 tracking-widest font-sans rounded-full px-5 py-1"
            >
              Add Thought Info
            </span>
          </div>
          <RouterLink
            class="text-xl font-semibold m-4 tracking-widest font-sans rounded-full px-5 py-1 hover:bg-white duration-150 hover:text-primary hover:cursor-pointer"
            :to="{ name: 'Write Chapter' }"
          >
            Next
          </RouterLink>
        </ul>
      </div>
    </div>
  </div>
</template>

<script></script>
