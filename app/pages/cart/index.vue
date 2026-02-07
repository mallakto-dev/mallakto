<script setup>
const cartStore = useCartStore();

const { cart, totalPrice } = toRefs(cartStore);

definePageMeta({
  title: "Корзина",
  description: "Корзина с товарами",
});

const totalInRubles = computed(() => priceToRubles(totalPrice.value));
</script>

<template>
  <main>
    <section>
      <h2>Корзина</h2>
      <p v-if="!cart.length">Корзина пуста</p>
      <div v-if="cart.length" class="cart__content">
        <InlineProduct v-for="item in cart" :key="item.id" :item="item" />
      </div>
      <div class="cart__total">
        <p>Всего: {{ totalInRubles }}</p>
        <NuxtLink
          v-if="cart.length"
          to="/cart/checkout"
          class="cart__checkout-link"
        >
          Оформить заказ
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
section {
  width: 100%;
  font-size: 1rem;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 520px) {
    width: 85%;
    font-size: 1.2rem;
  }
}

.cart__content {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
}

.cart__total {
  display: flex;
  flex-direction: column;
  align-items: flex-center;
  align-self: flex-center;
  font-size: 1.4rem;

  @media (min-width: 524px) {
    align-items: flex-end;
    align-self: flex-end;
  }
}

.cart__checkout-link {
  margin-top: 1rem;
  padding: 0.8rem 1.2rem;
  background-color: #004530;
  color: #ffffff;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    opacity: 0.8;
  }
}
</style>
