<script setup lang="ts">
import CartIcon from '~/components/Header/NavButtons/CartIcon/index.vue';
import Sandwich from '~/components/Header/NavButtons/Sandwich/index.vue'

defineProps({
  isNavOpen: Boolean,
});

const emit = defineEmits(['toggleMenu']);

</script>

<template>
<div class="nav-buttons">
    <CartIcon />
    <button
      type="button"
      :class="{ close: isNavOpen }" aria-label="Menu" aria-controls="navigation" :aria-expanded="isNavOpen"
      @click="emit('toggleMenu')">
      <Sandwich :show-close="isNavOpen" />
    </button>
    </div>
    </template>

<style scoped lang="scss">

.nav-buttons {
  display: flex;
  padding: 1rem;
  align-content: center;
  justify-content: flex-end;
  align-items: center;
  grid-area: navButtons;
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background: none;
  border: none;
  width: 3rem;
  height: 2.8rem;
  margin: 0;

  @media (min-width: 768px) {
    display: none;
  }

  .close {
    position: fixed;
  }
}

</style>