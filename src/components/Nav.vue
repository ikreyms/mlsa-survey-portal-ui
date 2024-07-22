<script setup>
import { RouterLink } from "vue-router";
import { ref, onMounted, onBeforeUnmount } from "vue";
import NavLink from "./NavLink.vue";

const dropdownOpen = ref(false);

const toggleDropdownOpen = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const closeDropdown = () => {
  dropdownOpen.value = false;
};

const handleClickOutside = (event) => {
  if (
    !event.target.closest("#dropdown") &&
    !event.target.closest("#navDropdownDefaultButton")
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
  <header>
    <div class="_container flex items-center justify-between">
      <RouterLink id="logo" to="/">MLSA Survey Portal</RouterLink>
      <div class="relative">
        <button
          id="navDropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          @click="toggleDropdownOpen"
        >
          <i class="bi bi-person-circle text-2xl text-white"></i>
        </button>
        <div id="dropdown" :class="{ hidden: !dropdownOpen }">
          <div id="user-info">
            <div>Hussain Neesham</div>
            <div class="font-medium truncate">neeni@mlsa.gov.mv</div>
          </div>
          <ul aria-labelledby="navDropdownDefaultButton">
            <li>
              <NavLink>Dashboard</NavLink>
            </li>
            <li>
              <NavLink>Account Settings</NavLink>
            </li>
          </ul>
          <div class="py-2">
            <RouterLink id="logout-link" to="#">Log out</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  @apply bg-primary py-2;
}

#logo {
  @apply text-white-700 font-bold text-lg hover:bg-transparent;
}

#navDropdownDefaultButton {
  @apply hover:scale-110 transition-transform duration-200;
}

#dropdown {
  @apply absolute top-full shadow-lg right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg w-44 dark:bg-gray-700;
}

#user-info {
  @apply px-4 py-3 text-sm text-gray-900 dark:text-white;
}

#dropdown > ul {
  @apply py-2 text-sm text-gray-700 dark:text-gray-200;
}

#logout-link {
  @apply block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white;
}
</style>
