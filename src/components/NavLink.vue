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
  </RouterLink>
</template>

<style>
a {
  @apply block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white-800;
}
</style>
