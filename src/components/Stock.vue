<template>
  <div class="stock">
    <stock-filter></stock-filter>
    <stock-grid></stock-grid>
  </div>
</template>

<script>
import StockFilter from "@/components/StockFilter";
import StockGrid from "@/components/StockGrid";

export default {
  name: "stock",
  components: {
    "stock-filter": StockFilter,
    "stock-grid": StockGrid,
  },
};
</script>

<style scoped>
.stock {
  display: flex;
}
</style>
