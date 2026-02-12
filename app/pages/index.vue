<script setup lang="ts">

useHead({
  title: "Главная",
});

import type { Product } from '~/types/product';

const query = groq`*[_type == "product"]{
  "id": _id,
  "title": title,
  "price": price,
  "weight": weight,
  "category": category->{
    "slug": slug
  },
  "slug": slug,
  "img_url": image.asset->url,
  "img_caption": image.alt,
  "ingredients": ingredients,
  "nutritonal_facts": nutritonal_facts,
  "bestBefore": bestBefore
}`
const sanity = useSanity()

const { data } = useAsyncData('products', () => sanity.fetch< Product[] >(query))

</script>  


<template>
  <main>
    <AboutCta />
    <ProductsGrid title="Продукция" v-if="data">
       <ProductCard
        v-for="product in data"
        :id="product.id"
        :key="product.id"
        :title="product.title"
        :price="product.price"
        :weight="product.weight"
        :category-slug="product.category.slug.current"
        :slug="product.slug.current"
        :img-src="product.img_url"
        :img-description="product.img_caption"
      />
    </ProductsGrid>
    <LegalDisclaimer />
  </main>
</template>
