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
      'bg-primary p-2 flex items-center justify-center text-white disabled:cursor-not-allowed active:scale-125 flex-none transition disabled:scale-100 disabled:rotate-0 disabled:bg-gray-300 active:bg-primary-light',
      asAvatar ? 'rounded-full w-9 h-9' : 'rounded-lg',
      invert && 'bg-gray-900 text-white py-1',
    ]"
  >
    <slot></slot>
  </button>
</template>
