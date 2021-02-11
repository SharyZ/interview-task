<template>
  <div class="stock-grid">
    [grid]
  </div>
</template>

<script>
import StockFilter from "@/components/StockFilter";

export default {
  name: "stock-grid",
  components: {
    "stock-filter": StockFilter,
  },
};
</script>

<style scoped>
.stock-grid {
  padding: 2em;
  flex-grow: 1;
}
</style>
