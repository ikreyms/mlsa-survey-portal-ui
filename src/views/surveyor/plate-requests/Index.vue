<script setup>
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import Button from "@/components/Button.vue";
</script>

<template>
  <main class="_container py-8">
    <h1>Plate Requests</h1>
    <Breadcrumbs
      :items="[{ label: 'Plate Requests', to: '/plate-requests' }]"
    />
    <div id="action-panel">
      <div class="flex items-center gap-x-1">
        <Button size="xs" color="secondary" pill>
          <i class="bi bi-plus-lg"></i>
          Add
        </Button>
        <Button size="xs" color="danger" pill>
          <i class="bi bi-x"></i>
          Delete
        </Button>
      </div>
      <div class="inline-flex items-center gap-x-2">
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Filter:</label
        >
        <select
          id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
    </div>
  </main>
</template>

<style>
#action-panel {
  @apply flex items-center justify-between w-full p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700;
}
</style>
