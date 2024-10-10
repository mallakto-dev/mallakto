<script lang="ts" setup>

const route = useRoute();

const { data: category } = useNuxtData<Category>('category');

const product = category.value ? category.value.items.find((product: Product) => product.slug === route.params.product) : null;

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
        :img-src="product.photo_path" 
        :slug="product.slug"
        :ingredients="product.ingredients"
        :nutrition-facts="product.nutrition_facts" 
        :shelf-life="product.shelf_life"
        />
</main>
</template>