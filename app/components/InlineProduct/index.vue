<script setup lang="ts">
const cartStore = useCartStore();

const { decreaseQuantity, increaseQuantity, removeProduct } = cartStore;

const { item } = defineProps({
  item: {
    type: Object as () => Pick<
      CartProduct,
      | "id"
      | "imgSrc"
      | "title"
      | "weight"
      | "slug"
      | "categorySlug"
      | "price"
      | "quantity"
    >,
    required: true,
  },
});

const productLink = computed(() => {
  return `products/${item.categorySlug}/${item.slug}`;
});
</script>
<template>
  <article class="product">
    <div class="product__image">
      <NuxtImg :src="item.imgSrc" :alt="item.title" />
    </div>
    <div class="product__wrapper">
      <button
        class="product__delete"
        type="button"
        aria-label="Удалить"
        @click="removeProduct(item.id)"
      >
        <Icon name="fa6-solid:trash-can" class="product__delete--icon" />
      </button>
      <NuxtLink :to="productLink" class="product__link">
        <p>{{ item.title }} {{ item.weight }}</p>
      </NuxtLink>
      <p class="product__price">{{ priceToRubles(item.price) }}</p>
      <QuantityPicker
        class-name="product__quantity-picker"
        :is-inline="true"
        :number-of-items="item.quantity"
        :is-label-displayed="true"
        @increase="increaseQuantity(item.id)"
        @decrease="decreaseQuantity(item.id)"
      />
    </div>
  </article>
</template>

<style lang="scss" scoped>
.product {
  display: grid;
  grid-template-columns: 8rem 1fr auto;
  gap: 0.8rem;
  width: 100%;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e2e8f0;

  @media (min-width: 524px) {
    grid-template-columns: minmax(10rem, 1fr) 1fr auto;
    grid-template-rows: 250px;
    max-width: 900px;
    margin: 0 auto;
  }
}

.product__image {
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.product__wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (min-width: 524px) {
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}

.product__link {
  display: inline-flex;
}

p {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
}

.product__price {
  font-weight: bold;
}

.product__delete {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #004530;
  border: 1px solid #004530;
  border-radius: 4px;
  text-align: center;
  width: 2.5rem;
  height: 2.5rem;
  align-self: flex-end;
  transition: 300ms ease-in-out;
}

.product__delete:hover {
  opacity: 0.8;
}

.product__delete--icon {
  color: #ffffff;
}
</style>
