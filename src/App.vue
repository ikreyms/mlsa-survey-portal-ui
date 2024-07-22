<script setup>
import { RouterView } from "vue-router";
import Nav from "./components/Nav.vue";
import SecondaryNav from "./components/SecondaryNav.vue";
</script>

<template>
  <Nav />
  <SecondaryNav />
  <RouterView />
</template>

<style scoped></style>
