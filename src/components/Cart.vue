<template>
  <div class="cart">
    <div class="title">
      <h3>cart</h3>
    </div>
    <ol class="cart-list">
      <li v-for="item in cart" :key="item.id" class="cart-list-item">
        <div>
          <h4>{{ item.name }}</h4>
          <p>{{ item.price }}</p>
        </div>
        <div>
          <h4>{{ item.price * item.quantity }} сум</h4>
        </div>
        <div>
          <ui-button @click="deleteFromCart(item.id)">
            <template #icon>
              <i class="bx bxs-trash bx-sm"></i>
            </template>
            Remove from cart
          </ui-button>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "cart",
  computed: {
    ...mapState({
      cart: (state) => state.cartModule.cart,
    }),
    ...mapGetters("cartModule", ["getCartLength"]),
  },
  methods: {
    deleteFromCart(productId) {
      this.$store.dispatch("cartModule/removeCartItem", productId);
    },
  },
};
</script>

<style scoped>
.cart {
  margin: 2rem 1rem;
}

.title {
  text-align: center;
  margin-bottom: 20px;
}

.title h3 {
  text-transform: uppercase;
}

.cart-list {
  width: 50%;
  margin: 0 auto;
}

.cart-list-item {
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 10, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
