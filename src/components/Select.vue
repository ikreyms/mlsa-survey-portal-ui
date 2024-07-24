<script setup>
defineProps({
  options: Array,
});
</script>

<template>
  <label
    for="countries"
    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >Filter:</label
  >
  <select
    id="countries"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="option"
    ></option>
  </select>
</template>
