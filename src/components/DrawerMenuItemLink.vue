<script setup>
import { RouterLink } from "vue-router";

defineProps({
  to: {
    type: String,
    default: "#",
  },
});
</script>

<template>
  <RouterLink :to="to">
    <slot />
    <!-- <i class="bi bi-speedometer2"></i>
    <span class="ms-3">Dashboard</span> -->
  </RouterLink>
</template>

<style scoped>
a {
  @apply flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700;
}
</style>
