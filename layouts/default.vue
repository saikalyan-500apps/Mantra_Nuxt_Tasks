<template>
  <div>
    <header class="shadow-sm bg-gray-900 p-4">
      <nav class="flex items-center justify-between">
        <div>
          <ul class="flex gap-8">
            <!-- Left page links -->
            <li v-for="link in Leftpagelink" :key="link.id">
              <NuxtLink class="text-white font-bold text-xl font-sans md:font-serif" :to="link.route">{{ link.name }}</NuxtLink>
            </li>
              <!-- Dropdown menu for Learn link -->
              <DropdownMenuComponent 
                name="Learn" 
                :selectedName="selectedLearnName" 
                @toggleDropdown="toggleDropdown()" 
                @selectLink="selectLearnLink" 
                :RouteLink="LearnRouteLink" />
              
              <!-- Dropdown menu for Api link -->
              <DropdownMenuComponent 
                name="Api" 
                :selectedName="selectedApiName" 
                @toggleDropdown="toggleDropdown()" 
                @selectLink="selectApiLink" 
                :RouteLink="ApiRouteLink" />

          </ul>
        </div>
        <!-- Middle logo -->
        <div>
          <ul class="flex gap-8">
            <li class="list-style-none"><NuxtLink class="text-white text-3xl font-bold font-sans md:font-serif" to="/">NuxtTasks</NuxtLink></li>
          </ul>
        </div>
        <!-- Right page links -->
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
    <!-- Main content slot -->
    <div>
      <slot />
    </div>
    <!-- Footer -->
    <footer class="shadow-sm bg-gray-900 p-4 text-white text-center fixed bottom-0 left-0 right-0">
      &copy; Saikalyan labhishetty 
    </footer>
  </div>
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

// Define data and methods for handling dropdowns
const isDropdownOpen = ref(false)
const selectedApiLink = ref(null);
const selectedLearnLink = ref(null);

function toggleDropdown(){
  isDropdownOpen.value = !isDropdownOpen.value;
}

function selectApiLink(link) {
  selectedApiLink.value = link.route;
  isDropdownOpen.value = false;
  navigateTo(selectedApiLink.value);
}

const selectedApiName = computed(() => {
  const selectedLink = ApiRouteLink.find(link => link.route === selectedApiLink.value);
  return selectedLink ? selectedLink.name : null;
});

function selectLearnLink(link) {
  selectedLearnLink.value = link.route;
  isDropdownOpen.value = false;
  navigateTo(selectedLearnLink.value);
}

const selectedLearnName = computed(() => {
  const selectedLink_2 = LearnRouteLink.find(link => link.route === selectedLearnLink.value);
  return selectedLink_2 ? selectedLink_2.name : null;
});

</script>
