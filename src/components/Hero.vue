<template>
  <div class="w-36 h-14 absolute left-24 top-6">
    <img src="../assets/syots.png" alt="" />
  </div>
  <div class="w-screen h-screen grid grid-cols-2">
    <div class="">
      <div class="w-full h-full flex flex-col justify-center items-start px-14">
        <p class="font-courgette text-black text-6xl mb-3">
          Share Your Thoughts!
        </p>
        <p class="font-sans text-black text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          explicabo!
        </p>
        <RouterLink
          class="min-w-max h-10 font-sans font-semibold bg-primary text-white p-2 px-4 rounded-full mt-6 duration-150 hover:bg-opacity-0 hover:text-primary hover:border hover:border-primary"
          :to="{ name: 'Login' }"
        >
          Start Writing
        </RouterLink>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <div class="w-full bg">
        <img
          class="w-full h-full border-white"
          src="https://source.unsplash.com/EP6_VZhzXM8"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
