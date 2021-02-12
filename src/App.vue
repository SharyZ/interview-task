<template>
  <div id="app">
    <app-layout>
      <stock></stock>
      <cart></cart>
    </app-layout>
  </div>
</template>

<script>
import Stock from "@/components/Stock";
import Cart from "@/components/Cart";

export default {
  name: "App",
  components: {
    stock: Stock,
    cart: Cart,
  },
};
</script>
