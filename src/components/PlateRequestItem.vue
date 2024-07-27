<script setup>
import { ref } from "vue";
import Checkbox from "./Checkbox.vue";
import Indicator from "./Indicator.vue";
import { usePlateRequestsStore } from "@/store";

const props = defineProps({
  plateRequest: Object,
});

const plateRequestsStore = usePlateRequestsStore();

const isCheckboxChecked = ref(false);

const handleCheckboxChange = (id) => {
  isCheckboxChecked.value = !isCheckboxChecked.value;
  // if (!isCheckboxChecked) {
  //   if (plateRequestsStore.ids.includes(id)) {
  //     console.log("id is there");
  //     plateRequestsStore.removeSelectedId(id);
  //   }
  //   plateRequestsStore.removeSelectedId(id);
  // } else {
  //   plateRequestsStore.addSelectedId(id);
  // }
  console.log(id);
};
</script>

<template>
  <div class="item">
    <Checkbox
      @change="handleCheckboxChange(plateRequest.id)"
      :checked="isCheckboxChecked"
      :id="String(plateRequest.id)"
    />
    <p class="flex-1 font-bold text-primary dark:text-primary-light">
      {{ plateRequest.island }}
      <Indicator
        :label="plateRequest.status"
        :color="
          plateRequest.status === 'Approved'
            ? 'green'
            : plateRequest.status === 'Rejected'
            ? 'red'
            : plateRequest.status === 'Pending Approval'
            ? 'blue'
            : ''
        "
      />
    </p>
    <p
      class="text-gray-600 dark:text-gray-400 flex-shrink-0 min-w-14 text-right"
    >
      {{ plateRequest.submittedOn }}
    </p>
  </div>
</template>

<style scoped>
.item {
  @apply flex items-center justify-between gap-x-2;
  @apply pl-3 pr-4 py-3;
  @apply bg-white dark:bg-gray-800;
  @apply border border-gray-200 dark:border-gray-700;
  @apply shadow-md;
  @apply border-b-2 hover:cursor-pointer hover:border-b-gray-400 dark:hover:border-b-gray-500;
}

p {
  @apply text-sm p-0;
  @apply rounded-md;
  @apply inline;
}

.selected {
  @apply bg-[rgba(171,179,178,0.08)] dark:bg-[rgba(123,177,176,0.1)];
}
</style>
