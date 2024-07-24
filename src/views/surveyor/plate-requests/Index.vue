<script setup>
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import Button from "@/components/Button.vue";
import Select from "@/components/Select.vue";

const statusArray = ["Pending Approval", "Approved", "Rejected"];
</script>

<template>
  <main class="_container py-8">
    <h1>Plate Requests</h1>
    <Breadcrumbs
      :items="[{ label: 'Plate Requests', to: '/plate-requests' }]"
    />
    <div id="action-panel">
      <div
        class="flex items-center justify-center sm:justify-normal gap-x-1 w-full"
      >
        <Button size="xs" color="secondary" pill link>
          <i class="bi bi-plus-lg text-lg md:text-sm"></i>
          <span class=""> Add </span>
        </Button>
        <Button size="xs" color="danger" pill>
          <i class="bi bi-trash3 text-lg md:text-sm"></i>
          <span class=""> Delete </span>
        </Button>
      </div>
      <Select label="Filter:" id="status" :options="statusArray" />
    </div>
  </main>
</template>

<style scoped>
#action-panel {
  @apply flex items-center justify-between gap-x-8 gap-y-6 p-8 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700;
}

select {
  @apply w-full;
}
</style>
