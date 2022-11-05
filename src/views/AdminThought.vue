<template>
  <div class="flex min-h-screen bg-gray-100">
    <NavbarAdmin />
    <SidebarAdmin />

    <div class="mt-10 ml-32 w-full h-full">
      <div class="md:px-32 pt-10 w-full flex flex-col">
        <span class="text-2xl font-sans">Thoughts</span>
        <RouterLink
          class="max-w-max h-10 font-sans font-semibold bg-secondary text-white p-2 px-4 rounded-full mt-6 duration-150 hover:bg-opacity-0 hover:text-primary hover:border hover:border-primary"
          :to="{ name: '' }"
        >
          Create
        </RouterLink>
      </div>
      <div class="md:px-32 py-6 min-w-min">
        <div class="shadow rounded border-b border-gray-200">
          <table class="min-w-full bg-white">
            <thead class="bg-primary text-white">
              <tr>
                <th
                  class="w-1/5 text-center py-3 px-4 uppercase font-semibold text-sm border-x-2"
                >
                  No.
                </th>
                <th
                  class="w-1/5 text-center py-3 px-4 uppercase font-semibold text-sm border-x-2"
                >
                  ID
                </th>
                <th
                  class="w-1/5 text-center py-3 px-4 uppercase font-semibold text-sm border-x-2"
                >
                  Username
                </th>
                <th
                  class="w-1/5 text-center py-3 px-4 uppercase font-semibold text-sm border-x-2"
                >
                  Title
                </th>
                <th
                  class="w-1/5 text-center py-3 px-4 uppercase font-semibold text-sm border-x-2"
                >
                  Description
                </th>
                <th
                  class="w-1/5 text-center py-3 px-4 uppercase font-semibold text-sm border-x-2"
                >
                  Cover
                </th>
                <th
                  class="w-1/5 text-center py-3 px-4 uppercase font-semibold text-sm border-x-2"
                >
                  Published
                </th>
                <th
                  class="w-1/5 text-center py-3 px-4 uppercase font-semibold text-sm border-x-2"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody class="text-gray-700">
              <tr v-for="(thought, index) in thoughts" :key="thought.id">
                <td class="w-1/5 text-center py-3 px-2 border-b-2">
                  {{ index + 1 }}
                </td>
                <td class="w-1/5 text-left py-3 px-2 border-b-2">
                  {{ thought.id }}
                </td>
                <td class="w-1/5 text-left py-3 px-2 border-b-2">
                  {{ thought.username }}
                </td>
                <td class="w-1/5 text-left py-3 px-2 border-b-2">
                  {{ thought.title }}
                </td>
                <td class="w-1/5 text-left py-3 px-2 border-b-2">
                  {{ thought.description }}
                </td>
                <td class="w-1/5 text-left py-3 px-2 border-b-2">
                  {{ thought.cover }}
                </td>
                <td class="w-1/5 text-left py-3 px-2 border-b-2">
                  {{ thought.is_published }}
                </td>
                <td class="w-1/5 flex gap-2 text-center py-3 px-2">
                  <RouterLink
                    class="min-w-max h-10 font-sans font-semibold bg-secondary text-white p-2 px-4 rounded-full mt-6 duration-150 hover:bg-opacity-0 hover:text-primary hover:border hover:border-primary"
                    :to="{ name: '' }"
                  >
                    Edit
                  </RouterLink>
                  <RouterLink
                    class="min-w-max h-10 font-sans font-semibold bg-red-700 text-white p-2 px-4 rounded-full mt-6 duration-150 hover:bg-opacity-50 hover:text-primary hover:border"
                    :to="{ name: '' }"
                  >
                    Delete
                  </RouterLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavbarAdmin from "../components/NavbarAdmin.vue";
import SidebarAdmin from "../components/SidebarAdmin.vue";
</script>

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
