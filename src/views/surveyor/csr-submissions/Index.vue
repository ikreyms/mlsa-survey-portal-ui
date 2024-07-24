<script setup>
import Breadcrumbs from "@/components/Breadcrumbs.vue";
</script>

<template>
  <main class="_container py-8">
    <h1>CSR Submissions</h1>
    <Breadcrumbs
      class="mt-3"
      :items="[{ label: 'CSR Submissions', to: '/csr-submissions' }]"
    />
  </main>
</template>
