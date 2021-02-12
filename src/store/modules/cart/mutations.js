export default {
  updateCart(state, payload) {
    state.cart = [...state.cart, payload];
  },
};
