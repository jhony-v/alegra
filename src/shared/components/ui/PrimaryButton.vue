<script lang="ts" setup>
defineProps({
  asAvatar: {
    type: Boolean,
  },
  invert: {
    type: Boolean,
  },
});
</script>
<template>
  <button
    :class="[
      'bg-primary p-1 flex items-center justify-center text-white disabled:cursor-not-allowed active:scale-125 flex-none transition disabled:opacity-90 disabled:bg-primary-dark disabled:scale-100',
      asAvatar ? 'rounded-full w-7 h-7' : 'rounded-lg',
      invert && 'bg-gray-900 text-white py-0 px-1',
    ]"
  >
    <slot></slot>
  </button>
</template>
