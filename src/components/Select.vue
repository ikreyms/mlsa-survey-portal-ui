<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import NavDropdownLink from "./NavDropdownLink.vue";

const dropdownOpen = ref(false);

defineProps({
  options: Array,
  defaultOption: String,
});

const toggleDropdownOpen = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const closeDropdown = () => {
  dropdownOpen.value = false;
};

const handleClickOutside = (event) => {
  if (
    !event.target.closest("#dropdown") &&
    !event.target.closest("#selectDropdownDefaultButton")
  )
    closeDropdown();
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div class="relative">
    <button
      size="sm"
      id="selectDropdownDefaultButton"
      data-dropdown-toggle="dropdown"
      class=""
      type="button"
      @click="toggleDropdownOpen"
    >
      {{ defaultOption }}
      <i class="bi bi-caret-down-fill"></i>
    </button>
    <div id="dropdown" :class="{ hidden: !dropdownOpen }">
      <ul aria-labelledby="navDropdownDefaultButton">
        <li v-for="(option, index) in options" :key="index">
          <NavDropdownLink>{{ option }}</NavDropdownLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
#selectDropdownDefaultButton {
  @apply text-sm font-normal rounded-lg px-3 py-2.5 inline-flex items-center gap-x-2;
  @apply text-black-800 dark:text-white-800;
  @apply bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600;
  @apply border-2 border-gray-300 dark:border-gray-500 focus:outline-none focus:border-primary dark:focus:border-primary-light;
}

#dropdown {
  @apply absolute top-[110%] shadow-lg border dark:border-gray-500 right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg w-44 dark:bg-gray-700;
}

#dropdown > ul {
  @apply py-2 text-sm text-gray-700 dark:text-gray-200;
}
</style>
