<script setup>
import { computed } from "vue";

const props = defineProps({
  color: String,
  label: String,
});

const colorMap = {
  red: {
    bg: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    dot: "bg-red-500",
  },
  green: {
    bg: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    dot: "bg-green-500",
  },
  blue: {
    bg: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    dot: "bg-blue-500",
  },
  gray: {
    bg: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    dot: "bg-gray-500",
  },
};

const backgroundColorClass = computed(
  () => colorMap[props.color]?.bg || colorMap.gray.bg
);
const dotColorClass = computed(
  () => colorMap[props.color]?.dot || colorMap.gray.dot
);
</script>

<template>
  <span
    class="inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full"
    :class="backgroundColorClass"
  >
    <span class="w-2 h-2 me-1 rounded-full" :class="dotColorClass"></span>
    {{ label }}
  </span>
</template>
