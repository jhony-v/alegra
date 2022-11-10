<script lang="ts" setup></script>
<template>
  <div class="spinner" role="progressbar" aria-label="Loading"></div>
</template>
<style lang="scss" scoped>
.spinner {
  width: 20px;
  margin: auto;
  height: 20px;
  border-radius: 100%;
  border: 3px solid var(--primary-dark);
  border-left-color: transparent;
  animation: 0.5s spinner infinite linear;
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
