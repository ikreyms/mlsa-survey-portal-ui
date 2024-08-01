<script setup>
import { ref, onMounted } from "vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import Button from "@/components/Button.vue";
import Select from "@/components/Select.vue";
import Checkbox from "@/components/Checkbox.vue";
import PlateRequestItem from "@/components/PlateRequestItem.vue";
import { usePlateRequestsStore } from "@/store";

const filterOn = ref(false);

const toggleFilter = () => {
  filterOn.value = !filterOn.value;
};

const plateRequestsStore = usePlateRequestsStore();

const toggleSelectAll = (value) => {
  plateRequestsStore.toggleSelectAll(value);
};
const statusArray = ["Pending Approval", "Approved", "Rejected"];

const plateRequests = [
  {
    id: 1,
    island: "R. Innamaadhoo (LD1234)",
    client: "Maldives Transport and Contracting Company Plc.",
    surveyor: "Mohamed Saeed",
    submittedOn: "Jul 24",
    status: "Approved",
    selected: false,
  },
  {
    id: 2,
    island: "R. Dhuvaafaru (LD1362)",
    client: "Road Development Corporation",
    surveyor: "Mohamed Ikram",
    submittedOn: "Aug 02",
    status: "Pending Approval",
    selected: false,
  },
  {
    id: 3,
    island: "R. Innamaadhoo (LD1234)",
    client: "Maldives Transport and Contracting Company Plc.",
    surveyor: "Mohamed Saeed",
    submittedOn: "Jul 24",
    status: "Approved",
    selected: false,
  },
  {
    id: 4,
    island: "R. Innamaadhoo (LD1234)",
    client: "Maldives Transport and Contracting Company Plc.",
    surveyor: "Mohamed Saeed",
    submittedOn: "Jul 24",
    status: "Rejected",
    selected: false,
  },
  {
    id: 5,
    island: "K. Thulusdhoo Irumathee Huraagan'du (LD2434)",
    client: "Epoch Associates",
    surveyor: "Ahmed Nashid",
    submittedOn: "Jun 12",
    status: "Pending Approval",
    selected: false,
  },
];

onMounted(() => {
  plateRequestsStore.setPlateRequests(plateRequests);
});
</script>

<template>
  <main class="_container px-4 py-6">
    <h2 class="px-4">Plate Requests</h2>
    <Breadcrumbs
      :items="[{ label: 'Plate Requests', to: '/plate-requests' }]"
    />
    <span v-for="id in plateRequestsStore.selectedIds"> {{ id }}</span>
    <div id="panel">
      <div
        class="bg-gray-100 dark:bg-gray-700 p-3 flex items-center justify-between gap-x-4 flex-wrap gap-y-3"
      >
        <div class="flex items-center gap-x-4">
          <Checkbox
            :checked="plateRequestsStore.allSelected"
            @update:checked="toggleSelectAll"
            id="selectAllCheckbox"
          />
          <div class="inline-flex items-center gap-x-1">
            <Button size="xs" color="secondary" pill title="Add">
              <i class="bi-plus-lg text-xs"></i>
            </Button>
            <Button size="xs" color="secondary" pill title="Delete">
              <i class="bi bi-trash text-xs"></i>
            </Button>
            <Button
              @click="toggleFilter"
              size="xs"
              :color="filterOn ? 'primary' : 'secondary'"
              pill
              :title="filterOn ? 'Turn off filter' : 'Turn on filter'"
            >
              <i class="bi bi-funnel"></i>
            </Button>
          </div>
        </div>
      </div>
      <div id="filter" v-if="filterOn" class="">Filter</div>

      <div id="plate-requests-preview">
        <PlateRequestItem
          v-for="plateRequest in plateRequestsStore.plateRequests"
          :key="plateRequest.id"
          :plateRequest="plateRequest"
          :selected="plateRequestsStore.isAllSelected"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
#panel {
  @apply mt-3;
  @apply pt-0 pb-8 sm:pb-6;
  @apply bg-white dark:bg-gray-800;
  @apply border border-gray-200 dark:border-gray-700;
  @apply rounded-lg shadow-md;
  @apply overflow-x-hidden;
}

#filter {
  @apply px-4 pt-2 pb-4 bg-gray-50 dark:bg-gray-700;
}

#plate-requests-preview {
  @apply h-[70vh];
}
/* select {
  @apply w-full;
} */
</style>
