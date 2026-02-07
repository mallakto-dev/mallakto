<script setup lang="ts">
const { id, title, price, weight, imgSrc, slug, categorySlug } = defineProps<{
  id: string;
  title: string;
  price: number;
  ingredients: string;
  nutritonalFacts: string;
  weight: string;
  imgSrc: string;
  bestBefore: string;
  imgDescription: string;
  slug: string;
  categorySlug: string;
}>();

const { addProduct } = useCartStore();
const { notifySuccess } = useToast();

const numberOfItems = ref<number>(1);

const increase = () => {
  numberOfItems.value++;
};

const decrease = () => {
  if (numberOfItems.value > 0) {
    numberOfItems.value--;
  }
};

const handleClick = () => {
  notifySuccess(`Продукт ${title} был успешно добавлен в корзину`);
  addProduct({
    id,
    title,
    price,
    weight,
    categorySlug,
    slug,
    quantity: numberOfItems.value,
    imgSrc: imgSrc,
  });
};
</script>

<template>
  <section>
    <div><NuxtImg :src="imgSrc" :alt="imgDescription" /></div>
    <div>
      <h2>{{ title }}</h2>
      <span>{{ priceToRubles(price) }}</span>
      <p><strong>Состав:</strong> {{ ingredients }}</p>
      <p><strong>Пищевая ценность:</strong> {{ nutritonalFacts }}</p>
      <p><strong>Вес:</strong> {{ weight }}</p>
      <p>
        <strong>Срок Годности: </strong>
        {{ bestBefore }}
      </p>
      <QuantityPicker
        :is-inline="false"
        @increase="increase"
        @decrease="decrease"
        :number-of-items="numberOfItems"
        :is-label-displayed="true"
      />
      <button @click="handleClick" type="button">
        Добавить в корзину
        <Icon name="fa6-solid:cart-shopping" />
      </button>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1200px) {
    flex-direction: row;
    margin: 0 auto;
    max-width: 980px;
  }
}

h2 {
  margin-top: 0;
}

img {
  width: 100%;
}

div {
  width: 100%;
}

span {
  font-weight: 600;
  font-size: 1.4rem;
}

button {
  width: 100%;
  height: 3rem;
  border: none;
  background-color: #004530;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  &:hover {
    opacity: 0.8;
  }
}
</style>
