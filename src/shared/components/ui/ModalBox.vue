<script lang="ts" setup>
defineProps({
  open: {
    type: Boolean,
  },
  title: {
    type: String,
  },
  autoWidth: {
    type: Boolean,
  },
});
</script>
<template>
  <teleport to="body">
    <transition name="modal-body">
      <div
        v-if="open"
        role="dialog"
        aria-labelledby="Modal presentation"
        aria-describedby="Modal in full screen"
        aria-modal="true"
        class="fixed top-0 left-0 z-50 flex w-full h-full overflow-y-auto bg-opacity-40 bg-black backdrop-modal"
      >
        <div
          class="m-auto overflow-hidden bg-white rounded-lg shadow-2xl"
          :class="[autoWidth ? '' : 'w-11/12 sm:w-2/3']"
        >
          <div class="bg-white flex" aria-controls="true">
            <slot></slot>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style lang="scss" scoped>
.backdrop-modal {
  z-index: 300;
}
.modal-body-enter-active {
  opacity: 1;
  transition: 0.2s;
}
.modal-body-enter-from,
.modal-body-leave-to {
  opacity: 0;
  transition: 0.2s;
}
.modal-body-enter-leave {
  transition: 0.2s;
}
</style>
