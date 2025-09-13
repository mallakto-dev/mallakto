<script setup lang="ts">
import type { Product } from '~/types/product';


  const { data } = await useFetch<Product[]>('/api/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    key: 'products',
})

</script>  


<template>
  <main>
    <AboutCta />
    <ProductsGrid title="Продукция">
      <ProductCard
        v-for="product in data"
        :id="product.id"
        :key="product.id"
        :title="product.name"
        :price="product.price"
        :weight="product.weight"
        :category-slug="product.category.slug"
        :slug="product.slug"
        :img-src="product.img_url"
        :img-description="product.img_caption"
      />
    </ProductsGrid>
    <LegalDisclaimer />
  </main>
</template>
