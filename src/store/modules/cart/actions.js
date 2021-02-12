export default {
  addCartItem({ commit, state }, cartItem) {
    const newCartItem = {
      ...cartItem,
      quantity: 1,
    };
    let cartItemExists = false;

    state.cart.map((cartItem) => {
      if (cartItem.id === newCartItem.id) {
        cartItem.quantity++;
        cartItemExists = true;
      }
    });
    if (!cartItemExists) {
      commit("updateCart", newCartItem);
    }
  },
  removeCartItem({ commit, state }, productId) {
    state.cart.map((product) => {
      const cartIndexToRemove = state.cart.findIndex(
        (product) => product.id === productId
      );
      state.cart.splice(cartIndexToRemove, 1);
    });
  },
};
