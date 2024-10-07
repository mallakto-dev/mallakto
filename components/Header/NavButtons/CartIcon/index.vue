<script setup lang="ts">
import { storeToRefs } from 'pinia'

const cartStore = useCartStore()

const { cartTotal } = storeToRefs(cartStore)


</script>

<template>
  <div>
    <NuxtLink
      to="/cart"
      aria-label="Перейти в корзину с покупками"
    >
      <Icon
      size="2em"
        name="fa6-solid:cart-shopping"
      />

        <span class="counter">{{ cartTotal }}</span>

    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
div {
  display: inline-flex;
  width: 3.5rem;
  margin: 0;
  text-align: center;
  position: relative;

  @media (min-width: 768px) {
    z-index: 1;
    margin: 0;
  }
}

.counter {
  line-height: 1.5;
  height: 1.4rem;
  width: 1.4rem;
  background-color: #2b755e;
  border-radius: 50%;
  display: inline-block;
  color: #fffdfa;
  position: absolute;
  top: -8px;
  left: 20px;
}
</style>