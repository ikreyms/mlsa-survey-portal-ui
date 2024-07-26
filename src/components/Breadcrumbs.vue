<script setup>
import BreadcrumbItem from "./BreadcrumbItem.vue";

defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <nav aria-label="Breadcrumb">
    <ol
      class="px-4 inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
    >
      <BreadcrumbItem
        v-for="(item, index) in items"
        :key="index"
        :label="item.label"
        :to="item.to"
        :isFirst="index === 0"
        :isLast="index === items.length - 1"
      />
    </ol>
  </nav>
</template>
