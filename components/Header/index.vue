<script setup lang="ts">
import Navigation from './Navigation/index.vue'
import CartIcon from './CartIcon/index.vue'
import NavIconMobile from './NavIconMobile/index.vue'

import { ref } from 'vue'

const isNavOpen = ref(false)

const clickHandler = () => {
  isNavOpen.value = false
}

const toggleMenu = () => {
  isNavOpen.value = !isNavOpen.value
}
</script>

<template>
  <header>
    <LogoBox />
    <Navigation
      :is-nav-open="isNavOpen"
      @close-nav="{clickHandler}"
    />
    <CartIcon />
    <NavIconMobile
      :is-close="isNavOpen"
      @toggle="{toggleMenu}"
    />
  </header>
</template>

<style scoped>
header {
    padding: 1rem;
    width: 85%;
    border: 2px solid rgb(0, 69, 48);
    background-color: rgb(255, 253, 250);
    position: fixed;
    left: 0;
    right: 0;
    top: 0px;
    z-index: 5;
    margin: 2rem auto;
    border-radius: 10px;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        gap: 2rem;


        &::before {
      content: '';
    position: absolute;
    top: -38%;
    left: -9%;
    bottom: 0;
    background-color: rgba(255, 253, 250, 0.8);
    z-index: -1;
    border-radius: 0;
    height: 5vh;
    width: 100vw;
    }
    }
}
</style>