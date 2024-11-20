<script setup lang="ts">

const route = useRoute()


const { data } = await useAsyncData<Category>("category", () => $fetch('/api/categories/' + route.params.category, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}))
</script>

<template>
  <main>
<ProductsGrid :title="data?.name">
      <ProductCard
        v-for="product in data?.items"
        :id="product.id"
        :key="product.id"
        :title="product.name"
        :price="product.price"
        :weight="product.weight"
        :category-slug="`${$route.params.category}`"
        :slug="product.slug"
        :img-src="product.img_url"
        :img-description="product.img_caption"
      />
    </ProductsGrid>
  </main>
</template>