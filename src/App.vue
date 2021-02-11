<template>
  <div id="app">
    <app-layout>
      <stock></stock>
    </app-layout>
  </div>
</template>

<script>
import Stock from "@/components/Stock";

export default {
  name: "App",
  components: {
    stock: Stock,
  },
};
</script>
