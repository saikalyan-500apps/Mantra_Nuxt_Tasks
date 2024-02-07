<!-- components/DropdownMenuComponent -->
<template>
  <div>
    <li>
      <!-- custom drop down for learn link -->
      <div class="relative inline-block text-left">
        <button type="button" @click="toggleDropdown"
          class="inline-flex justify-center text-white font-bold text-xl font-sans md:font-serif w-full rounded-md px-4 bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-gray-800">
          {{ selectedName || name }}
          <!-- Arrow icon for dropdown -->
          <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
          </svg>
        </button>

        <!-- Dropdown menu -->
        <div v-show="isDropdownOpen"
          class="origin-top-right absolute left mt-2 w-30 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <div v-for="link in RouteLink" :key="link.id" @click="selectLink(link)"
              class="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              {{ link.name }}
            </div>
          </div>
        </div>
      </div>
      <!-- custom drop down ends here for learn link -->
    </li>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const isDropdownOpen = ref(false);
const props = defineProps({
  name: String,
  selectedName: String,
  RouteLink:String,
});
const emits = defineEmits(['toggleDropdown', 'selectLink']);

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

function selectLink(link) {
  emits('toggleDropdown');
  emits('selectLink', link);
}
</script>
