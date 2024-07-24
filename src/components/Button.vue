<script setup>
import { RouterLink } from "vue-router";

defineProps({
  type: {
    type: String,
    default: "button",
  },
  size: {
    type: String,
    default: "base",
  },
  color: {
    type: String,
    default: "primary",
  },
  pill: {
    type: Boolean,
    default: false,
  },
  link: {
    type: Boolean,
    default: false,
  },
  to: {
    type: String,
    default: "#",
  },
});
</script>
<template>
  <component
    :is="link ? 'RouterLink' : 'button'"
    :to="to"
    :type="type"
    class="btn"
    :class="{
      xs: size === 'xs',
      sm: size === 'sm',
      base: size === 'base',
      lg: size === 'lg',
      xl: size === 'xl',
      primary: color === 'primary',
      secondary: color === 'secondary',
      danger: color === 'danger',
      'rounded-full': pill,
      'rounded-lg': !pill,
    }"
  >
    <slot />
  </component>
</template>

<style scoped>
.btn {
  @apply font-medium text-center inline-flex items-center focus:ring-2 focus:ring-offset-1 focus:outline-none border-2 border-transparent active:scale-95 transition-all duration-150;
}

.xs {
  @apply px-3 py-2 text-xs gap-x-1;
}

.sm {
  @apply px-3 py-2 text-sm gap-x-2;
}

.base {
  @apply px-5 py-2.5 text-sm gap-x-2;
}

.lg {
  @apply px-5 py-3 text-base gap-x-2;
}

.xl {
  @apply px-6 py-3.5 text-base gap-x-2;
}

.primary {
  @apply text-white 
  bg-primary border-primary
  hover:bg-primary-dark hover:border-primary-dark
  focus:ring-primary-light dark:bg-primary-light dark:border-primary-light dark:hover:bg-primary dark:hover:border-primary dark:focus:ring-primary-dark;
}

.secondary {
  @apply text-primary
  bg-transparent border-primary
  hover:bg-primary hover:text-white
  focus:ring-primary-light dark:bg-transparent dark:hover:bg-primary dark:focus:ring-primary-dark;
}

.danger {
  @apply text-red-700
  bg-transparent border-red-700
  hover:bg-red-700 hover:text-white
  focus:ring-red-300 dark:bg-transparent dark:hover:bg-red-700 dark:focus:ring-red-300;
}
</style>
