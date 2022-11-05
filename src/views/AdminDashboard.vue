<template>
  <div class="flex min-h-screen bg-gray-100">
    <NavbarAdmin />
    <SidebarAdmin />
    <!-- component -->
    <div class="mt-10 ml-32 w-full h-full">
      <div class="md:px-32 pt-10 w-full">
        <span class="text-2xl font-sans">Reports</span>
      </div>
      <div class="md:px-32 py-6 min-w-min">
        <div class="shadow rounded border-b border-gray-200">
          <table class="min-w-full bg-white">
            <thead class="bg-primary text-white">
              <tr>
                <th
                  class="w-1/5 text-center py-3 px-2 uppercase font-semibold text-sm"
                >
                  No.
                </th>
                <th
                  class="w-1/5 text-center py-3 px-2 uppercase font-semibold text-sm"
                >
                  Chapter ID
                </th>
                <th
                  class="w-1/5 text-center py-3 px-2 uppercase font-semibold text-sm"
                >
                  Chapter Title
                </th>
                <th
                  class="w-1/5 text-center py-3 px-2 uppercase font-semibold text-sm"
                >
                  User ID
                </th>
                <th
                  class="w-1/5 text-center py-3 px-2 uppercase font-semibold text-sm"
                >
                  Report Text
                </th>
                <th
                  class="w-1/5 text-center py-3 px-2 uppercase font-semibold text-sm"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody class="text-gray-700">
              <tr>
                <td class="w-1/5 text-center py-3 px-2">1</td>
                <td class="w-1/5 text-left py-3 px-2">
                  be8b5b10-e335-49ed-a919-fb57d1beb2d4
                </td>
                <td class="w-1/5 text-left py-3 px-2">Drownnnnnn</td>
                <td class="text-left py-3 px-4">
                  <a class="hover:text-blue-500" href="tel:622322662"
                    >622322662</a
                  >
                </td>
                <td class="w-1/5 text-left py-3 px-2">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form,
                </td>
                <td class="w-1/5 flex text-center py-3 px-2 gap-2">
                  <RouterLink
                    class="min-w-max h-10 font-sans font-semibold bg-secondary text-white p-2 px-4 rounded-full mt-6 duration-150 hover:bg-opacity-0 hover:text-primary hover:border hover:border-primary"
                    :to="{ name: '' }"
                  >
                    Review
                  </RouterLink>
                  <RouterLink
                    class="min-w-max h-10 font-sans font-semibold bg-red-700 text-white p-2 px-4 rounded-full mt-6 duration-150 hover:bg-opacity-50 hover:text-primary hover:border"
                    :to="{ name: '' }"
                  >
                    Ignore
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
