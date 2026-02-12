<script lang="ts" setup>
const route = useRoute();

const { data: products } = useNuxtData<Product[]>("products");

const categoryKey = computed(() => `category-${route.params.category}`);

const { data: category } = useNuxtData<Category>(categoryKey.value);

const product = computed(() => {
  if (products.value === undefined) {
    // Fallback to category data if products are not available
    return category.value?.items.find(
      (p) => p.slug.current === route.params.product,
    );
  }
  return products.value?.find(
    (p) =>
      p.category.slug.current === route.params.category &&
      p.slug.current === route.params.product,
  );
});

useHead({
  title: computed(() => product.value ? product.value.title : "Продукт"),
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
      :category-slug="`${route.params.category}`"
      :img-src="product.img_url"
      :img-description="product.img_caption"
      :slug="product.slug.current"
      :ingredients="product.ingredients"
      :nutritonal-facts="product.nutritonal_facts"
      :best-before="product.bestBefore"
    />
  </main>
</template>
