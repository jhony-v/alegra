<template>
  <teleport to="body">
    <transition name="modal-body">
      <div
        v-if="open"
        class="fixed top-0 left-0 z-50 flex w-full h-full overflow-y-auto bg-opacity-40 bg-black backdrop-modal"
      >
        <div
          role="alert"
          aria-label="Modal"
          class="m-auto overflow-hidden bg-white rounded-lg w-11/12 sm:w-2/3 shadow-2xl"
        >
          <div class="bg-white flex">
            <slot></slot>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
defineProps({
  open: {
    type: Boolean,
  },
  title: {
    type: String,
  },
});
</script>

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
