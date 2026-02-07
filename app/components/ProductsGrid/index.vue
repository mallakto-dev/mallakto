<script setup lang="ts">

defineProps({
  title: {
    type: String,
    default: ''
  },
})


</script>  

<template>
  <section>
    <h2>{{ title }}</h2>
    <ul>
     <slot />
    </ul>
  </section>
</template>

<style scoped lang="scss">

ul {
  display: grid;
  justify-content: center;
  grid-template-columns: 18rem;
  grid-row-gap: 2rem;
  list-style: none;
  padding: 0;

  @media (min-width: 768px) {
    grid-template-columns: 18rem 18rem;
    grid-gap: 2rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 16.5rem 16.5rem 16.5rem;
    grid-gap: 2rem;
  }
}

h2 {
    text-align: center;
    color: #004530;
    font-size: 2rem;
}
</style>