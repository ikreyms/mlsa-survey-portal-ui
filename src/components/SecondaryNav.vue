<script setup>
import { ref } from "vue";
import NavLink from "./NavLink.vue";
import Drawer from "./Drawer.vue";
import { useDrawerStore } from "@/store";

const drawerStore = useDrawerStore();
// const drawerOpen = ref(false);
// const toggleDrawer = () => {
//   drawerOpen.value = !drawerOpen.value;
// };

// const closeDrawer = () => {
//   drawerOpen.value = false;
// };
</script>

<template>
  <div id="wrapper">
    <div class="_container">
      <nav>
        <ul>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/plate-requests">Plate Requests</NavLink></li>
          <li><NavLink to="/csr-submissions">CSR Submissions</NavLink></li>
        </ul>
        <button id="navDrawerTriggerButton" @click="drawerStore.toggleDrawer">
          <i
            class="bi bi-list text-2xl text-primary dark:text-primary-light"
          ></i>
        </button>
      </nav>
    </div>
    <Drawer />
  </div>
</template>

<style scoped>
#wrapper {
  @apply bg-white dark:bg-gray-700 shadow-md relative;
}

h5 {
  @apply text-base font-semibold text-gray-500 uppercase dark:text-gray-400;
}

nav {
  @apply flex items-center justify-between;
}

#navDrawerTriggerButton {
  @apply md:hidden ml-auto hover:scale-110 transition-transform duration-200;
}

ul {
  @apply hidden md:flex items-center;
}
</style>
