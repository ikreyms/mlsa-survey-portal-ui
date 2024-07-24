<script setup>
import { computed, onMounted, onBeforeUnmount } from "vue";
import DrawerMenuItemLink from "./DrawerMenuItemLink.vue";

const props = defineProps({
  drawerToggle: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["drawer-open-on-sec-nav"]);

const drawerOpen = computed(() => props.drawerToggle);

const closeDrawer = () => {
  emit("drawer-close-on-sec-nav");
};

const handleClickOutside = (event) => {
  if (
    !event.target.closest("#drawer-navigation") &&
    !event.target.closest("#navDrawerTriggerButton")
  ) {
    closeDrawer();
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div id="drawer-overlay" :class="{ hidden: !drawerOpen }"></div>
  <div
    id="drawer-navigation"
    tabindex="-1"
    aria-labelledby="drawer-navigation-label"
    :class="{ '-translate-x-full': !drawerOpen }"
  >
    <h5 id="drawer-navigation-label">Menu</h5>
    <button
      @click="closeDrawer"
      type="button"
      id="close-drawer-button"
      data-drawer-hide="drawer-navigation"
      aria-controls="drawer-navigation"
    >
      <i class="bi bi-x text-2xl"></i>
      <span class="sr-only">Close menu</span>
    </button>
    <div class="py-4 overflow-y-auto">
      <ul class="space-y-2 font-medium">
        <li class="w-full">
          <DrawerMenuItemLink @close-drawer="closeDrawer" to="/dashboard">
            <i class="bi bi-speedometer2"></i>
            <span class="ms-3">Dashboard</span>
          </DrawerMenuItemLink>
          <DrawerMenuItemLink @close-drawer="closeDrawer" to="/plate-requests">
            <i class="bi bi-123"></i>
            <span class="ms-3">Plate Requests</span>
          </DrawerMenuItemLink>
          <DrawerMenuItemLink @close-drawer="closeDrawer" to="/csr-submissions">
            <i class="bi bi-journals"></i>
            <span class="ms-3">CSR Submissions</span>
          </DrawerMenuItemLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
#drawer-overlay {
  @apply fixed inset-0 bg-[rgba(0,0,0,0.5)] z-20;
}
#drawer-navigation {
  /* -translate-x-full; */
  @apply fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-64 dark:bg-gray-800;
}

#drawer-navigation > button {
  @apply text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white;
}
</style>
