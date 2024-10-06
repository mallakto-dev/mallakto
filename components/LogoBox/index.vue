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
    }
    img {
        width: 7rem;
    }
</style>