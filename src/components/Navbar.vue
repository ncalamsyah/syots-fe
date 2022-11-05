<template>
  <div class="w-screen flex justify-center items-center fixed z-10">
    <div
      class="min-w-max h-14 bg-primary bg-opacity-90 rounded-b-[30px] shadow-black shadow-sm"
    >
      <div class="h-full">
        <ul class="text-white flex flex-row justify-evenly items-center h-full">
          <RouterLink
            class="text-xl font-semibold m-4 tracking-widest font-sans rounded-full px-5 py-1 hover:bg-white duration-150 hover:text-primary hover:cursor-pointer"
            :to="{ name: 'Home' }"
          >
            Home
          </RouterLink>
          <RouterLink
            class="text-xl font-semibold m-4 tracking-widest font-sans rounded-full px-5 py-1 hover:bg-white duration-150 hover:text-primary hover:cursor-pointer"
            :to="{ name: 'Thoughts' }"
          >
            Thoughts
          </RouterLink>
          <RouterLink
            class="text-xl font-semibold m-4 tracking-widest font-sans rounded-full px-5 py-1 hover:bg-white duration-150 hover:text-primary hover:cursor-pointer"
            :to="{ name: 'Login' }"
          >
            Login
          </RouterLink>
        </ul>
      </div>
    </div>
  </div>
</template>
