<script setup>
defineProps({
  label: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  id: {
    required: true,
    type: String,
  },
  checked: {
    required: false,
    type: Boolean,
  },
});
</script>

<template>
  <label :for="id" class="group inline-flex items-center cursor-pointer">
    <div id="checkbox-wrapper">
      <input
        :id="id"
        type="checkbox"
        class="group-hover:cursor-pointer"
        :name="name"
        :checked="checked"
      />
    </div>
    <span v-if="label">{{ label }}</span>
  </label>
</template>

<style scoped>
#checkbox-wrapper {
  /* @apply bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500; */
  @apply bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(175,175,175,0.1)] hover:bg-[rgba(0,0,0,0.2)] dark:hover:bg-[rgba(201,201,201,0.17)];
  @apply cursor-pointer;
  @apply p-[0.6rem];
  @apply rounded-full;
  @apply inline-flex items-center justify-center;
}

span {
  @apply ms-2 text-sm font-medium text-gray-900 dark:text-gray-300;
}
</style>
