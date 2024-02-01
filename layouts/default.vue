<template>
  <div>
    <header class="shadow-sm bg-gray-900 p-4">
      <nav class="flex items-center justify-between">
        <div>
          <ul class="flex gap-8">
            <li v-for="link in Leftpagelink" :key="link.id">
              <NuxtLink class="text-white font-bold text-xl font-sans md:font-serif" :to="link.route">{{ link.name }}</NuxtLink>
            </li>
            <li>
              <!-- custom drop down for learn link -->
          <div class="relative inline-block text-left">
            <button type="button" @click="toggleDropdown_Learn"
              class="inline-flex justify-center text-white font-bold text-xl font-sans md:font-serif w-full rounded-md px-4 bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-gray-800"
            >
              {{ selectedLearnName || 'Learn' }}
              <!-- Arrow icon for dropdown -->
              <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" >
                <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                />
              </svg>
            </button>

            <!-- Dropdown menu -->
            <div v-show="isDropdownOpen_learn" class="origin-top-right absolute left mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <div
                  v-for="learnlink in LearnRouteLink"
                  :key="learnlink.id"
                  @click="selectLearnLink(learnlink)"
                  class="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {{ learnlink.name }}
                </div>
              </div>
            </div>
          </div>
          <!-- custom drop down ends here for learn link -->
          <!-- custom dropdown starts here for Api link -->
          <div class="relative inline-block text-left">
            <button type="button" @click="toggleDropdown_Api"
              class="inline-flex justify-center text-white font-bold text-xl font-sans md:font-serif w-full rounded-md px-4 bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-gray-800"
            >
              {{ selectedApiName || 'Api' }}
              <!-- Arrow icon for dropdown -->
              <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                />
              </svg>
            </button>

            <!-- Dropdown menu -->
            <div v-show="isDropdownOpen_api" class="origin-top-right absolute left mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <div
                  v-for="apiLink in ApiRouteLink"
                  :key="apiLink.id"
                  @click="selectApiLink(apiLink)"
                  class="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {{ apiLink.name }}
                </div>
              </div>
            </div>
          </div>
          <!-- custom drop down ends here for Api link-->

            </li>
          </ul>
        </div>
        <div>
          <ul class="flex gap-8">
            <li class="list-style-none"><NuxtLink class="text-white text-3xl font-bold font-sans md:font-serif" to="/">NuxtTasks</NuxtLink></li>
          </ul>
        </div>
        <div>
          <div>
            <ul class="flex gap-8">
              <li v-for="link in RightpageLink" :key="link.id">
                <NuxtLink class="text-white font-bold text-xl font-sans md:font-serif hover:bg-gray-500 p-3 rounded-md" :to="link.route">{{ link.name }}</NuxtLink>
              </li>
              <div v-if="loggedInUser" class="relative inline-flex cursor-pointer items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span class="font-medium text-gray-600 dark:text-gray-300">{{ loggedInUser.Username.substring(0, 2) }}</span>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <div>
      <slot />
    </div>
  </div>
  <footer class="shadow-sm bg-gray-900 p-4 text-white text-center fixed bottom-0 left-0 right-0">
      &copy; Saikalyan labhishetty 
    </footer>
</template>

<script setup>
import { useRouteStore } from '~/store/routepage';
import { useFormStore } from '~/store/form';

const { loggedInUser } = useFormStore().userData;

const RouteStore = useRouteStore();
const Leftpagelink = RouteStore.LeftRouteLinks;
const RightpageLink = RouteStore.RightRouteLinks;
const ApiRouteLink = RouteStore.ApiRouteLink;
const LearnRouteLink = RouteStore.LearningRouteLink;

const isDropdownOpen_api = ref(false);
const isDropdownOpen_learn = ref(false);
const selectedApiLink = ref(null);
const selectedLearnLink = ref(null)

function toggleDropdown_Api() {
  isDropdownOpen_api.value = !isDropdownOpen_api.value;
}

function toggleDropdown_Learn() {
  isDropdownOpen_learn.value = !isDropdownOpen_learn.value;
}

function selectApiLink(apiLink) {
  selectedApiLink.value = apiLink.route;
  isDropdownOpen_api.value = false;
  navigateTo(selectedApiLink.value);
}

const selectedApiName = computed(() => {
  const selectedLink = ApiRouteLink.find(link => link.route === selectedApiLink.value);
  return selectedLink ? selectedLink.name : null;
});

function selectLearnLink(learnlink) {
  selectedLearnLink.value = learnlink.route;
  isDropdownOpen_learn.value = false;
  navigateTo(selectedLearnLink.value);
}

const selectedLearnName = computed(() => {
  const selectedLink_2 = LearnRouteLink.find(link => link.route === selectedLearnLink.value);
  return selectedLink_2 ? selectedLink_2.name : null;
});

</script>

