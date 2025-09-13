<script setup lang="ts">
 defineProps({
  gridArea: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <div>
    <NuxtLink to="/">
      <img
        src="~/assets/img/logo.svg"
        alt="логотип Маллакто"
      >
    </Nuxtlink>
  </div>
</template>

<style scoped>
    div {
      grid-area: v-bind('gridArea');
      align-self: center;
      margin-left: 1rem;
    }
    img {
        width: 7rem;
    }

    @media (min-width: 768px) {
      div {
        margin-left: 0;
      }
    }
</style>