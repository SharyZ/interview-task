<template>
  <div class="stock">
    <div class="stock-filter"></div>
    <div v-if="isLoading">
      <p>Loading...</p>
    </div>
    <div v-else class="stock-grid">
      <ui-card v-for="product in sunglasses" :key="product.id">
        <template #image>
          <img :src="product.imageUrl" :alt="product.name" />
        </template>
        <template #body>
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
        </template>
        <template #footer>
          <div class="price">{{ product.price }} сум</div>
          <div class="actions">
            <div v-if="product.inStock">
              <ui-button @click="addToCart(product)">
                <template #icon>
                  <i class="bx bxs-cart-add bx-sm"></i>
                </template>
                Add to cart
              </ui-button>
            </div>
            <div v-else>
              <ui-button>
                <template #icon>
                  <i class="bx bxs-cart-add bx-sm"></i>
                </template>
                Out of stock
              </ui-button>
            </div>
          </div>
        </template>
      </ui-card>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

import StockFilter from "@/components/StockFilter";
import StockGrid from "@/components/StockGrid";

export default {
  name: "stock",
  components: {
    "stock-filter": StockFilter,
    "stock-grid": StockGrid,
  },
  methods: {
    ...mapActions("eCommerceModule", ["getAllSunglasses"]),
    addToCart(product) {
      this.$store.dispatch("cartModule/addCartItem", product);
    },
  },
  computed: {
    ...mapState({
      sunglasses: (state) => state.eCommerceModule.sunglasses,
      isLoading: (state) => state.eCommerceModule.isLoading,
      isError: (state) => state.eCommerceModule.isError,
    }),
    ...mapGetters("eCommerceModule", ["getSunglassesDataLength"]),
  },
  mounted() {
    this.getAllSunglasses();
  },
};
</script>

<style scoped>
.stock-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  margin: 2rem 1rem;
}
</style>
