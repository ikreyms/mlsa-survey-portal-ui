<script setup>
import { RouterLink } from "vue-router";

defineProps({
  to: {
    type: String,
    default: "#",
  },
  label: {
    type: String,
    default: "Label",
  },
  isFirst: Boolean,
  isLast: Boolean,
});
</script>

<template>
  <li v-if="isFirst" class="inline-flex items-center">
    <RouterLink
      to="/"
      class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-400 dark:hover:text-white"
    >
      <i class="bi bi-house-fill me-2.5"></i>
      Home
    </RouterLink>
  </li>
  <li v-if="isLast" aria-current="page">
    <div class="flex items-center gap-x-2">
      <i class="bi bi-caret-right-fill text-gray-400"></i>
      <span
        class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400"
      >
        {{ label }}
      </span>
    </div>
  </li>
  <li v-else>
    <div class="flex items-center">
      <i class="bi bi-caret-right-fill text-gray-400"></i>
      <RouterLink
        :to="to"
        class="ms-1 text-sm font-medium text-gray-700 hover:text-primary md:ms-2 dark:text-gray-400 dark:hover:text-white"
      >
        {{ label }}
      </RouterLink>
    </div>
  </li>
</template>

<style scoped>
a {
  border-radius: 0.3rem;
}
</style>
