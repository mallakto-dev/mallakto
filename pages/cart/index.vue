<script setup>

const cartStore = useCartStore();

const { cart, totalPrice, cartTotal } = toRefs(cartStore);

definePageMeta({
  title: 'Корзина',
  description: 'Корзина с товарами',
  middleware: [
    function (to, from) {
      if (to.path === '/cart/checkout' && from.path !== "/cart" && cartTotal.value === 0) {
            return navigateTo("/")
        }
    },
  ],
});


const totalInRubles = computed(() => priceToRubles(totalPrice.value));

</script>

<template>
  <main>
    <section>
        <h2>
            Корзина
        </h2>
         <p v-if="!cart.length">Корзина пуста</p>
        <div v-if="cart.length" class="cart-content">
            <InlineProduct
              v-for="item in cart"
              :key="item.id"
              :item="item"
            />
        </div>
        <div class="cart-total">
        <p>Всего: {{ totalInRubles }}</p>
        <NuxtLink v-if="cart.length" to="/cart/checkout">
                Оформить заказ
        </NuxtLink>
    </div>
    </section>
  </main>
</template>


<style scoped>

section {
  width: 100%;
  font-size: 1rem;
  margin: 2rem auto;
  padding: 1rem;

  @media (min-width: 520px) {
    width: 85%;
    font-size: 1.2rem;
  }
}

.cart-content {
  display: flex;
  flex-direction: column;
}

.cart-total {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 1.4rem;
}

</style>