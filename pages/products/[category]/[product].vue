<script lang="ts" setup>

const route = useRoute();

const { data: products } = useNuxtData<Product[]>('products');

const product = products.value ? products.value.find((product: Product) => product.slug === route.params.product) : null;

</script>

<template>
        <main>
 <Product
        v-if="product"
        :id="product.id"
        :title="product.name"
        :price="product.price"
        :weight="product.weight"
        :category-slug="`${$route.params.category}`"
        :img-src="product.img_url" 
        :img-description="product.img_caption"
        :slug="product.slug"
        :ingredients="product.ingredients"
        :nutrition-facts="product.nutrition_facts" 
        :shelf-life="product.shelf_life"
        />
</main>
</template>