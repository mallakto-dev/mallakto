<script setup lang="ts">
import LogoBox from '~/components/LogoBox/index.vue'
import NavButtons from './NavButtons/index.vue'
import Navigation from './Navigation/index.vue'

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
  <header :class="{nav_open: isNavOpen}">
    <LogoBox grid-area="logo"/>
    <Navigation :is-nav-open="isNavOpen" @close-nav="clickHandler" @toggle-menu="toggleMenu" />
    <NavButtons :is-nav-open="isNavOpen" @toggle-menu="toggleMenu" />
  </header>
</template>

<style scoped>
header {
  display: grid;
  grid-template-areas: 
  "logo navButtons"
  "navigation navigation";
  padding: 1rem;
  border: 2px solid rgb(0, 69, 48);
  border-top: none;
  background-color: rgb(255, 253, 250);
  position: fixed;
  left: 0;
  right: 0;
  top: 0px;
  z-index: 5;
  margin: 0 auto;
  width: 95%;
  border-radius: 0 0 10px 10px;

  &.nav_open {
    background-color: #faddd4;  
  }

  @media (min-width: 768px) {
    background-color: #fffdfa;
    margin: 2rem auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 10px;
    border: 2px solid rgb(0, 69, 48);

    &::before {
      content: '';
      position: absolute;
      top: -6.2vh;
      left: -9%;
      bottom: 0;
      background-color: rgba(255, 253, 250, 0.8);
      z-index: -5;
      border-radius: 0;
      height: 6vh;
      width: 100vw;
    }
  }

  @media (min-width: 1024px) {
    width: 85%;
    gap: 1rem;
  }
}

</style>