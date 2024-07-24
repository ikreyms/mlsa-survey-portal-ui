<script setup>
defineProps({
  label: String,
  id: String,
  name: {
    type: String,
    required: false,
  },
  options: Array,
  defaultOption: {
    type: String,
    default: "Not selected",
  },
});
</script>

<template>
  <div class="inline-flex items-center gap-x-2 gap-y-2">
    <label :for="id">{{ label }}</label>
    <select :id="id">
      <option selected>{{ defaultOption }}</option>
      <option v-for="(option, index) in options" :key="index" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<style scoped>
label {
  @apply block text-sm font-medium text-gray-900 dark:text-white;
}

select {
  @apply min-w-min
  bg-gray-50 border-2 border-gray-300 text-gray-900 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary
  text-sm rounded-lg outline-none  block w-full p-2.5 appearance-none;
  background: url('data:image/svg+xml;utf8,<svg fill="none" stroke="%23B1B5C4" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>')
    no-repeat;
  background-position: right 0.5rem center;
  background-size: 1rem;
  @apply bg-gray-50;
}
</style>
