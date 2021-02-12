<template>
  <div class="app-hero">
    <h2>{{ title }}</h2>
    <p>{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  name: "app-hero",
  props: {
    title: {
      type: String,
      default: () => "",
      required: true,
    },
    subtitle: {
      type: String,
      default: () => "",
      required: true,
    },
  },
};
</script>

<style scoped>
.app-hero {
  text-align: center;
  padding: 2.5rem 5rem;
  background-image: linear-gradient(to right top, #22d3ee, #0369a1);
  color: #f8fafc;
}

.app-hero h2 {
  margin-bottom: 1rem;
}

.app-hero p {
  margin-bottom: 1.5rem;
}
</style>
