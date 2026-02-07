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
  <header>
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
  border: 2px solid rgb(0, 69, 48);
  border-top: none;
  background-color: rgb(255, 253, 250);
  position: sticky;
  left: 0;
  right: 0;
  top: 0px;
  z-index: 5;
  margin: 0 auto;
  width: 95%;
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  }

  @media (min-width: 768px) {
    header {
    background-color: #fffdfa;
    margin: 2rem auto;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 10px;
    border: 2px solid rgb(0, 69, 48);
    }
  }

  @media (min-width: 1024px) {
    header {
    width: 85%;
    gap: 1rem;
    }
  }

</style>