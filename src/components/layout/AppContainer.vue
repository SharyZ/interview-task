<template>
  <div class="app-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "app-container",
};
</script>

<style scoped>
.app-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}
</style>
