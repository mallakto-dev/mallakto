<script setup lang="ts">
const cartStore = useCartStore();
const { notifySuccess } = useToast();

const { addProduct } = cartStore;

const { id, title, price, weight, categorySlug, slug, imgSrc } = defineProps<{
  id: string;
  title: string;
  price: number;
  weight: string;
  categorySlug: string;
  slug: string;
  imgSrc: string;
  imgDescription: string;
}>();

const handleClick = () => {
  notifySuccess(`Продукт ${title} был успешно добавлен в корзину`);
  addProduct({
    id,
    title,
    price,
    weight,
    categorySlug,
    slug,
    quantity: 1,
    imgSrc: imgSrc,
  });
};
</script>

<template>
  <li>
    <div>
      <NuxtLink :to="`/products/${categorySlug}/${slug}`">
        <NuxtImg :src="imgSrc" :alt="imgDescription" />
        <h3>{{ title }}</h3>
      </NuxtLink>
      <p>{{ weight }}г</p>
      <p>{{ priceToRubles(price) }}</p>
    </div>
    <button @click="handleClick" type="button">Добавить в корзину +</button>
  </li>
</template>

<style scoped lang="scss">
li {
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
}

div {
  height: 22.25rem;
  margin-bottom: 1rem;
}

p {
  margin: 0.6rem 0;
}

img {
  width: 100%;
  object-fit: cover;
  height: 208px;
}

button {
  width: 70%;
  height: 3rem;
  border: none;
  background-color: #004530;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  padding: 2px;
  margin: 1rem auto;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }

  &:hover {
    opacity: 0.8;
  }
}
</style>
