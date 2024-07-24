<script setup>
import { RouterLink, useRoute } from "vue-router";
import { ref, watch } from "vue";

const props = defineProps({
  to: {
    type: String,
    default: "#",
  },
});

const route = useRoute();

const currentUrl = ref(route.path);

watch(route, () => {
  currentUrl.value = route.path;
});
</script>

<template>
  <RouterLink
    :to="to"
    :class="{ active: currentUrl.startsWith(to) }"
    :aria-current="currentUrl.startsWith(to) ? 'page' : undefined"
  >
    <slot />
  </RouterLink>
</template>

<style scoped>
a {
  @apply font-medium text-black-800 dark:text-white-700 border-b-2 border-b-transparent transition-colors duration-300;
}

a:hover {
  @apply bg-transparent border-primary-light dark:border-primary;
}

.active {
  @apply border-primary dark:border-primary-light;
}
</style>
