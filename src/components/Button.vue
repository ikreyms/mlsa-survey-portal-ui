<script setup>
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
});
</script>
<template>
  <button
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
      'rounded-full': pill,
      'rounded-lg': !pill,
    }"
  >
    <slot />
  </button>
</template>

<style scoped>
.btn {
  @apply font-medium text-center inline-flex items-center gap-x-2 focus:ring-2 focus:ring-offset-1 focus:outline-none border-2 border-transparent;
}

.xs {
  @apply px-3 py-2 text-xs;
}

.sm {
  @apply px-3 py-2 text-sm;
}

.base {
  @apply px-5 py-2.5 text-sm;
}

.lg {
  @apply px-5 py-3 text-base;
}

.xl {
  @apply px-6 py-3.5 text-base;
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
</style>
