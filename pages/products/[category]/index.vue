<script setup lang="ts">

const route = useRoute()


const { data } = await useFetch<Category>('https://mallakto-backend.onrender.com/categories/' + route.params.category, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  key: 'category',
})

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
        :img-src="product.photo_path"
      />
    </ProductsGrid>
  </main>
</template>