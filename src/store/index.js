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
    ids: [],
    isAllSelected: false,
  }),
  actions: {
    addSelectedId(id) {
      if (!this.ids.includes(id)) {
        this.ids.push(id);
      }
    },
    removeSelectedId(id) {
      const index = this.ids.indexOf(id);
      if (index > -1) {
        this.ids.splice(index, 1);
      }
    },
    clearSelection() {
      this.ids = [];
      this.isAllSelected = false;
    },
    selectAll() {
      this.isAllSelected = true;
    },
  },
});
