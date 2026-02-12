<script setup lang="ts">

const query = groq`*[_type == "category" && slug.current == $slug][0]{
  "id": _id,
  "title": title,
  "slug": slug,
  "index": index,
  "items": *[_type == "product" && category._ref == ^._id]{
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
  }
}`

const route = useRoute();
const sanity = useSanity()

const categoryKey = computed(() => `category-${route.params.category}`)

const { data } = useAsyncData(categoryKey, () => sanity.fetch<Category>(query, { slug: route.params.category }))

</script>

<template>
  <main>
    <ProductsGrid :title="data?.title">
      <ProductCard
        v-for="product in data?.items"
        :id="product.id"
        :key="product.id"
        :title="product.title"
        :price="product.price"
        :weight="product.weight"
        :category-slug="`${route.params.category}`"
        :slug="product.slug.current"
        :img-src="product.img_url"
        :img-description="product.img_caption"
      />
    </ProductsGrid>
  </main>
</template>