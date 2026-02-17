<script lang="ts" setup>
useRobotsRule("index, follow");

const route = useRoute();

const query = groq`*[_type == "product" && slug.current == $slug][0]{
  "id": _id,
  "title": title,
  "slug": slug,
  "title": title,
  "price": price,
  "weight": weight,
  "slug": slug,
  "img_url": image.asset->url,
  "img_caption": image.alt,
  "ingredients": ingredients,
  "nutritonal_facts": nutritonal_facts,
  "bestBefore": bestBefore,
  "description": metaContent.description,
  "keywords": metaContent.keywords
}`;

const sanity = useSanity();

const productKey = computed(
  () => `${route.params.category}-${route.params.product}`,
);

const { data: product } = useAsyncData(productKey, () =>
  sanity.fetch<Product>(query, {
    slug: route.params.product,
  }),
);


useHead({
  title: computed(() => (product.value ? product.value.title : "Продукт")),
  meta: [
    {
      name: "keywords",
      content: computed(() =>
        product.value ? product.value.keywords : "",
      ),
    },
    {
      name: "description",
      content: computed(() =>
        product.value ? product.value.description : "Описание продукта",
      ),
    },
  ],
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
