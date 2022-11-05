<template>
  <NavbarChapter />

  <div class="grid grid-cols-3 w-screen h-screen gap-6">
    <div class="w-full">
      <div class="flex flex-col justify-center items-end w-full h-full p-10">
        <div class="flex flex-col justify-center items-center">
          <div class="w-[200px] max-h-[200px] mb-5">
            <img
              class="w-full h-full object-cover rounded-full"
              src="https://source.unsplash.com/B5PNmw5XSpk"
              alt=""
            />
          </div>

          <h2 class="text-lg">@username</h2>
        </div>
      </div>
    </div>
    <div class="w-full">
      <div class="flex flex-col justify-center items-center w-full h-full p-10">
        <h1 class="text-3xl mb-7">Chapter 1</h1>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </p>
      </div>
    </div>
    <div class="w-full">
      <div class="flex flex-col justify-center items-center w-full h-full p-10">
        <span class="font-semibold text-lg mb-4">Chapters</span>
        <hr class="border border-slate-400 w-full" />
        <div class="flex flex-col justify-around py-2">
          <div
            class="text-lg px-3 rounded-full hover:cursor-pointer hover:text-white hover:-translate-y-1 hover:bg-secondary transition-all duration-300"
          >
            <h2 class="py-2">Chapter 1</h2>
          </div>
          <div
            class="text-lg px-3 rounded-full hover:cursor-pointer hover:text-white hover:-translate-y-1 hover:bg-secondary transition-all duration-300"
          >
            <h2 class="py-2">Chapter 2</h2>
          </div>
          <div
            class="text-lg px-3 rounded-full hover:cursor-pointer hover:text-white hover:-translate-y-1 hover:bg-secondary transition-all duration-300"
          >
            <h2 class="py-2">Chapter 3</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavbarChapter from "../components/NavbarChapter.vue";
</script>
