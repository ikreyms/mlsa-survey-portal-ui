import { defineStore } from "pinia";

export const useDrawerStore = defineStore("drawer", {
  state: () => ({
    drawerOpen: false,
  }),
  actions: {
    toggleDrawer() {
      this.drawerOpen = !this.drawerOpen;
    },
    closeDrawer() {
      this.drawerOpen = false;
    },
  },
});

export const usePlateRequestsStore = defineStore("plateRequests", {
  state: () => ({
    plateRequests: [],
    selectedIds: [],
  }),
  actions: {
    setPlateRequests(plateRequests) {
      this.plateRequests = plateRequests;
      this.selectedIds = plateRequests
        .filter((request) => request.selected)
        .map((request) => request.id);
    },
    toggleSelectAll(value) {
      this.plateRequests.forEach((request) => {
        request.selected = value;
      });
      this.selectedIds = value
        ? this.plateRequests.map((request) => request.id)
        : [];
    },
    toggleSelect(id, value) {
      const plateRequest = this.plateRequests.find(
        (request) => request.id === id
      );
      if (plateRequest) {
        plateRequest.selected = value;
        if (value) {
          if (!this.selectedIds.includes(id)) {
            this.selectedIds.push(id);
          }
        } else {
          this.selectedIds = this.selectedIds.filter(
            (selectedId) => selectedId !== id
          );
        }
      }
    },
  },
  getters: {
    allSelected(state) {
      return state.plateRequests.every((request) => request.selected);
    },
  },
});
