<script>
import { useCart } from '~/stores/useCart'

export default {
  setup() {
    const cart = useCart()

    return {
      cart
    }
  },
}
</script>

<template>
  <div class="cart-header">
    <span>Your cart:</span>
    <router-link to="/cart">{{ cart.cartCount }}</router-link>
    <span>item{{ cart.cartCount > 0 ? 's' : '' }}</span>
  </div>
</template>

<style scoped>
.cart-header {
  font-size: 1.5rem;
  margin-inline: 1rem;
  text-align: right;
}
</style>
