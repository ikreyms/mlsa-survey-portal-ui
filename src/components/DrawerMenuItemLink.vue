<script setup>
import { RouterLink } from "vue-router";

defineProps({
  to: {
    type: String,
    default: "#",
  },
});

const emit = defineEmits(["close-drawer"]);

const handleClick = () => {
  emit("close-drawer");
};
</script>

<template>
  <RouterLink :to="to" @click="handleClick">
    <slot />
  </RouterLink>
</template>

<style scoped>
a {
  @apply flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700;
}
</style>
