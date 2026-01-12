<script lang="ts" setup>

const route = useRoute();

const { data: products } = useNuxtData<Product[]>('products');

console.log("Products: ", products.value);
const product = computed(() => {
  return products.value?.find(p => 
    p.category.slug.current === route.params.category && 
    p.slug.current === route.params.product
  );
});

</script>

<template>
        <main>
 <Product
        v-if="product"
        :id="product.id"
        :title="product.title"
        :price="product.price"
        :weight="product.weight"
        :category-slug="`${$route.params.category}`"
        :img-src="product.img_url" 
        :img-description="product.img_caption"
        :slug="product.slug.current"
        :ingredients="product.ingredients"
        :nutrition-facts="product.nutrition_facts" 
        :shelf-life="product.shelf_life"
        />
</main>
</template>