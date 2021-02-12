<template>
  <button>
    <span class="icon">
      <slot name="icon"></slot>
    </span>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ui-button",
};
</script>

<style scoped>
button {
  display: flex;
  align-items: center;
  background-color: rgb(26, 92, 255);
  color: rgb(255, 255, 255);
  box-shadow: 0 10px 20px rgba(26, 92, 255, 0.5);
  font-weight: 600;
  border-radius: 4px;
  padding: 14px 22px;
  border: none;
  text-transform: uppercase;
  outline: none;
  transition: all 0.3s ease;
}

button:hover {
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(26, 92, 255, 0.7);
}

.icon {
  margin-right: 8px;
}
</style>
